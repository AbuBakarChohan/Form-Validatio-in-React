import React, { useState } from 'react';


 
const Contact = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const [userfirstNameErr, setUserfirstNameErr] = useState(false);
  const [userlastNameErr, setUserlastNameErr] = useState(false);
  const [userEmaileErr, setUserLastNameErr] = useState(false);
  const [userpasswordErr, setUserpasswordErr] = useState(false);
  const [userConfirmPasswordErr, setUserConfirmpasswordErr] = useState(false);


 
  


const signInHandler = (e) => {
  e.preventDefault();

 if(userFirstName === "") {
  setUserfirstNameErr(true)
 }
 if(userLastName === "") {
  setUserlastNameErr(true)
 }
 if(userEmail === "") {
  setUserLastNameErr(true)
 }
 if(userPassword === "") {
  setUserpasswordErr(true)
 }
 if(confirmPassword === "") {
  setUserConfirmpasswordErr(true)
 }

  console.log(userFirstName, userLastName, userEmail, userPassword, confirmPassword )
}



    return (
      <div>
       
       <div onSubmit={signInHandler}>

        <form className='d-flex justify-content-center'>
         <div className='d-flex rounded p-5 text-bg-dark flex-column'>
          
          <div className='mt-3'>
         <h5>First Name</h5>
         <input
         type='text'
         style={{
          border: userfirstNameErr && "2px solid red"
         }}
         id='floatingInput'
         placeholder='firstName'
         value={userFirstName}
         onChange={(e) =>{setUserFirstName(e.target.value); 
         }}
         /><br />
          {userfirstNameErr && (<span className='text-danger'>Inter user Name</span>)}
          
         </div>
      

         <div className='mt-3'>
        <h5>Last Name</h5>
         <input type='text'
          style={{
            border: userlastNameErr && "2px solid red"
           }} placeholder='UserLastName' id='floatingInput'  
         value={userLastName}
         onChange={(e) =>{setUserLastName(e.target.value); 
         }} /> <br />
          {userlastNameErr && (<span className='text-danger'>Inter user Name</span>)}
        </div>

        <div className='mt-3'>
        <h5>Email</h5>
        <input type='email' 
        style={{
          border:userEmaileErr && "2px solid red"
         }} 
          placeholder='UserEmail' 
          id='floatingInput'  
         value={userEmail}
         onChange={(e) =>{setUserEmail(e.target.value); 
         }} /> <br />
         {userEmaileErr && (<span className='text-danger'>Inter user Name</span>)}
          
        </div>
       

        <div className='mt-3'>
        <h5>Password</h5>
<input type='password' 
 style={{
  border:userpasswordErr && "2px solid red"
 }}  placeholder='UserPassword' id='floatingInput'  
         value={userPassword}
         onChange={(e) =>{setPassword(e.target.value); 
         }} />  <br />
          {userpasswordErr && (<span className='text-danger'>Inter user Name</span>)}
        </div>

        <div className='mt-3'>
        <h5>ConfirmPassword</h5>
<input type='password'
style={{
  border:userConfirmPasswordErr && "2px solid red"
 }}  placeholder='userPassword' id='floatingInput'  
         value={confirmPassword}
         onChange={(e) =>{setConfirmPassword(e.target.value); 
         }} /> <br />
        {userConfirmPasswordErr && (<span className='text-danger'>Inter user Name</span>)}

         </div>
           
           <div className='mt-3'>
         <input 
         type='submit'
         placeholder='submit'
          />
          </div>

</div>

        </form>
       </div>
      </div>

     
    )
  }

//   hello
export default Contact;
