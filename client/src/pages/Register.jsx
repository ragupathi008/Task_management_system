import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/axios";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/auth/register", form);

      alert(data.message);

      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>

        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <Button
          text={loading ? "Creating Account..." : "Register"}
          disabled={loading}
        />

      </form>

      <div className="link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>

    </div>
  );
}

export default Register;