import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <>
      <Link to="/" className="text-white text-decoration-none">
        Side Project's Blog(사플 블로그)
      </Link>
      {false ? (
        <h1 className="text-white">authLink</h1>
      ) : (
        <h1 className="text-white">guestLink</h1>
      )}
    </>
  );
};

export default AppNavbar;
