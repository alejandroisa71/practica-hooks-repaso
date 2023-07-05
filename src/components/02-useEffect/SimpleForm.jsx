import { useEffect, useState } from "react";
import "./effect.css";

export const SimpleForm = () => {
  const [fomrState, setFomrState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = fomrState;

  useEffect(() => {
    console.log("hey!!");
  }, []);

  useEffect(() => {
    console.log("formState cambió");
  }, [fomrState]);

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFomrState({
      ...fomrState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          value={name}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gamil.com"
          value={email}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
