import Header from "../../components/Header/Header";
import ProjectZigzag from "../../components/Projects/ProjectZigzag";
import Zigzag from "../../components/zigzag/Zigzag";
import Skills from "../../components/skills/Skills";
import ContactMe from "../../components/contact/ContactMe";

export default function Home() {
  return (
    <>
      <Header />
      <Zigzag />
      <ProjectZigzag />
      <Skills />
      <ContactMe />
    </>
  );
}
