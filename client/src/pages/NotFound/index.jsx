import React from "react";
import { Helmet } from "react-helmet-async";
import './index.scss'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>NotFound</title>
      </Helmet>

      <section id="not-found">
        <div className="not-found-heading">
            <h1>404</h1>
        </div>
        <div className="not-found-content">
            <h2>Looks like you are lost in the woods</h2>
            <p>Don't worry we'll lead you back home</p>
            <Link to={'/'}>Take me home</Link>
        </div>
    </section>
    </>
  );
};

export default NotFound;
