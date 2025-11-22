import { Form, useActionData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { loginUser } from "../utils/auth.server.js";
import { createUserSession } from "../utils/session.server.js";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const user = await loginUser({ username, password });
    return createUserSession(user._id, "/dashboard");
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
}

export default function Login() {
  const data = useActionData();

  return (
    <>
      {/* Bootstrap 5 CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />

      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
        <div className="card p-4 shadow-lg" style={{ width: "370px", background: "#1e1e1e" }}>
          <h2 className="text-center mb-3">Login</h2>

          {data?.error && (
            <div className="alert alert-danger py-2 text-center">
              {data.error}
            </div>
          )}

          <Form method="post" action="/login" reloadDocument>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                className="form-control bg-secondary text-white"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control bg-secondary text-white"
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mb-2">
              Login
            </button>

            <p className="text-center mt-2">
              Don’t have an account?{" "}
              <a href="/signup" className="text-info">
                Sign Up
              </a>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
