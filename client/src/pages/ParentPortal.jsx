import { useEffect, useState } from "react";
import api from "../api/axios";

function ParentPortal() {

    const [homework, setHomework] = useState([]);

    const [search, setSearch] = useState("");
    const [subject, setSubject] = useState("");
    const [studentClass, setStudentClass] = useState("");

    const [selectedHomework, setSelectedHomework] = useState(null);



    useEffect(() => {
        fetchHomework();
    }, [search, subject, studentClass]);



    const fetchHomework = async () => {

        try {

            const response = await api.get("/homework/parent", {
                params: {
                    search,
                    subject,
                    class: studentClass,
                },
            });

            setHomework(response.data);

        } catch (error) {

            console.log(error);

        }

    };



    const renderPreview = (file) => {

        const fileUrl = `http://localhost:5000/uploads/${file}`;

        const extension = file.split(".").pop().toLowerCase();



        if (
            extension === "jpg" ||
            extension === "jpeg" ||
            extension === "png"
        ) {

            return (
                <img
                    src={fileUrl}
                    alt="Homework Attachment"
                    className="w-full rounded mt-4"
                />
            );

        }



        if (extension === "pdf") {

            return (
                <iframe
                    src={fileUrl}
                    title="PDF Preview"
                    className="w-full h-96 mt-4"
                />
            );

        }



        if (
            extension === "mp4" ||
            extension === "avi" ||
            extension === "mov"
        ) {

            return (
                <video
                    controls
                    className="w-full mt-4"
                >
                    <source src={fileUrl} />
                </video>
            );

        }


        return (
            <p className="mt-4">
                Preview not available
            </p>
        );

    };



    return (

        <div className="space-y-6">


            <h1 className="text-3xl font-bold">
                Parent Portal
            </h1>




            <input
                type="text"
                placeholder="Search Homework..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full"
            />




            <div className="flex gap-4">


                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border p-2 rounded"
                >

                    <option value="">
                        All Subjects
                    </option>

                    <option value="Math">
                        Math
                    </option>

                    <option value="Science">
                        Science
                    </option>

                    <option value="English">
                        English
                    </option>

                    <option value="Computer">
                        Computer
                    </option>

                </select>




                <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="border p-2 rounded"
                >

                    <option value="">
                        All Classes
                    </option>


                    {
                        [...Array(10)].map((_, index) => (

                            <option
                                key={index + 1}
                                value={index + 1}
                            >
                                Class {index + 1}
                            </option>

                        ))
                    }


                </select>


            </div>





            <table className="w-full bg-white shadow rounded-lg overflow-hidden">


                <thead>

                    <tr>

                        <th className="p-3 border">
                            Title
                        </th>

                        <th className="p-3 border">
                            Subject
                        </th>

                        <th className="p-3 border">
                            Class
                        </th>

                        <th className="p-3 border">
                            Due Date
                        </th>

                        <th className="p-3 border">
                            Attachment
                        </th>

                        <th className="p-3 border">
                            Details
                        </th>

                    </tr>

                </thead>





                <tbody>


                    {
                        homework.map((hw) => (

                            <tr key={hw.id}>


                                <td className="p-3 border">
                                    {hw.title}
                                </td>


                                <td className="p-3 border">
                                    {hw.subject}
                                </td>


                                <td className="p-3 border">
                                    {hw.class}
                                </td>


                                <td className="p-3 border">
                                    {hw.dueDate}
                                </td>



                                <td className="p-3 border">

                                    {
                                        hw.attachment ? (

                                            <button
                                                onClick={() => setSelectedHomework(hw)}
                                                className="text-blue-600 hover:underline"
                                            >
                                                👁 Preview
                                            </button>

                                        ) : (

                                            "No File"

                                        )
                                    }

                                </td>




                                <td className="p-3 border">

                                    <button
                                        onClick={() => setSelectedHomework(hw)}
                                        className="bg-blue-600 text-white px-3 py-1 rounded"
                                    >
                                        View Details
                                    </button>

                                </td>



                            </tr>

                        ))
                    }


                </tbody>


            </table>







            {
                selectedHomework && (

                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">


                        <div className="bg-white rounded-lg p-6 w-[600px] max-h-[90vh] overflow-y-auto">


                            <h2 className="text-2xl font-bold mb-4">
                                {selectedHomework.title}
                            </h2>



                            <p>
                                <b>Description:</b> {selectedHomework.description}
                            </p>



                            <p className="mt-2">
                                <b>Subject:</b> {selectedHomework.subject}
                            </p>



                            <p className="mt-2">
                                <b>Class:</b> {selectedHomework.class}
                            </p>



                            <p className="mt-2">
                                <b>Due Date:</b> {selectedHomework.dueDate}
                            </p>




                            {
                                selectedHomework.attachment && (

                                    <div>

                                        <h3 className="font-bold mt-5">
                                            Attachment Preview
                                        </h3>


                                        {renderPreview(
                                            selectedHomework.attachment
                                        )}

                                    </div>

                                )
                            }




                            <button
                                onClick={() => setSelectedHomework(null)}
                                className="mt-5 bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Close
                            </button>


                        </div>


                    </div>

                )
            }



        </div>

    );

}


export default ParentPortal;