import { useState } from "react";

const Form = ({ getData, setSpinner }) => {
  const [coord, setCoord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpointApi = "https://decimaldegrees-gps-conversor-production.up.railway.app/api/conversor/";
    const url = endpointApi + coord;
    setSpinner(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        getData(data);
        setSpinner(false);
      })
      .catch((error) => console.log(JSON.stringify(error)));
    e.target.reset();
  };

  return (
    <div className="text-center mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control "
          type="text"
          placeholder="Pegue las coordenadas aqui"
          name="coordinates"
          onChange={(e) => setCoord(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary mt-5 mb-5">
          Convertir
        </button>
      </form>
    </div>
  );
};

export default Form;
