import { useEffect, useState } from "react";
import api from "../api/axios";

function Homework() {

  const [homeworks, setHomeworks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    class: "",
    dueDate: ""
  });


  useEffect(() => {

    fetchHomework();

  }, []);



  const fetchHomework = async () => {

    try {

      const response = await api.get("/homework");

      setHomeworks(response.data);

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

      await api.post("/homework", formData);


      setFormData({
        title: "",
        description: "",
        subject: "",
        class: "",
        dueDate: ""
      });


      fetchHomework();


    } catch (error) {

      console.log(error);

    }

  };



  return (

    <div>

      <h1>
        Homework Management
      </h1>


      <form onSubmit={handleSubmit}>


        <input
          name="title"
          placeholder="Homework Title"
          value={formData.title}
          onChange={handleChange}
        />


        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />


        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />


        <input
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
        />


        <button type="submit">
          Add Homework
        </button>


      </form>



      <table border="1">

        <thead>

          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
          </tr>

        </thead>


        <tbody>

          {
            homeworks.map((hw) => (

              <tr key={hw.id}>

                <td>{hw.id}</td>

                <td>{hw.title}</td>

                <td>{hw.description}</td>

                <td>{hw.dueDate}</td>

              </tr>

            ))
          }

        </tbody>


      </table>


    </div>

  );

}

export default Homework;