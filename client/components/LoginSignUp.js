import React from "react";

const LoginSignUp = () => {
  return (
    <div>
      <form>
        <label>Username/Email</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="text" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginSignUp;
