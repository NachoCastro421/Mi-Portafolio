import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-white/10 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-extrabold tracking-wide">PORTOFOLIO</h1>
        <ul className="flex items-center gap-6 text-sm">
          <li><a href="#cv" className="hover:text-white/80">Resume</a></li>
          <li><a href="#sobre-mi" className="hover:text-white/80">About Me</a></li>
          <li><a href="#contacto" className="hover:text-white/80">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}