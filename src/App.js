import { React, useEffect, useState } from "react";
import { Banner, NavBar, Loader } from "./components";
import "./sass/main.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
        <NavBar />
        <Banner loading={loading}/>
        </>
      )
    }
    </>
  );
}

export default App;
