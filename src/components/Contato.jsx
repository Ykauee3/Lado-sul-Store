export default function Contato() {
  const whatsapp = "5512992071756";

  return (
    <section id="contato" className="bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-3xl font-bold mb-3">
          Entre em contato
        </h2>

        <p className="mb-8 text-zinc-400">
          Fale com a Lado Sul Store pelas nossas redes.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-500"
          >
            WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ladosulstore_/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-bold transition hover:opacity-90"
          >
            Instagram
          </a>

        </div>
      </div>
    </section>
  );
}