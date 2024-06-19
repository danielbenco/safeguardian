import { Suspense } from 'react'
import Header from "@/components/Header";
import FeaturesListicle from "@/components/FeaturesListicle";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <FeaturesListicle />
      </main>
      <Footer />
    </>
  );
}