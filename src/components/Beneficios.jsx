export default function Beneficios() {
  const beneficios = [
    ["🚚", "Envio nacional", "Enviamos para todo o Brasil"],
    ["⚡", "Atendimento rápido", "Fale diretamente com a loja"],
    ["🔒", "Compra segura", "Pedido confirmado com a loja"],
  ];

  return (
    <section className="border-y border-zinc-800 bg-zinc-950">

      <div className="mx-auto grid max-w-7xl md:grid-cols-3">

        {beneficios.map(([icone, titulo, texto]) => (
          <div
            key={titulo}
            className="p-8 text-center"
          >
            <div className="text-3xl">
              {icone}
            </div>

            <h3 className="mt-2 font-bold">
              {titulo}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              {texto}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}