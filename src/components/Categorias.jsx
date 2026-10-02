export default function Categorias({ selecionarCategoria }) {
  return (
    <section
      id="categorias"
      className="mx-auto max-w-7xl px-5 py-20"
    >

      <p className="font-bold uppercase tracking-[3px] text-yellow-500">
        Explore
      </p>

      <h2 className="mt-2 text-4xl font-black">
        Categorias
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <button
          onClick={() => selecionarCategoria("Tênis")}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-left hover:border-yellow-500"
        >
          <span className="text-5xl">👟</span>

          <h3 className="mt-8 text-3xl font-black">
            Tênis
          </h3>

          <p className="mt-2 text-zinc-500">
            Modelos para seu dia a dia.
          </p>

          <span className="mt-5 block font-bold text-yellow-500">
            VER TÊNIS →
          </span>
        </button>


        <button
          onClick={() => selecionarCategoria("Camisas")}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-left hover:border-yellow-500"
        >
          <span className="text-5xl">⚽</span>

          <h3 className="mt-8 text-3xl font-black">
            Camisas de Time
          </h3>

          <p className="mt-2 text-zinc-500">
            Camisas para representar seu time.
          </p>

          <span className="mt-5 block font-bold text-yellow-500">
            VER CAMISAS →
          </span>
        </button>

      </div>

    </section>
  );
}