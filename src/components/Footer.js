import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <div> </div>
		<div className="flex items-center lg:py-2">
          Built <span className="text-primary dark:text-primaryDark text-2xl px-1"></span>
          by&nbsp;
          <Link
            href="https://github.com/gk1705"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            Gabriel Koidl
          </Link>
        </div>
		<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
