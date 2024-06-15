"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "¿Cómo funciona el sistema de SafeGuardian?",
    answer: <div className="space-y-2 leading-relaxed">Nuestro sistema utiliza cámaras de seguridad que detectan automáticamente,
     con inteligencia artificial, caídas, gritos de auxilio, periodos prolongados de inactividad e intrusiones.
     Las alertas se envían inmediatamente a través de Telegram a cualquier familiar que desee recibirlas.
    </div>,
  },
  {
    question: "¿Puedo acceder a las cámaras en tiempo real?",
    answer: <div className="space-y-2 leading-relaxed">Sí, puedes acceder a la transmisión en vivo de las cámaras en
     cualquier momento a través de nuestra app web (excepto el paquete inicial), para asegurarte del estado de tus seres queridos.
    </div>,
  },
  {
    question: "¿Necesito instalar alguna aplicación en especial?",
    answer: <div className="space-y-2 leading-relaxed">Únicamente necesitas tener instalada la app de Telegram, nuestra aplicación 
       puede ser accedida desde el navegador sin necesidad de instalación.
      </div>,
  },
  {
    question: "¿Qué necesito para empezar con SafeGuardian?",
    answer: <div className="space-y-2 leading-relaxed">Solo necesitas elegir el paquete que mejor se adapte a tus necesidades y
     realizar el pago en línea, luego acudirá nuestro técnico a tu domicilio para instalar las cámaras y configurar tu sistema
     de notificaciones. Si lo prefieres, puedes pagar en efectivo al momento de la instalación.
      </div>,
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Preguntas frecuentes
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
