import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

interface LoginValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: LoginValues) => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3030/login", values);
      const token = response.data.accessToken;
      localStorage.setItem("token", token);
      navigate("/list");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect E-Mail").required("Required"),
    password: Yup.string().min(4, "Min. 4 characters").required("Required"),
  });

  return (
    <div>
      <h2>Login</h2>

      {error && <div>{error}</div>}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">E-Mail</label>
              <Field name="email" type="email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="password">Passwort</label>
              <Field name="password" type="password" />
              {touched.password && errors.password && <div>{errors.password}</div>}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Log in"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
