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
            position="Engenheiro de Software III"
            company="Grupo Casas Bahia"
            companyLink="https://www.grupocasasbahia.com.br/"
            time="Março de 2023 - Atualmente (3 anos e 6 meses)"
            address="São Paulo, SP"
            work="Organizo as demandas do time no desenvolvimento do ERP de Fulfillment/Logística, avaliando viabilidade
            técnica e conduzindo refinamento com as áreas de negócio. Atuo full stack (PHP, Node.js, React/Next.js) e
            sou responsável por CI/CD e testes automatizados direto na esteira. Implementei fluxos de desenvolvimento
            com agentes de IA (SDD), reduzindo em ~60% o tempo de ciclo de desenvolvimento (ideia → deploy) e elevando
            a estabilidade/disponibilidade da aplicação. Simplifiquei o fluxo de agendamento de abastecimento para
            clientes, entregando valor direto ao negócio. Implantei observabilidade end-to-end: scan de CVEs com
            Trivy na esteira de CI, dashboards de segurança e monitoramento de UX com Microsoft Clarity. Administração
            de banco de dados; infraestrutura em AWS e Kubernetes."
          />
          <Details
            position="Desenvolvedor de Front-end"
            company="BEYOUNG"
            companyLink="https://beyoung.com.br/"
            time="Outubro de 2019 - Março de 2022 (2 anos e 6 meses)"
            address="São Paulo, SP"
            work="Responsável pelo layout e desenvolvimento de landing pages de campanhas em ReactJS. Defini regras e
            desenvolvi peças de e-mail marketing. Desenvolvimento e manutenção de blog em WordPress. Stack do dia a
            dia: ReactJS, AngularJS, JavaScript, PHP, CSS e HTML."
          />
          <Details
            position="Desenvolvedor Full Stack"
            company="Proprietário Direto"
            companyLink="https://www.proprietariodireto.com.br/"
            time="Janeiro de 2019 - Outubro de 2019 (10 meses)"
            address="São Paulo, SP"
            work="Atuei de ponta a ponta no produto — front-end (Angular, JavaScript Vanilla), back-end (PHP,
            Laravel/Lumen), sustentação de código legado e DevOps. Desenvolvi API REST e o back-end de pagamentos
            online; criei e administrei o banco de dados. Contribuí com iniciativas de inovação e cuidei da UX da
            plataforma."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
