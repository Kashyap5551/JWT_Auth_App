import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5001/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

        const parseData = await res.json();
        
        setName(parseData.user_name);
        
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
      <div>
          <div className="container mx-auto flex px-10 py-52 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Welcome {name}
                  <br className="hidden lg:inline-block" />
                      You finally made it!
                  </h1>
                  <h2 className="title-font text-xl" >This Web app was made using the PERN stack.</h2>
                      <ul>
                          <li>It uses PostgresSQL for the database.</li>
                          <li>It uses Express.js to serve a RESTful API.</li>
                          <li>React is used for the front-end.</li>
                          <li>It is brought together by Node.js.</li>
                      </ul> 
                     <p> The main goal of this project was to learn JWT token protocol and B-crypt to hash passwords.
                      I had tons of fun creating this side project, as it taught me alot about web development and software design.

                  </p>
                  <br/>
                  <button onClick={e => logout(e)} className="group relative w-15 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Logout
      </button>
              </div>
        </div>
          
      
    </div>
  );
};

export default Dashboard;