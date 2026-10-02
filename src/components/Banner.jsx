export default function Banner() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-black"
    >

      <img
        src="/images/banner/banner-principal.jpg"
        alt="Lado Sul Store"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">

        <div className="max-w-xl">

          <p className="font-bold uppercase tracking-[4px] text-yellow-500">
            Lado Sul Store
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none sm:text-7xl">
            SEU ESTILO.
            <br />

            <span className="text-yellow-500">
              SEU TIME.
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            Tênis e camisas de time para completar seu estilo.
          </p>

          <a
            href="#produtos"
            className="mt-8 inline-block rounded-xl bg-yellow-500 px-8 py-4 font-black text-black hover:bg-yellow-400"
          >
            VER CATÁLOGO
          </a>

        </div>

      </div>

    </section>
  );
}