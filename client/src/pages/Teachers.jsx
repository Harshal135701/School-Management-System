import { useEffect, useState } from "react";
import api from "../api/axios";

function Teachers() {

  const [teachers, setTeachers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: ""
  });


  useEffect(() => {

    fetchTeachers();

  }, []);


  const fetchTeachers = async () => {

    try {

      const response = await api.get("/teachers");

      setTeachers(response.data);

    } catch (error) {

      console.log(error);

    }

  };


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/teachers", formData);

      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        subject: ""
      });

      fetchTeachers();


    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Teachers Management
      </h1>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <input
          name="name"
          placeholder="Teacher Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />


        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />


        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="border p-2 rounded"
        />


        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Teacher
        </button>

      </form>



     <table className="w-full bg-white shadow rounded-lg overflow-hidden">

        <thead>

          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Subject</th>
          </tr>

        </thead>


        <tbody>

          {
            teachers.map((teacher) => (

              <tr key={teacher.id}>

               <td className="p-3 border">
                  {teacher.id}
                </td>

                <td className="p-3 border">
                  {teacher.name}
                </td>

                <td className="p-3 border">
                  {teacher.email}
                </td>

                <td className="p-3 border">
                  {teacher.subject}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>


    </div>

  );

}

export default Teachers;