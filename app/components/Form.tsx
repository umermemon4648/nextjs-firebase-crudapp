import React from 'react'
import Link from 'next/link'
// "use-client"
const Form = () => {
  return (
    <>

<div className="container">
      <div className="text-center mb-4">
<Link href="/table" className="btn btn-dark mb-3">Display user</Link>
         
         <h3>Add New User</h3>
         <p className="text-muted">Complete the form below to add a new user</p>
      </div>
      <div className="container d-flex justify-content-center">
         <form method="post" style={{width:'50vw', minWidth:'300px'}} >
            <div className="row mb-3">
               <div className="col">
                  <label className="form-label">First Name:</label>
                  <input type="text" className="form-control" name="first_name" placeholder="Muhammad"/>
               </div>

               <div className="col">
                  <label className="form-label">Last Name:</label>
                  <input type="text" className="form-control" name="last_name" placeholder="Umer"/>
               </div>
            </div>

            <div className="mb-3">
               <label className="form-label">Email:</label>
               <input type="email" className="form-control" name="email" placeholder="name@example.com"/>
            </div>

            <div className="form-group mb-3">
               <label>Gender:</label>
               &nbsp;
               <input type="radio" className="form-check-input" name="gender" id="male" value="male"/>
               <label htmlFor="male" className="form-input-label">Male</label>
               &nbsp;
               <input type="radio" className="form-check-input" name="gender" id="female" value="female"/>
               <label htmlFor="female" className="form-input-label">Female</label>
            </div>

            <div>
               <button type="submit" className="btn btn-success btn-md" name="submit">Save</button> 
            </div>
         </form>
      </div>
   </div>


    </>

  )
}

export default Form