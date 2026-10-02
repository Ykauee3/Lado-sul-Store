export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo/logoloja.jpeg"
            alt="Lado Sul Store"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="font-black">
            LADO <span className="text-yellow-500">SUL</span>
            <small className="block text-xs text-zinc-500">
              STORE
            </small>
          </div>
        </a>

        <nav className="hidden gap-7 md:flex">
          <a href="#inicio" className="hover:text-yellow-500">
            Início
          </a>

          <a href="#produtos" className="hover:text-yellow-500">
            Produtos
          </a>

          <a href="#categorias" className="hover:text-yellow-500">
            Categorias
          </a>

          <a href="#contato" className="hover:text-yellow-500">
            Contato
          </a>
        </nav>

      </div>
    </header>
  );
}