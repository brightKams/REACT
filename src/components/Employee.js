function Employee(props){
    return  ( 
    <> 
        <h3>Employee {props.name}</h3>
        <h2> Hello, {props.name} how are You!</h2>
        {/* <p>{props.role ? props.role : "No role"}</p> */}
        {/* OR */} 
        {props.role ? <p class="role">{props.role}</p> : <p class="norole">No role</p>}
    </>
    );
    
}




export default Employee;
