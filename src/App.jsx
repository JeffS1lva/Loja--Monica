import React, { useState } from "react";
import Icon from "./assets/Icon_perfil.png";
import Sobrancelhas from "./assets/Sobrancelhas.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Modal } from "./components/Modal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const endereco = "Av. Mazzei,+1148 - +Tucuruvi, +São Paulo - +SP, +02310-001";
  const phoneNumber = "5511958117836";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Função para enviar mensagem para WhatsApp com informações específicas
  const handleSendMessage = (productName, productPrice) => {
    const message = `Olá Monica, estou interessado(a) no estilo ${productName} que custa ${productPrice}. Gostaria de mais informações!`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  
  // Função para enviar mensagem para WhatsApp solicitando agendamento
  const handleSendMessages = () => {
    const messageAgendamento = `Olá Monica, estou interessado(a) em marcar meu horário . Gostaria de mais informações!`;
    const encodedMessages = encodeURIComponent(messageAgendamento);
    const urls = `https://wa.me/${phoneNumber}?text=${encodedMessages}`;
    window.open(urls, "_blank");
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-800 via-blue-500 to-pink-700">
      <div className="flex flex-col items-center justify-center w-full h-full md:h-auto md:w-1/2 lg:w-1/3 bg-opacity-70 p-5 text-white rounded-lg shadow-lg">
        <img
          className="h-24 w-24 md:h-32 md:w-32 mb-4"
          src={Icon}
          alt="Ícone de perfil"
        />
        <p className="text-lg md:text-xl font-bold">@monica</p>
        <div className="flex flex-col gap-4 mt-6 w-full">
          <button
            className="p-3 md:p-4 w-full bg-slate-700 rounded-md bg-opacity-20 border border-zinc-800 font-bold hover:bg-opacity-5 hover:border-white"
            onClick={() => handleSendMessages()}
          >
            Agende seu horário aqui!
          </button>
          <a
            onClick={toggleModal}
            className="p-3 text-center md:p-4 w-full bg-slate-700 rounded-md bg-opacity-20 border border-zinc-800 font-bold hover:bg-opacity-5 hover:border-white cursor-pointer"
          >
            Sobrancelhas & Depilação
          </a>
          <button className="p-3 md:p-4 w-full bg-slate-700 rounded-md bg-opacity-20 border border-zinc-800 font-bold hover:bg-opacity-5 hover:border-white">
            <a
              target="_blank"
              href={`https://www.google.com/maps/search/?api=1&query=${endereco}`}
            >
              Endereço
            </a>
          </button>
        </div>
        <div className="flex  mt-6">
          <a href="https://www.instagram.com/monica.enzo.54/" target="_blank">
            <FaInstagram
              size={35}
              className="hover:bg-zinc-700 p-1 rounded-md"
            />
          </a>
          <a
            onClick={() =>
              handleSendMessage("Agendamento via WhatsApp", "Gratuito")
            }
          >
            <FaWhatsapp
              size={35}
              className="hover:bg-zinc-700 p-1 rounded-md cursor-pointer"
            />
          </a>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className="flex flex-col text-center">
            <h2 className="text-xl font-bold mb-4">Sobrancelhas & Depilação</h2>
            <p className="mb-4 ">
              Detalhes sobre serviços de sobrancelhas e depilação.
            </p>
            <div className="flex gap-5 my-4 ">
              <div>
                <img
                  className="w-40 h-32 rounded-lg"
                  src={Sobrancelhas}
                  alt="Imagem de uma sobrancelha ilustrativa"
                />
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-md ">Sobrancelha Arqueada</p>
                <p className="text-left text-zinc-600">R$35,00</p>
                <button
                  className="mt-6 text-left "
                  onClick={() =>
                    handleSendMessage("Sobrancelha Arqueada", "R$35,00")
                  }
                >
                  <a
                    href="#"
                    className="p-3 bg-zinc-400 rounded-lg text-left text-white hover:bg-zinc-600"
                  >
                    Quero este!
                  </a>
                </button>
              </div>
            </div>
            <div className="flex gap-5 my-4">
              <div>
                <img
                  className="w-40 h-32  rounded-lg"
                  src={Sobrancelhas}
                  alt="Imagem de uma sobrancelha ilustrativa"
                />
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold">Sobrancelha Angulares</p>
                <p className="text-left text-zinc-600">R$45,00</p>
                <button
                  className="mt-6 text-left"
                  onClick={() =>
                    handleSendMessage("Sobrancelha Arqueada", "R$45,00")
                  }
                >
                  <a
                    href="#"
                    className="p-3 bg-zinc-400 rounded-lg text-left text-white hover:bg-zinc-600"
                  >
                    Quero este!
                  </a>
                </button>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Fechar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
