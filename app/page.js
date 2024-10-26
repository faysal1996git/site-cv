import Hero from "@/components/Hero";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const ClientsHome = dynamic(() => import("@/components/ClientsHome"), {
  ssr: false,
});
const Outils = dynamic(() => import("@/components/Outils"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});

import Apropos from "@/components/Apropos";
import Resume from "@/components/Experience";

const Page = () => {
  return (
    <Layout onepage={true}>
      <Hero mouse={true} />
      <Apropos />
      <Resume />
      <ClientsHome />      
      <Competences />
      <Outils />
      <Blog />
    </Layout>
  );
};
export default Page;
