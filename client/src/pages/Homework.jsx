import { useEffect, useState } from "react";
import api from "../api/axios";

function Homework() {

  const [homeworks, setHomeworks] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    class: "",
    dueDate: ""
  });

  const [file, setFile] = useState(null);


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
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("subject", formData.subject);
      data.append("class", formData.class);
      data.append("dueDate", formData.dueDate);

      if (file) {
        data.append("attachment", file);
      }

      await api.post("/homework", data);

      setFormData({
        title: "",
        description: "",
        subject: "",
        class: "",
        dueDate: "",
      });

      setFile(null);

      fetchHomework();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {

    try {

      await api.delete(`/homework/${id}`);

      fetchHomework();

    } catch (error) {

      console.log(error);

    }

  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("subject", formData.subject);
      data.append("class", formData.class);
      data.append("dueDate", formData.dueDate);

      if (file) {
        data.append("attachment", file);
      }

      await api.put(`/homework/${editId}`, data);

      setEditId(null);

      setFormData({
        title: "",
        description: "",
        subject: "",
        class: "",
        dueDate: "",
      });

      setFile(null);

      fetchHomework();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublish = async (id) => {
    try {
      await api.put(`/homework/${id}/publish`);
      fetchHomework();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Homework Management</h1>

      <form
        onSubmit={editId ? handleUpdate : handleSubmit}
        className="bg-white shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="title"
          placeholder="Homework Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="description"
          placeholder="Description"
          value={formData.description}
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

        <input
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="file"
          accept=".pdf,image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {editId ? "Update Homework" : "Add Homework"}
        </button>
      </form>

      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Due Date</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Attachment</th>
          </tr>
        </thead>

        <tbody>
          {homeworks.map((hw) => (
            <tr key={hw.id}>
              <td className="p-3 border">{hw.id}</td>

              <td className="p-3 border">{hw.title}</td>

              <td className="p-3 border">{hw.description}</td>

              <td className="p-3 border">{hw.dueDate}</td>

              <td className="p-3 border">
                {hw.published ? (
                  <span className="text-green-600 font-semibold">
                    Published
                  </span>
                ) : (
                  <span className="text-yellow-600 font-semibold">
                    Draft
                  </span>
                )}
              </td>

              <td className="p-3 border">
                <button
                  onClick={() => {
                    setEditId(hw.id);

                    setFormData({
                      title: hw.title,
                      description: hw.description,
                      subject: hw.subject,
                      class: hw.class,
                      dueDate: hw.dueDate,
                    });
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                {!hw.published && (
                  <button
                    onClick={() => handlePublish(hw.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Publish
                  </button>
                )}

                <button
                  onClick={() => handleDelete(hw.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>

              <td className="p-3 border">
                {hw.attachment ? (
                  <a
                    href={`http://localhost:5000/uploads/${hw.attachment}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    📄 View File
                  </a>
                ) : (
                  <span className="text-gray-500">No Attachment</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}


export default Homework;