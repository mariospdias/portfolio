import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/hero-section-apple.png";
import project2 from "../../public/images/projects/home-section-dashboard.png";
import project3Dark from "../../public/images/projects/home-section-portfolio-dark.png";
import project3Light from "../../public/images/projects/home-section-portfolio-light.png";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target={"_blank"}
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark  font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative shadow-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-2xl" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target={"_blank"}
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline text-dark dark:text-light"
          >
            Visite
          </Link>
          <Link href={github} target={"_blank"} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mode] = useThemeSwitcher();
  return (
    <>
      <Head>
        <title>Mário Dias | Projetos</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="A imaginação supera o conhecimento!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Landing Page de Produto Apple"
                summary="Uma landing page de produto rica em recursos usando React, Tailwind CSS, Context API, Styled Components, React Three e GSAP.
                Ela implementa um modelo 3D com animações via scroll incluindo a troca de cor do 3D."
                link="https://apple-iphone-example.netlify.app/"
                github="https://github.com/mariospdias/Apple-iphone-3d-landing-page"
                type="Projeto em destaque"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Dashboard Template"
                link="https://syncfusion-dash-demo.netlify.app/"
                github="https://github.com/mariospdias/syncfusion_dashboard"
                type="Projeto em destaque"
                img={project2}
              />
            </div>
            <div className="col-span-6">
              {mode === "dark" ? (
                <Project
                  title="Portfólio"
                  link="https://mariodias.dev.br/"
                  github="https://github.com/mariospdias/portfolio"
                  type="Projeto em destaque"
                  img={project3Light}
                />
              ) : (
                <Project
                  title="Portfólio"
                  link="https://mariodias.dev.br/"
                  github="https://github.com/mariospdias/portfolio"
                  type="Projeto em destaque"
                  img={project3Dark}
                />
              )}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
