import ProductCard from "./ProductCard";

export default function Produtos({
  produtos,
  categoria,
  setCategoria,
  comprar,
}) {

  return (
    <section
      id="produtos"
      className="mx-auto max-w-7xl px-5 py-20"
    >

      <p className="font-bold uppercase tracking-[3px] text-yellow-500">
        Catálogo
      </p>

      <h2 className="mt-2 text-4xl font-black">
        Produtos
      </h2>


      <div className="mt-8 flex flex-wrap gap-2">

        {["Todos", "Tênis", "Camisas"].map((item) => (

          <button
            key={item}
            onClick={() => setCategoria(item)}
            className={`rounded-full px-5 py-2 font-bold ${
              categoria === item
                ? "bg-yellow-500 text-black"
                : "border border-zinc-700 bg-zinc-900"
            }`}
          >
            {item}
          </button>

        ))}

      </div>


      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {produtos.map((produto) => (

          <ProductCard
            key={produto.id}
            produto={produto}
            comprar={comprar}
          />

        ))}

      </div>

    </section>
  );
}