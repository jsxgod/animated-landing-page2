import { React, useEffect, useState } from "react";
import { Banner, NavBar, Loader } from "./components";
import { AnimatePresence, motion } from "framer-motion";
import "./sass/main.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
        <NavBar />
        <Banner loading={loading}/>
        </>
      )
    }
    </AnimatePresence>
  );
}

export default App;
