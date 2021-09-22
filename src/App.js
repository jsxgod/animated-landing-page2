import { React, useEffect, useState } from "react";
import { Banner, NavBar, Loader, Section } from "./components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import "./sass/main.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
          <NavBar />
          <div className="site-content-wrapper">
            <Banner loading={loading}/>
            <Section title={"design"}/>
            <Section title={"strategy"}/>
          </div>
          </>
        )
      }
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
