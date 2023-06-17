import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  let newRole = " No Role yet";
  let newMessage = "message";
  const [role, setRole] = useState(newRole);
  const [employees, setEmployees] = useState(
    [
      {name: "Bright"}
    ]
  );
  const [message, setMessage] = useState(newMessage);

  // let role = "dev"
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
            className="text-center block my-3 w-96 px-5 py-3 mx-10"
          />
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setMessage(e.target.value);
            }}
            className="text-center block my-3 w-96 px-5 py-3 mx-10"
          />
          <div className="flex flex-wrap justify-center space-2">
            <Employee
              name="Bright"
              role="Intern"
              message={message}
              image="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
            />
            <Employee
              name="Ohakam"
              role={role}
              message={message}
              image="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
            />
            <Employee
              name="Chidozie"
              role="Cyber Security"
              message={message}
              image="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
            />
            <Employee
              name="Bright"
              role={role}
              message={message}
              image="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
            />
            <Employee
              name="No Name yet"
              role={role}
              message={message}
              image="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
            />
          </div>
        </>
      ) : (
        <p>You cannot see the employees.</p>
      )}
    </div>
  );
}

export default App;
