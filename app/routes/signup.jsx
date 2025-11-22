// app/routes/signup.jsx
import { Form, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { registerUser } from "../utils/auth.server.js";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    await registerUser({ username, password });
    return redirect("/login");
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
}

export default function Signup() {
  const data = useActionData();

  return (
    <>
      {/* ✅ Bootstrap CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
        <h1 className="mb-4">Sign Up</h1>

        {data?.error && (
          <p className="text-danger mb-3">{data.error}</p>
        )}

        <Form method="post" className="bg-secondary p-4 rounded w-75" style={{ maxWidth: "350px" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="form-control mb-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="form-control mb-3"
          />

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign Up
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-info">
              Login
            </a>
          </p>
        </Form>
      </div>
    </>
  );
}
