import { useState } from "react";
import Form from "./components/Form";
import ShowResult from "./components/ShowResult";

const App = () => {
  const [data, setData] = useState(null);
  
  const getData = (response) => {
    setData(response);
  };

  if (data) {
    return (
      <div className="  my-2">
        <h1 className="text-center text-white">React GPS</h1>
        <Form getData={getData} />
        <ShowResult
          hemisphere={data.latitud.hemisphere}
          degrees={data.latitud.degrees}
          minutes={data.latitud.minutes}
          seconds={data.latitud.seconds}
          line="latitud"
        />
        <ShowResult
          hemisphere={data.longitud.hemisphere}
          degrees={data.longitud.degrees}
          minutes={data.longitud.minutes}
          seconds={data.longitud.seconds}
          line="longitud"
        />
      </div>
    );
  } else {
    return (
      <div className=" container my-2">
        <h1 className="text-center text-white">React GPS</h1>
        <Form getData={getData} />
      </div>
    );
  }
};

export default App;
