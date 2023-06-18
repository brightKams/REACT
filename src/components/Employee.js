import EditEmployee from "./EditEmployee.js"; 

function Employee(props){
    return      ( 


        <div class="py-8 m-10 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 border" src={props.image} alt="User's avatar" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg  font-semibold border h-10  max-w  my-2 px-2 text-left rounded-full hover:bg-blue-500  hover:text-white flex justify-center items-center">
       Name: {props.name}
      </p>
      <p class="text-slate-500 font-medium h-10 w-48 border items-center  px-3 text-left rounded-full hover:bg-blue-500  hover:text-white flex justify-center ">
       <strong>Role:</strong> {props.role}
      </p>
    </div>

    <EditEmployee />
    {/* <button class="px-4 py-1.5 text-xl text-purple-600 font-semibold rounded-full border  border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-center w-48">{props.message}
    </button> */}
  </div>
</div>
    // <> 
    //     <h3>Employee {props.name}</h3>
    //     <h2> Hello, {props.name} how are You!</h2>
    //     {/* <p>{props.role ? props.role : "No role"}</p> */}
    //     {/* OR */} 
    //     {props.role ? <p class="role">{props.role}</p> : <p class="norole">No role</p>}
    // </>
    );
    
}




export default Employee;
