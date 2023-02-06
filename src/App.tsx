import { Route, Routes } from "react-router-dom";

import GraphPage from "./page/GraphPage";
import HomePage from "./page/HomePage";

import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graph" element={<GraphPage />} />
      </Routes>
    </>
  );
};
export default App;
