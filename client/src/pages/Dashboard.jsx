import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalHomework: 0
  });

  useEffect(() => {

    api.get("/dashboard")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div className="flex items-center gap-4">

          <p className="font-semibold">
            Welcome, {user?.name}
          </p>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        <div className="bg-white shadow rounded-lg p-6">

          <h2 className="text-gray-500">
            Total Students
          </h2>

          <p className="text-4xl font-bold mt-3">
            {data.totalStudents}
          </p>

        </div>



        <div className="bg-white shadow rounded-lg p-6">

          <h2 className="text-gray-500">
            Total Teachers
          </h2>

          <p className="text-4xl font-bold mt-3">
            {data.totalTeachers}
          </p>

        </div>



        <div className="bg-white shadow rounded-lg p-6">

          <h2 className="text-gray-500">
            Total Homework
          </h2>

          <p className="text-4xl font-bold mt-3">
            {data.totalHomework}
          </p>

        </div>


      </div>

    </div>

  );

}

export default Dashboard;