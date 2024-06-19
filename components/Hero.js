import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Mantente al tanto de tus adultos mayores mientras estás fuera de casa
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Ofrecemos un sistema de vigilancia inteligente para adultos mayores que pasan tiempo solos en casa, 
          el cual te envía notificaciones inmediatas en caso de alguna situación de riesgo.
        </p>
        <button className="btn btn-primary btn-wide">
          Conoce nuestros paquetes
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://www.fundacionfass.org/wp-content/uploads/2023/11/Teconologia-y-envejecimiento.jpg"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={700}
          height={700}
        />
      </div>
    </section>
  );
};

export default Hero;
