import Cii from "./components/Cii";
import Mptsouth from "./components/Mptsouth";

import Nlex from "./components/Nlex";
import Layout from "./shared/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                {" "}
                <Nlex />
              </Layout>
            }
          />
          <Route
            path="/south"
            element={
              <Layout>
                {" "}
                <Mptsouth />
              </Layout>
            }
          />
          <Route
            path="/CII"
            element={
              <Layout>
                {" "}
                <Cii />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
