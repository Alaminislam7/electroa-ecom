import Head from "next/head";
import React from "react";
import SignIn from "../components/auth/SignIn";

const signin = () => {
  return (
    <>
      <Head>
        <title>SIGNUP | NEXT REALWORLD</title>
        <meta name="awesome product" content="We are product of our site" />
      </Head>
      <div className="container p-100">
        <div className="row">
          <div className="col-md-5">
            <SignIn/>
          </div>
          <div className="col-md-5 offset-2">
            <h2>TARATARI SIGN UP KORO</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default signin;
