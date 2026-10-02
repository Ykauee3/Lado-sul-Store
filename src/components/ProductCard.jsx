export default function ProductCard({ produto, comprar }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-yellow-600">

      <div className="aspect-square overflow-hidden bg-zinc-900">

        <img
          src={produto.imagem}
          alt={produto.nome}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

      </div>

      <div className="p-5">

        <span className="text-xs font-bold uppercase text-yellow-500">
          {produto.categoria}
        </span>

        <h3 className="mt-2 text-xl font-bold">
          {produto.nome}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          Consulte tamanhos disponíveis
        </p>

        <div className="mt-5 flex items-center justify-between">

          <strong className="text-xl">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </strong>

          <button
            onClick={() => comprar(produto)}
            className="rounded-lg bg-yellow-500 px-4 py-2 font-bold text-black hover:bg-yellow-400"
          >
            Comprar
          </button>

        </div>

      </div>

    </article>
  );
}