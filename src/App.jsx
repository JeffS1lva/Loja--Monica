import React from 'react'
import Icon from "./assets/Icon_perfil.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function App() {
  const phoneNumber = "5511914675286"; // Substitua pelo número de telefone com código do país
  const message = "Olá, gostaria de saber mais informações."; // Mensagem opcional

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="relative w-full h-screen bg-gradient-to-br from-blue-800 via-pink-500 to-pink-700 py-4">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <div className="relative z-20 p-5 text-white">
          <section className="flex flex-col items-center justify-center text-center h-full ">
            <img className="h-32 w-32" src={Icon} alt="Ícone de perfil" />
            <p className="mt-4 font-bold">@monica</p>
            <div className="flex flex-col gap-4 my-10">
              <div>
                <button onClick={handleClick} className="p-4 px-20 w-full bg-slate-700 rounded-md bg-opacity-20 border border-zinc-500 font-bold hover:bg-opacity-5 hover:border-white">
                  <a href="">Agende seu horário aqui!</a>
                </button>
              </div>
              <div>
                <button className="p-4 px-20 w-full bg-slate-700 rounded-md bg-opacity-20 border border-zinc-500 font-bold hover:bg-opacity-5 hover:border-white">
                  <a href="">Sobrancelhas & Depilação</a>
                </button>
              </div>
              <div>
                <button className="p-4 px-20 w-full bg-slate-700 rounded-md bg-opacity-20 border border-zinc-500 font-bold hover:bg-opacity-5 hover:border-white">
                  <a href="">Endereço</a>
                </button>
              </div>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <a
                href="https://www.instagram.com/monica.enzo.54/"
                target="_blank"
              >
                <FaInstagram
                  size={40}
                  className="hover:bg-zinc-700 p-1 rounded-md"
                />
              </a>
              <a onClick={handleClick}>
                <FaWhatsapp
                  size={40}
                  className="hover:bg-zinc-700 p-1 rounded-md"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
