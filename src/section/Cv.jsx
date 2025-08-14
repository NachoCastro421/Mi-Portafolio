export default function Cv() {
  return (
    <section className="py-16 px-6 bg-neutral-950/70">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Currículum (Resume)</h2>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded bg-white text-black hover:bg-white/90 transition"
          >
            Ver CV (PDF)
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-block px-4 py-2 rounded border border-white/30 hover:bg-white/10 transition"
          >
            Descargar CV
          </a>
        </div>

        <div className="w-full h-[720px] bg-black/40 border border-white/10 rounded overflow-hidden">
          {/* Vista previa embebida del PDF si existe en /public/cv.pdf */}
          <object data="/cv.pdf" type="application/pdf" width="100%" height="100%">
            <div className="p-6 text-sm text-gray-400">
              No se pudo mostrar la vista previa del PDF. Podés usar los botones de arriba para abrir o descargar el CV.
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
