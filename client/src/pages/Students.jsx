import { useEffect, useState } from "react";
import api from "../api/axios";

function Students() {

    const [students, setStudents] = useState([]);
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


    return (

        <div className="space-y-6">
            <h1 className="text-3xl font-bold">
                Students Management
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
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
                    className="border p-2 rounded"
                />


                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Add Student
                </button>

            </form>


            <table className="w-full bg-white shadow rounded-lg overflow-hidden">

                <thead>

                    <tr>
                        <th className="p-3 border">ID</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Class</th>
                        <th className="p-3 border">Section</th>
                    </tr>

                </thead>


                <tbody>

                    {
                        students.map((student) => (

                            <tr key={student.id}>

                                <td className="p-3 border">
                                    {student.id}
                                </td>

                                <td className="p-3 border">
                                    {student.firstName} {student.lastName}
                                </td>

                                <td className="p-3 border">
                                    {student.class}
                                </td>

                                <td className="p-3 border">
                                    {student.section}
                                </td>

                            </tr>

                        ))
                    }

                </tbody>


            </table>


        </div>

    );

}

export default Students;