import React from 'react';
import Pricing from "@/components/Pricing";
import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Packages() {
  return (
    <>
    <Suspense>
        <Header />
    </Suspense>
    <main>
        <Pricing />
    </main>
    <Footer />
    </>
  );
}
