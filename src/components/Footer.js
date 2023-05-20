import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; Todos os direitos reservados.
        </span>
        <div>
          <div className="flex items-center">
            Feito com{" "}
            <span className="text-primary dark:text-primaryDark text-2xl px-1 ">
              &#9825;
            </span>
            por&nbsp;
            <Link
              href="/"
              className="underline underline-offset-2"
              target={"_blank"}
            >
              Mário Dias
            </Link>
          </div>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Diga olá!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
