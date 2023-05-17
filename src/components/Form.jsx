import { useState } from "react";

const Form = ({ getData }) => {
  const [coord, setCoord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const coordinates = coord;
    const split = coordinates.split(",");
    const latitud = split[0];
    const longitud = split[1];
    const endpointApi = "https://sunset-easy-spleen.glitch.me/api/conversor/";
    const url = endpointApi + latitud + "," + longitud;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        getData(data);
      })
      .catch((error) => console.log(JSON.stringify(error)));
    e.target.reset()
  };

  return (
    <div className="text-center mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control "
          type="text"
          placeholder="Pegue las coordenadas"
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
