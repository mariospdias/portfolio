import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>MD | Portfólio</title>
        <meta name="description" content="Mário Dias | Portfólio" />{" "}
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <div className="rounded-full overflow-hidden bg-slate-600 mx-16">
                <Image
                  src={profilePic}
                  alt="MarioDias"
                  className="w-full h-auto lg:hidden md:inline-block md:w-full"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Tornando visão em realidade com código e design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl md:mt-4"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Olá, Sou um Desenvolvedor Full Stack com habilidades em Design
                UX. Bem-vindo ao meu portfólio! Aqui, você encontrará uma
                experiência envolvente e visualmente atraente para explorar meu
                trabalho e habilidades. Sinta-se à vontade para explorar meus
                projetos. Estou ansioso para receber seu feedback e discutir
                oportunidades de colaboração. Obrigado por visitar!
                <br /> <br /> Mário Dias
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/cv.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                  hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
                  dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Currículo
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:mspdias1@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBuld} alt="Mário Dias" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
