import { Form, redirect } from "@remix-run/react";
import { connectDB, Item } from "../utils/db.server.js";

export async function action({ request }) {
  const formData = await request.formData();
  const caption = formData.get("caption");
  const mediaUrl = formData.get("mediaUrl");
  const type = formData.get("type");
  await connectDB();
  await Item.create({ caption, mediaUrl, type });
  return redirect("/dashboard");
}

export default function AddItem() {
  return (
    <div className="container py-4">
      {/* Bootstrap 5 CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoYz1HIr2z5e2e1sFidk8zZ4yY1pG1lEN5Kq0p2d6Y5p3yz"
        crossOrigin="anonymous"
      />

      <h1 className="mb-4 text-center">Add Media</h1>

      <Form method="post" className="d-flex flex-column gap-3">
        <input
          name="caption"
          placeholder="Caption"
          required
          className="form-control"
        />
        <input
          name="mediaUrl"
          placeholder="Image or Video URL"
          required
          className="form-control"
        />
        <select name="type" className="form-select">
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </Form>

      <div className="mt-3">
        <a href="/dashboard" className="btn btn-outline-secondary">
          ⬅ Back
        </a>
      </div>
    </div>
  );
}
