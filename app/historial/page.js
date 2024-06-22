import { Suspense } from 'react'
import CamerasHeader from "@/components/CamerasHeader";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Camaras() {
  // Datos de prueba para la tabla
  const eventos = [
    { tipo: "Caída", fecha: "2024-06-01", hora: "14:23", accion: "Ninguna" },
    { tipo: "Periodo de inactividad", fecha: "2024-06-01", hora: "15:00", accion: "Llamada a contacto 1" },
    { tipo: "Grito de auxilio", fecha: "2024-06-02", hora: "09:12", accion: "Policía" },
    { tipo: "Intrusión", fecha: "2024-06-03", hora: "02:45", accion: "Llamada a contacto 2" },
    { tipo: "Caída", fecha: "2024-06-04", hora: "17:30", accion: "Ninguna" },
    { tipo: "Periodo de inactividad", fecha: "2024-06-05", hora: "11:00", accion: "Ninguna" },
    { tipo: "Grito de auxilio", fecha: "2024-06-06", hora: "22:18", accion: "Policía" },
    { tipo: "Intrusión", fecha: "2024-06-07", hora: "03:55", accion: "Llamada a contacto 1" },
    { tipo: "Caída", fecha: "2024-06-08", hora: "20:40", accion: "Ninguna" },
    { tipo: "Periodo de inactividad", fecha: "2024-06-09", hora: "07:10", accion: "Llamada a contacto 2" },
  ];

  return (
    <main className="min-h-screen pb-24">
      <Suspense>
        <CamerasHeader />
      </Suspense>
      <section className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Historial de Alertas</h1>
        
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Tipo de Evento</th>
              <th className="border border-gray-300 px-4 py-2">Fecha</th>
              <th className="border border-gray-300 px-4 py-2">Hora</th>
              <th className="border border-gray-300 px-4 py-2">Acción Realizada</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{evento.tipo}</td>
                <td className="border border-gray-300 px-4 py-2">{evento.fecha}</td>
                <td className="border border-gray-300 px-4 py-2">{evento.hora}</td>
                <td className="border border-gray-300 px-4 py-2">{evento.accion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
