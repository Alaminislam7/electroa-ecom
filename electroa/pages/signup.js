import Head from "next/head";
import React from "react";
import SignUp from "../components/auth/SignUp";

const signup = () => {
  return (
    <>
      <Head>
        <title>SIGNIN | NEXT REALWORLD</title>
        <meta name="awesome product" content="We are product of our site" />
      </Head>
      <div className="container p-100">
        <div className="row">
          <div className="col-md-5">
            <SignUp />
          </div>
        </div>
        <div className="col-md-5 offset-2">
          <h2>TARATARI SIGN UP KORO</h2>
        </div>
      </div>
    </>
  );
};

export default signup;
