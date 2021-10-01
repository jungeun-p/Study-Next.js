import React from "react";
import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Head>
        <title>My Blog</title>
        <meta keyword="my blog powerd by next.js" />
        <meta contents="my blog powerd by next.js" />
      </Head> */}
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
