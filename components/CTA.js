"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const CTA = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/packages");
  };

  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://png.pngtree.com/thumb_back/fw800/background/20220208/pngtree-portrait-of-multi-generation-family-having-meal-embracing-granny-multi-generation-family-photo-photo-image_29166972.jpg"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Protege a los que quieres, apoya a los que tienes
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Deja de frustrarte por ¿dónde estarán y con quién? ¿les habrá pasado algo? SafeGuardian se preocupa por ti.
          </p>

          <button className="btn btn-primary btn-wide" onClick={handleClick}>
            Conoce nuestros paquetes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
