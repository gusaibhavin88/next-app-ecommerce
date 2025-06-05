import React from "react";
import AuthWrapperOne from "../shared/auth-wrapper-one";
import SignInForm from "./sign-in-form";
import PublicRoute from "../component/publicRoute";

const SignIn = () => {
  return (
    <div>
      <PublicRoute>
        <AuthWrapperOne
          title="Sign In"
          description="signUp User"
          pageImage=""
          bannerDescription="test"
        >
          <SignInForm />
        </AuthWrapperOne>
      </PublicRoute>
    </div>
  );
};

export default SignIn;
