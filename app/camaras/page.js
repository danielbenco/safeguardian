import { Suspense } from 'react';
import ButtonAccount from "@/components/ButtonAccount";
import CamerasHeader from "@/components/CamerasHeader";

export const dynamic = "force-dynamic";

// Simulación de señal de cámaras con una cámara real (MJPEG)
const cameraFeeds = [
  { id: 1, src: "http://benky.ddns.net:9999/video" }, // URL MJPEG de tu cámara
  { id: 2, src: "https://via.placeholder.com/300?text=Cam+2" },
  { id: 3, src: "https://via.placeholder.com/300?text=Cam+3" },
  { id: 4, src: "https://via.placeholder.com/300?text=Cam+4" },
];

export default async function Camaras() {
  return (
    <main className="min-h-screen pb-24">
      <Suspense>
        <CamerasHeader />
      </Suspense>
      <div className="flex justify-center relative">
        <div className="flex flex-col justify-center items-center space-y-4 p-4 fixed top-1/2 transform -translate-y-1/2 left-0">
          <button className="btn btn-circle btn-primary">911</button>
          <button className="btn btn-circle btn-secondary">Contacto 1</button>
          <button className="btn btn-circle btn-secondary">Contacto 2</button>
          <button className="btn btn-circle btn-secondary">Contacto 3</button>
        </div>
        <section className="grid grid-cols-2 gap-2 p-4">
          {cameraFeeds.map(feed => (
            <div key={feed.id} className="border border-gray-300">
              <img src={feed.src} alt={`Cam ${feed.id}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
