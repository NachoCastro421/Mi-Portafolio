// src/sections/Hero.jsx
"use client";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const scrollToProjects = useCallback(() => {
    const el = document.getElementById("proyectos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-[70vh] md:min-h-[80vh] bg-black text-white px-6 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IZQUIERDA: Proyectos destacados */}
        <div>
          <button onClick={scrollToProjects} className="text-3xl font-bold mb-6 cursor-pointer inline-flex items-center gap-2">
            Proyectos <span className="inline-block">▼</span>
          </button>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-gray-300/80 text-black text-center p-10 font-medium hover:scale-105 transition rounded"
              >
                Proy {n}
              </div>
            ))}
          </div>
        </div>

        {/* DERECHA: Presentación + foto */}
        <div className="text-center">
          <p className="text-sm text-red-500 mb-2">Hola, soy Juan Ignacio Castro</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Soy desarrollador web</h1>
          <p className="text-base text-gray-300 max-w-md mx-auto mb-6">
            Soy un estudiante de ingeniería en sistemas. Buscando nuevas oportunidades para colaborar en proyectos desafiantes.
          </p>

          <div className="w-44 h-44 bg-gray-500/60 mx-auto flex items-center justify-center font-bold italic text-white rounded">
            Foto mía
          </div>
        </div>
      </div>
    </section>
  );
}