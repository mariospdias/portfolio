import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import GeometricAnimation from "@/components/GeometricAnimation";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>Mário Dias | Sobre mim</title>
        <meta
          name="description"
          content="Mário Dias | Engenheiro de Software Sênior, especialista em SDD e liderança técnica"
        />
      </Head>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 lg:!pt-32">
          <AnimatedText
            text="Profundidade técnica e visão de negócio."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografia
              </h2>
              <p className="font-medium">
                Sou Engenheiro de Software Sênior no Grupo Casas Bahia,
                atuando full stack (PHP, Node.js, React/Next.js, TypeScript)
                em um dos sistemas mais críticos da operação: o ERP de
                Fulfillment/Logística. Organizo as demandas do time, avalio
                viabilidade técnica, conduzo refinamento com as áreas de
                negócio e acompanho as entregas de ponta a ponta.
              </p>
              <p className="my-4 font-medium">
                Levo fluxos de desenvolvimento orientados a agentes de IA
                (SDD — Spec-Driven Development) para o time — o que reduziu em
                ~60% o tempo de ciclo de desenvolvimento e aumentou a
                estabilidade da aplicação. Também implantei observabilidade:
                varredura de vulnerabilidades (CVE) com Trivy na esteira de
                CI/CD, dashboards de segurança e monitoramento de usabilidade
                com Microsoft Clarity.
              </p>
              <p className="font-medium">
                Domino Java, Docker, Kubernetes, AWS, bancos relacionais e não
                relacionais, e pratico TDD. Minha formação em Design, Game and
                Interactive Media Design (Anhembi Morumbi) me dá um olhar
                diferenciado sobre produto e experiência do usuário. Busco
                minha próxima posição como Tech Lead, unindo profundidade
                técnica, uso estratégico de IA no desenvolvimento e visão de
                negócio.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light " />
              <GeometricAnimation />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  ~<AnimatedNumbers value={60} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Redução no ciclo de dev com SDD
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projetos entregues
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Anos de experiência
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
