import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="mt-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiência
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Desenvolvedor Full Stack"
            company="CNT Log e-Commerce Logistics"
            companyLink="https://ri.via.com.br/a-companhia/nossas-marcas/"
            time="2023-Atualmente"
            address="Barueri - SP"
            work="Trabalho em uma equipe responsável por desenvolver novos recursos para o setor logístico da Via Varejo,
            incluindo a melhoria das integrações fulfillment e
            desenvolvimento de novas ferramentas para análise e visualização de dados."
          />
          <Details
            position="Desenvolvedor Front End"
            company="BEYOUNG"
            companyLink="https://beyoung.com.br/"
            time="2019-2022"
            address="São Paulo, SP"
            work="Trabalhei no desenvolvimento de Landing Pages, elaboração e configuração de e-mail marketing,
            desenvolvimento e sustentação de blog e a elaboração de layouts com foco em User Experience(UX)."
          />
          <Details
            position="Desenvolvedor Full Stack"
            company="Proprietário Direto"
            companyLink="https://www.proprietariodireto.com.br/"
            time="01/2019-10/2019"
            address="São Paulo, SP"
            work="Trabalhei com o desenvolvimento da plataforma com integração com meios de pagamento, administração e desenvolvimento de banco de dados e integração."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
