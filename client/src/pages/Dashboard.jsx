import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {

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


  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>


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