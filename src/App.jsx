import { useState } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Beneficios from "./components/Beneficios";
import Categorias from "./components/Categorias";
import Produtos from "./components/Produtos";
import Contato from "./components/Contato";

import { produtos } from "./data/produtos";

export default function App() {

  const [categoria, setCategoria] = useState("Todos");

  const produtosFiltrados =
    categoria === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoria
        );


  function comprar(produto) {

    const numero = "5512992071756";

    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no produto ${produto.nome}.`
    );

    window.open(
      `https://wa.me/${numero}?text=${mensagem}`,
      "_blank"
    );
  }


  return (
    <div className="min-h-screen bg-black text-white">

      <Header />

      <Banner />

      <Beneficios />

      <Categorias
        selecionarCategoria={setCategoria}
      />

      <Produtos
        produtos={produtosFiltrados}
        categoria={categoria}
        setCategoria={setCategoria}
        comprar={comprar}
      />
      
      <Contato />

      <footer
        id="contato"
        className="border-t border-zinc-800 bg-zinc-950 px-5 py-10 text-center text-zinc-500"
      >
        © 2026{" "}
        <span className="text-yellow-500">
          Lado Sul Store
        </span>
      </footer>

    </div>
  );
}