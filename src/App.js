import './App.css';
import Employee from './components/Employee';
import {useState} from "react";


function App() {
  let newRole = "NO ROLE"
  const[role, setRole] = useState(newRole);

  // let role = "dev"
  const showEmployees = true;
  return (
    <div className="App">
     {showEmployees ? 
      <> 
      <input type="text" onChange={(e)=> {
        console.log(e.target.value);
        setRole(e.target.value);
      }} 
      />
      <Employee name="Bright" role="Intern" />
      <Employee name="Ohakam" role={role}/>
      <Employee name="Chidozie" role="Cyber Security"/>
      {/* <Employee />
      <Employee /> */}
      
      </>
      :
      
      (<p>You cannot see the employees.</p>)
      
    }
      
    </div>
  );
}

export default App;
