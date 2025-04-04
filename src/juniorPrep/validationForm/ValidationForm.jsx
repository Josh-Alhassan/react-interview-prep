import React, { useState } from "react";

function ValidationForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  //   Implementing Real-time valudation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, email: value });

    if (!value) {
      setErrors({ ...errors, email: "Email is required" });
    } else if (!validateEmail(value)) {
      setErrors({ ...errors, email: "Invalid email format" });
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, password: value });

    if (!value) {
      setErrors({ ...formData, password: "Password is required" });
    } else if (value.length < 8) {
      setErrors({
        ...formData,
        password: "Password must be at least 8 characters",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
  };

  //  Preventing form submission if input is invalid

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errors.email ||
      errors.password ||
      !formData.email ||
      !formData.password
    ) {
      alert("Fix errors before submitting!");
      return;
    }

    alert("Form submitted successfully");
    console.log("Form Data:", formData);
  };

  // Show submit Button as Disabled when invalid
  const isFormValid =
    !errors.email && !errors.password && formData.email && formData.password;

  return (
    <div style={{ margin: "20px", maxWidth: "400px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="example@email.com"
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "4px 0" }}> {errors.email} </p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle type
            value={formData.password}
            onChange={handlePasswordChange}
            placeholder="At least 8 characters"
            style={{ width: "100%", padding: "8px" }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ marginLeft: "8px" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

          {errors.password && (
            <p style={{ color: "red", margin: "4px 0" }}>{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            padding: "10px 16px",
            backgroundColor: isFormValid ? "#4CAF50" : "#ccc",
            color: "white",
            border: "none",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidationForm;
