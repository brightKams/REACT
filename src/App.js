import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import EditEmployee from "./components/EditEmployee.js";

function App() {
  let newRole = "No Role yet";
  let newMessage = "Update";
  const [role, setRole] = useState(newRole);
  const [employees, setEmployees] = useState(
    [
      {
        // id:uuidv4(),
        id:1,
        name: "Bright", 
        role:"intern", 
        image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
        message:"Update"
    },
      {
        // id:uuidv4(),
        id:2,
        name: "Ohakam", 
        role:"Front-End", 
        image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=400",
        message:"Update"
    },
    
      {
        // id:uuidv4(),
        id:3,
        name: "Chidozie", 
        role:"Developer", 
        image: "https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg",
        message:"Update"
    },
      {
        // id:uuidv4(),
        id:4,
        name: "Bright", 
        role:"Designer", 
        image: "https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg",
        message:"Update"
    },
      {
        // id:uuidv4(),
        id:5,
        name: "Bright", 
        role:"Designer", 
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        message:"Update"
    },
      {
        // id:uuidv4(),
        id:6,
        name: "Bright", 
        role:"Designer", 
        image: "https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg",
        message:"Update"
    },


    ]);
  const [message, setMessage] = useState(newMessage);

  // let role = "dev"
  function updateEmployee(id, newName, newRole) {
    // console.log("updateEmployees inside of app.js");
    const updateEmployees = employees.map((employee)=> {
      if (id == employee.id){
        return {...employee, name:newName, role: newRole };

      }
      return employee
    });
    setEmployees(updateEmployees);
  }
  const showEmployees = true;
  return (
    <div className="App bg-red-400 py-0.5">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
            className="text-center block my-3  min-w-[15px] px-2 py-3 mx-auto"
          />
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setMessage(e.target.value);
            }}
            className="text-center block my-3 min-w-[150px] px-2 py-3 mx-auto"
          />
          {/* <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setEmployees(e.target.value);
            }}
            className="text-center block my-3 w-96 px-5 py-3 mx-10"
          /> */}
          <div className="flex flex-wrap justify-center ">
            {employees.map((employee)=> {
              // console.log(employee);
              // console.log(uuidv4());
              return (
                  <Employee 
                    // key={uuidv4()}
                    key={employee.id}
                    id = {employee.id}
                    name={employee.name}
                    role={employee.role}
                    image={employee.image}
                    updateEmployee={updateEmployee}
                    message={message}
                    
               />);
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees.</p>
      )}
    </div>
  );
}

export default App;
