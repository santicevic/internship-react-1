import { useState } from "react";
import validator from "validator";

const InternForm = ({ addIntern }) => {
  const [formState, setFromState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Dev",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(formState.email)) {
      setError("Invalid email");
      return;
    }
    addIntern(formState);
    setFromState({ firstName: "", lastName: "", subject: "Dev", email: "" });
    setError("");
  };

  const handleChange = ({ target: { name, value } }) => {
    setFromState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="intern-form">
      <input
        value={formState.firstName}
        name="firstName"
        onChange={handleChange}
        placeholder="Ime"
      />
      <input
        value={formState.lastName}
        name="lastName"
        onChange={handleChange}
        placeholder="Prezime"
      />
      <input
        value={formState.email}
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <select
        value={formState.subject}
        subject="subject"
        onChange={handleChange}
      >
        <option>Dev</option>
        <option>Design</option>
        <option>Marketing</option>
      </select>
      <button type="submit">Dodaj</button>
      {error && <span>ERROR: {error}</span>}
    </form>
  );
};

export default InternForm;
