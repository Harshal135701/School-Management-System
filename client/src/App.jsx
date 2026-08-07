import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Homework from "./pages/Homework";

function App() {

  return (

    <BrowserRouter>

      <Layout>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/teachers"
            element={<Teachers />}
          />

          <Route
            path="/homework"
            element={<Homework />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>

  );

}

export default App;