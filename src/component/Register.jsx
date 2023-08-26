import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function save(event) {
    event.preventDefault();
    setErrorMessage(""); // Reset error message on each submit

    // Client-side validation
    if (!username.trim() || !email.trim() || !password.trim()) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Invalid email format.");
      return;
    }

    try {
      await axios.post("http://localhost:8085/api/v1/user/save", {
        username: username,
        email: email,
        password: password,
      });
      alert("User Registration Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>User Registration</h1>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form>
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Name"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
