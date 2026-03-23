import React from "react";
function Contacts() {
    return (
        <main className="p-4 bg-white shadow rounded border test-start">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>Contact page for the student portal provide your student ID and the Problem your facing and the tech support will help you solve it as soon as the form is submitted.</p>

            <hr/>
            <form>
               <div className="mb-3">
                   <label className="form-label fw-bold small">Student ID Number</label>
                   <input type="text" className="form-control" placeholder="Enter your student ID number"/>
               </div>
            </form>
            <br/>
            <form>
               <div className="mb-4">
                   <label className="form-label fw-bold small">Problem or Issue</label>
                   <input type="text" className="form-control" placeholder="Please Enter your Dilemma"/>
               </div>
            </form>
        </main>

    )
}
export default Contacts;  
