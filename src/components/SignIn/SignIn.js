import React from "react";
import "./SignIn.css";
export default function SignIn() {
  return (
    <div className="form-control">
      <div>
        {/* Start Toggle Button */}
        <div className="py-5">
            <input type="checkbox" id="switch" />
            <div className="btn-toggle">
              <label className="toggle-label" for="switch">
                <div className="toggle"></div>
                <div className="names">
                  <p className="fan">Fan Signup</p>
                  <p className="talent">Talent Signup</p>
                </div>
              </label>
            </div>
        
        </div>
        {/* End Toggle Button */}
        <h3>Create Your Fun Accounte</h3>
        {/* from */}
        <form>
          <label>Frist Name</label>
          <input type="text" placeholder="firstName" />
          <label>Last Name</label>
          <input type="text" placeholder="lastname" />
          <label>UserName</label>
          <input type="text" placeholder="username" />
          <label>Eamil</label>
          <input type="email" placeholder="email" />
          <label>password</label>
          <input type="password" placeholder="password" />
        </form>
        <div className="submit">
          <div>
            <div className="checkBox">
              <input type="checkBox" />

              <bold>
                <span className="agree">I agree to the</span>
                <span className="conditions">Terms and conditions</span>
              </bold>
              <div className="btn">
                <button type="submit">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}