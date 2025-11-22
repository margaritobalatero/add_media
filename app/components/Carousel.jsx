import { useState } from "react";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0)
    return <p className="text-center mt-3">No media available.</p>;

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  const isVideo = (url) => /\.(mp4|webm|ogg)$/.test(url);

  return (
    <>
      {/* Bootstrap 5 CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />

      <div className="container d-flex flex-column align-items-center gap-3 py-4">

        {/* Carousel Box */}
        <div
          className="position-relative rounded shadow overflow-hidden"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "330px",
            background: "#222",
          }}
        >
          {isVideo(items[index].url) ? (
            <video
              src={items[index].url}
              controls
              autoPlay
              muted
              loop
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <img
              src={items[index].url}
              alt={items[index].caption}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          )}

          {/* Left Arrow */}
          <button
            className="btn btn-dark position-absolute top-50 translate-middle-y start-0 opacity-75"
            onClick={prev}
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            className="btn btn-dark position-absolute top-50 translate-middle-y end-0 opacity-75"
            onClick={next}
          >
            ❯
          </button>
        </div>

        {/* Caption */}
        <p className="text-light fs-5">{items[index].caption}</p>

        {/* Small Prev/Next Buttons */}
        <div className="d-flex gap-3">
          <button onClick={prev} className="btn btn-primary px-4">
            Prev
          </button>
          <button onClick={next} className="btn btn-primary px-4">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
