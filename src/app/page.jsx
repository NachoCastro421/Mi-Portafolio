// src/app/page.jsx
import Hero from "../section/Hero";
import SobreMi from "../section/SobreMi";
import Proyectos from "../section/Proyectos";
import Contacto from "../section/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </>
  );
}