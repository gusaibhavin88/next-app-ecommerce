"use client";

import React from "react";
import AuthWrapperOne from "../shared/auth-wrapper-one";
import SignUpForm from "./sign-up-form";

const SignUp = () => {
  console.log("dwf");
  return (
    <div>
      <AuthWrapperOne
        title="Sign Up"
        description="sign Up User"
        pageImage=""
        bannerDescription="test"
      >
        <SignUpForm />
      </AuthWrapperOne>
    </div>
  );
};

export default SignUp;
