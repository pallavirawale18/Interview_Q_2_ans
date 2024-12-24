import React ,{useEffect,useState} from 'react';
import './App.css';
import { EmployeeData } from './EmployeeData';

function App() {

  const [data, setData] = useState([]);
  
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [Age, setAge] = useState(0);
  const [Id, setId] = useState(0);
  const[isupdate,setIsUpdate]=useState(false);
  
  
  
  useEffect(() => {
  setData(EmployeeData)
  }, []);

 
    
  const handleDelete = (id) => {

    if (id > 0) {
    
    if (window.confirm("Are you sure to delete this item?")) {
    
    const dt =data.filter(item => item.id !== id);
    
    setData(dt);
    }}}


    const handleSave=(e) =>{
      let error='';
      if(Firstname ==='')
        error += 'first name is required';

      if(Lastname ==='')
        error += 'Last name is required';
      if(Age <= 0)
        error += 'Age is  required';
      if(error === ''){      
      e.preventDefault();
      const dt=[...data]
      const newObject={
        id: EmployeeData.length+1,
    firstName: Firstname,
    lastName: Lastname,
    age: Age
      }
      dt.push(newObject);
      setData(dt);}
      else {
        alert(error)
      }
    }


    const handleUpdate=() =>{
      const index=data.map((item)=>{
        return item.id
      }).indexOf(Id);

      const dt=[...data];
      dt[index].firstName=Firstname;
      dt[index].LastName=Lastname;
      dt[index].Age=Age;
      setData(dt);
      handleClear();
    }


    const handleClear=() =>{
      {
        setId(0);
        setFirstName ('');
        setLastName('');
        setAge('');
        setIsUpdate(false);
        }
      
    }
  
  return (
    
    <div className='App'>
      <div style={{display:'flex',justifyContent:'center',marginTop:"10px",marginBottom:"10px"}}>

        <div >
          <label>First Name:
          <input type='text' placeholder='Enter First Name' onChange={(e)=> setFirstName(e.target.value)} value={Firstname}/>
          </label>
        </div>

        <div>
          <label>Last Name:
          <input type='text' placeholder='Enter Last Name'onChange={(e)=> setLastName(e.target.value)} value={Lastname}/>
          </label>
        </div>

        <div>
          <label>Age:
          <input type='text' placeholder='Enter Age'onChange={(e)=> setAge(e.target.value)} value={Age}/>
          </label>
        </div><br/>

        <div>
          {
            !isupdate ? <button className='btn btn-primary' onClick={(e)=> handleSave(e)}>Add</button>
            :
            <button className='btn btn-primary' onClick={()=> handleUpdate()}>Update</button>
          }
        
  <button className='btn btn-danger'onClick={()=> handleClear()}>Clear</button>
        </div>
      </div>
      
<table className='table table.hovar'>
  <thead>
    <tr>
      <td>Sr.no</td>
      <td>Id
      </td>
      <td>First Name</td>
      <td>Last Name</td>
      <td>age</td>
      <td>actions</td>
    </tr>
  </thead>
  

<tbody>
{
data.map((item, index) => {
return(
<tr key={index}>

<td>{index+ 1}</td>

<td>{item.id}</td>

<td>{item.firstName}</td>

<td>{item.lastName}</td>

<td>{item.age}</td>
<td>
 
  
  <button className='btn btn-danger'onClick={()=> handleDelete(item.id)}>Delete</button>
</td>
</tr>
)
})

}


</tbody>
</table>
    </div>
  );
}

export default App;
