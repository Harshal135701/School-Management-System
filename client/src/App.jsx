import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Homework from "./pages/Homework";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Layout>

        <Routes>

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
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

          <Route path="/login" element={<Login />} />

        </Routes>

      </Layout>

    </BrowserRouter>

  );

}

export default App;