import React from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log(data);
  };
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
              <p className="fan" ><a href="/signin">Fan Signup</a></p>
              <p className="talent"><a href="/signup">Talent Signup</a> </p>
            </div>
          </label>
        </div>
      </div>
      {/* End Toggle Button */}
      <h3>TELENT</h3>
      {/* from */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>UserName</label>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        <label>Eamil</label>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
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
      </form>
    </div>
  </div>
  );
}
