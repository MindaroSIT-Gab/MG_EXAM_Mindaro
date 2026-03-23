import React from "react";
function Contacts() {
    return (
        <main className="p-4 bg-white shadow rounded border test-start">
            <h2 className="text-2x1 font-bold mb-8 ">Contact Us</h2>
            <p>Contact page for the student portal provide your Student ID and the problem your facing and the tech support will help you solve it as soon as the form is submitted.</p>

            <hr/>
            <form>
               <div className="mb-3">
                   <label className="form-label fw-bold big">Student ID Number</label>
                   <input type="text" className="form-control" placeholder="Enter your student ID number"/>
               </div>
            </form>
            <br/>
            <form>
               <div className="mb-4">
                   <label className="form-label fw-bold big">Problem or Issue</label>
                   <input type="text" className="form-control" placeholder="Please Enter your Dilemma"/>
               </div>
            </form>
        </main>

    )
}
export default Contacts;  
