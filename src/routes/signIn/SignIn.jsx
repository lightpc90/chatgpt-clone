import "./signIn.css";
import { SignIn } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div className="signIn">
      <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl={`/dashboard`}/>
    </div>
  );
};

export default Signin;
