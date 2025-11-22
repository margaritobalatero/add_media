// dashboard.jsx
import { useLoaderData, Form } from "@remix-run/react";
import { useState } from "react";
import { json, redirect } from "@remix-run/node";
import { connectDB, Item } from "../utils/db.server.js";

export async function loader({ request }) {
  await connectDB();
  const url = new URL(request.url);
  const search = url.searchParams.get("q") || "";
  const items = await Item.find(
    search ? { caption: new RegExp(search, "i") } : {}
  ).sort({ _id: -1 });
  return json({ items, search });
}

export async function action({ request }) {
  await connectDB();
  const formData = await request.formData();
  const _id = formData.get("_id");
  const actionType = formData.get("action");

  if (actionType === "delete" && _id) await Item.findByIdAndDelete(_id);
  if (actionType === "update" && _id) {
    await Item.findByIdAndUpdate(_id, {
      caption: formData.get("caption"),
      mediaUrl: formData.get("mediaUrl"),
    });
  }
  return redirect("/dashboard");
}

function getYouTubeEmbedUrl(url) {
  try {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w\-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  } catch {
    return null;
  }
}

export default function Dashboard() {
  const { items, search } = useLoaderData();
  const [editingId, setEditingId] = useState(null);
  const [detailItem, setDetailItem] = useState(null);

  return (
    <div className="container py-4">
      {/* Bootstrap CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoYz1HIr2z5e2e1sFidk8zZ4yY1pG1lEN5Kq0p2d6Y5p3yz"
        crossOrigin="anonymous"
      />

      <h1 className="mb-4 text-center">🎠 Media Grid</h1>

      {/* Search */}
      <Form method="get" className="d-flex mb-4">
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder="Search caption..."
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </Form>

      {/* Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map((item) => {
          const youtubeEmbed = getYouTubeEmbedUrl(item.mediaUrl);
          const isEditing = editingId === item._id;

          return (
            <div className="col" key={item._id}>
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="ratio ratio-16x9">
                  {item.type === "image" ? (
                    <img
                      src={item.mediaUrl}
                      className="card-img-top object-fit-cover"
                      alt={item.caption}
                    />
                  ) : youtubeEmbed ? (
                    <iframe
                      src={youtubeEmbed}
                      allowFullScreen
                      title={item.caption}
                    ></iframe>
                  ) : (
                    <video
                      src={item.mediaUrl}
                      controls
                      className="w-100 h-100"
                    ></video>
                  )}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.caption}</h5>

                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {/* Delete */}
                    <Form method="post" className="d-inline">
                      <input type="hidden" name="_id" value={item._id} />
                      <input type="hidden" name="action" value="delete" />
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </Form>

                    {/* Update */}
                    {isEditing ? (
                      <Form
                        method="post"
                        className="d-flex flex-column gap-2 flex-grow-1"
                      >
                        <input type="hidden" name="_id" value={item._id} />
                        <input type="hidden" name="action" value="update" />
                        <input
                          type="text"
                          name="caption"
                          defaultValue={item.caption}
                          className="form-control form-control-sm"
                          required
                        />
                        <input
                          type="text"
                          name="mediaUrl"
                          defaultValue={item.mediaUrl}
                          className="form-control form-control-sm"
                          required
                        />
                        <div className="d-flex gap-2">
                          <button className="btn btn-success btn-sm">Save</button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => setEditingId(item._id)}
                      >
                        Update
                      </button>
                    )}

                    <button
                      className="btn btn-info btn-sm text-white"
                      onClick={() => setDetailItem(item)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {detailItem && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setDetailItem(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{detailItem.caption}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setDetailItem(null)}
                ></button>
              </div>
              <div className="modal-body">
                {detailItem.type === "image" ? (
                  <img
                    src={detailItem.mediaUrl}
                    className="img-fluid"
                    alt={detailItem.caption}
                  />
                ) : getYouTubeEmbedUrl(detailItem.mediaUrl) ? (
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={getYouTubeEmbedUrl(detailItem.mediaUrl)}
                      allowFullScreen
                      title={detailItem.caption}
                    ></iframe>
                  </div>
                ) : (
                  <video
                    src={detailItem.mediaUrl}
                    controls
                    autoPlay
                    className="w-100"
                  ></video>
                )}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setDetailItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between mt-4">
        <a href="/add" className="btn btn-success">
          ➕ Add Media
        </a>
        <a href="/login" className="btn btn-outline-secondary">
          Logout
        </a>
      </div>
    </div>
  );
}
