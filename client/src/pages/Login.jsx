import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await api.post(
        "/auth/login",
        formData
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      navigate("/");


    } catch (error) {

      console.log(error);

      alert("Invalid Login");

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >


        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>



        <input

          name="email"

          type="email"

          placeholder="Email"

          value={formData.email}

          onChange={handleChange}

          className="border p-2 rounded w-full mb-4"

        />



        <input

          name="password"

          type="password"

          placeholder="Password"

          value={formData.password}

          onChange={handleChange}

          className="border p-2 rounded w-full mb-4"

        />



        <button

          type="submit"

          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"

        >

          Login

        </button>


      </form>


    </div>

  );

}


export default Login;