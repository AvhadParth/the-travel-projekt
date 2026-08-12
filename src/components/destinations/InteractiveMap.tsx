"use client";

import React from "react";
import dynamic from "next/dynamic";

const LeafletMapInner = dynamic(
  () => import("./LeafletMapInner"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full bg-[#2C2640] text-[#FFF8ED] rounded-3xl p-12 border border-[#3F375B] text-center space-y-4">
        <span className="font-display font-extrabold text-xl text-[#FCB040]">
          Loading Interactive Geographic Map...
        </span>
      </div>
    ),
  }
);

export default function InteractiveMap() {
  return <LeafletMapInner />;
}
