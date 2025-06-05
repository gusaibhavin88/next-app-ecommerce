import React from "react";
import AuthWrapperOne from "../shared/auth-wrapper-one";
import SignInForm from "./sign-in-form";

const SignIn = () => {
  return (
    <div>
      <AuthWrapperOne
        title="Sign In"
        description="signUp User"
        pageImage=""
        bannerDescription="test"
      >
        <SignInForm />
      </AuthWrapperOne>
    </div>
  );
};

export default SignIn;
