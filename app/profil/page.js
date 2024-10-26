import Apropos from "@/components/Apropos";
import PageBanner from "@/components/PageBanner";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";
import Resume from "@/components/Experience";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});

const Profil = () => {
  return (
    <Layout>
      <PageBanner pageLink={"profil"} pageName={"Profil"} />
      <Apropos />
      <Resume />
      <Competences />
      <Clients />
    </Layout>
  );
};
export default Profil;
