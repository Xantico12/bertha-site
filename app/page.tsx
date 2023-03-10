"use client";

import Gmap from "@/components/Gmap";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import "./global.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollIndicator />
      <Gmap />
    </>
  );
}
