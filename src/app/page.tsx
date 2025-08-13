"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import RepairFormModal from "@/components/RepairFormModal";
import { motion } from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <FAQs />
        <Pricing />


        <CallToAction />
      </div>
      <Footer />

      {/* Modal */}
      <RepairFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
