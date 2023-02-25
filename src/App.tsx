/* React-Router-Dom */
import { Route, Routes } from "react-router-dom";
/* Page */
import GraphPage from "./page/GraphPage";
import HomePage from "./page/HomePage";
import ListPage from "./page/ListPage";
import CalculatorPage from "./page/CalculatorPage";
/* Component */
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/graph/list" element={<ListPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </>
  );
};
export default App;
