import { useEffect, useState } from "react";
import api from "../api/axios";

function Students() {
    const [students, setStudents] = useState([]);
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        class: "",
        section: "",
        parentName: "",
        parentMobile: "",
        address: ""
    });

    useEffect(() => {
        api.get("/students")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/students", formData);
            setFormData({
                firstName: "",
                lastName: "",
                class: "",
                section: "",
                parentName: "",
                parentMobile: "",
                address: ""
            });

            const response = await api.get("/students");
            setStudents(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/students/${id}`);
            const response = await api.get("/students");
            setStudents(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/students/${editId}`, formData);

            setEditId(null);

            setFormData({
                firstName: "",
                lastName: "",
                class: "",
                section: "",
                parentName: "",
                parentMobile: "",
                address: ""
            });


            const response = await api.get("/students");

            setStudents(response.data);


        } catch (error) {

            console.log(error);

        }

    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">
                Students Management
            </h1>

            {/* Form to Add Student */}
            <form
                onSubmit={editId ? handleUpdate : handleSubmit}
            >
                <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
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
                    name="section"
                    placeholder="Section"
                    value={formData.section}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="parentName"
                    placeholder="Parent Name"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="parentMobile"
                    placeholder="Parent Mobile"
                    value={formData.parentMobile}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border p-2 rounded md:col-span-2"
                />

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded font-semibold"
                    >
                        {editId ? "Update Student" : "Add Student"}
                    </button>
                </div>
            </form>

            {/* Students Table */}
            <table className="w-full bg-white shadow rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="p-3 border">ID</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Class</th>
                        <th className="p-3 border">Section</th>
                        <th className="p-3 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td className="p-3 border">{student.id}</td>
                            <td className="p-3 border">{student.firstName} {student.lastName}</td>
                            <td className="p-3 border">{student.class}</td>
                            <td className="p-3 border">{student.section}</td>
                            <td className="p-3 border text-center">
                                <button
                                    onClick={() => handleDelete(student.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => {

                                        setEditId(student.id);

                                        setFormData({
                                            firstName: student.firstName,
                                            lastName: student.lastName,
                                            class: student.class,
                                            section: student.section,
                                            parentName: student.parentName,
                                            parentMobile: student.parentMobile,
                                            address: student.address
                                        });

                                    }}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Students;