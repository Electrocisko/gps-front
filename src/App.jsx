import { useState } from "react";
import Form from "./components/Form";
import ShowResult from "./components/ShowResult";

const App = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  const getData = (response) => {
    setData(response);
  };

  const setSpinner = (state) => {
    setLoader(state);
  };

  if (data) {
    return (
      <div className=" container my-2">
        <h1 className="text-center text-white">Conversor Coordenas GPS</h1>
        <p className="text-white">De formato decimal a grados</p>
        <Form getData={getData} setSpinner={setSpinner} />

        {loader ? (
          <div className="text-center">
            <div className="spinner-border  " role="status">
              <div className="d-flex justify-content-center">
                <span className="visually-hidden text-center">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    );
  } else {
    return (
      <div className=" container my-2">
        <h1 className="text-center text-white">Conversor Coordenas GPS</h1>
        <p className="text-white">De formato decimal a grados</p>
        <Form getData={getData} setSpinner={setSpinner} />
      </div>
    );
  }
};

export default App;
