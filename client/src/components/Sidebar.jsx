import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        School Admin
      </h2>


      <nav className="space-y-4">

        <Link 
          className="block hover:text-blue-400"
          to="/"
        >
          Dashboard
        </Link>


        <Link 
          className="block hover:text-blue-400"
          to="/students"
        >
          Students
        </Link>


        <Link 
          className="block hover:text-blue-400"
          to="/teachers"
        >
          Teachers
        </Link>


        <Link 
          className="block hover:text-blue-400"
          to="/homework"
        >
          Homework
        </Link>


      </nav>


    </div>

  );

}

export default Sidebar;