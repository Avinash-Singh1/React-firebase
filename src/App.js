
import { useState, useEffect } from 'react';
import './App.css';
import {db} from './firebase-config'
import {collection, getDocs, addDoc,updateDoc,doc, Firestore} from 'firebase/firestore';
import { async } from '@firebase/util';
import { Container, Row, Col } from 'react-grid';

function App() {
  const [newName,setNewName]=useState("")
  const [newAge,setNewAge]=useState(0)
  // this is the array we used to fetch the data from the database of the firebase 
  const [users,setUsers]= useState([]);
  const userscollectionRef =collection(db,"users")

  // code to add user in the Firestore
  const createUsers=async()=>{
    await addDoc(userscollectionRef ,{name:newName,age:Number(newAge)
    } )
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };



  // code to get data from  database 
  useEffect(()=>{
   const getUsers =  async()=>{
      const data = await getDocs(userscollectionRef);  //getDocs gets the data from database of firebase some other like mongo 
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
   }
   getUsers();
  });
  // ends here 

  return (
    <div className="App">

         {/* form  */}
      <input type="text" name="" id="" placeholder='Name...' 
          onChange={(event)=>{
          setNewName(event.target.value);
          }} />
     
      <input type="number" name="" id="" placeholder='Age...' 
          onChange={(event)=>{
          setNewAge(event.target.value);
          }} />
      <button onClick={createUsers}>Create User</button>
           {/* form  ends here */}


          {/* Display details  */}
          <div className="result">

         
          <Container>
      <Row>
      {users.map((users)=>{
      return (
        <div>
          {" "}
          <h1>Name: {users.name}</h1>
          <h1>Age: {users.age}</h1>
          <button
              onClick={() => {
                updateUser(users.id, users.age);
              }}
            >Icrease Age</button>
        </div>


      )
          {/* Display details ends here  */}

     })}
      </Row>
    </Container>



        
       
        
          </div>
  
    </div>
  );
}

export default App;
