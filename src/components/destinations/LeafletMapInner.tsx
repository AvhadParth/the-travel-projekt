"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowRight, MapPin } from "lucide-react";
import { SEED_DESTINATIONS } from "@/lib/seedData";

const createCustomIcon = (destName: string, isSelected: boolean) => {
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div style="
        display: flex;
        align-items: center;
        gap: 5px;
        background: ${isSelected ? '#FCB040' : '#2C2640'};
        color: ${isSelected ? '#2C2640' : '#FFF8ED'};
        border: 2px solid #FCB040;
        padding: 3px 8px;
        border-radius: 9999px;
        box-shadow: 0 8px 16px rgba(44, 38, 64, 0.4);
        font-family: var(--font-body), sans-serif;
        font-weight: 800;
        font-size: 10px;
        white-space: nowrap;
        transform: ${isSelected ? 'scale(1.1)' : 'scale(1)'};
        transition: all 0.2s ease;
      ">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: ${isSelected ? '#2C2640' : '#FCB040'};"></span>
        <span>${destName}</span>
      </div>
    `,
    iconSize: [110, 28],
    iconAnchor: [55, 14],
  });
};

export default function LeafletMapInner() {
  const [selectedDest, setSelectedDest] = useState(SEED_DESTINATIONS[0]);

  return (
    <div className="w-full bg-[#2C2640] text-[#FFF8ED] rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[#3F375B] shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-[#3F375B] gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#FCB040] mb-1.5">
            <MapPin className="w-3.5 h-3.5" /> Real OpenStreetMap Geographic Map
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#FFF8ED]">
            Explore Destinations on Live Map
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#E9D4B5] max-w-sm">
          Click any destination pin on the live map to preview itineraries, travel styles, and starting budgets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Real Leaflet Map Container */}
        <div className="lg:col-span-8 h-[300px] sm:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#3F375B] relative z-10">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%", background: "#1F1A2E" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {SEED_DESTINATIONS.map((dest) => {
              const isSelected = selectedDest.slug === dest.slug;
              return (
                <Marker
                  key={dest.slug}
                  position={[dest.coordinates.lat, dest.coordinates.lng]}
                  icon={createCustomIcon(dest.name, isSelected)}
                  eventHandlers={{
                    click: () => setSelectedDest(dest),
                  }}
                >
                  <Popup className="custom-leaflet-popup">
                    <div className="p-1.5 text-left space-y-0.5 font-body">
                      <span className="font-display font-black text-xs text-[#2C2640] block">{dest.name}</span>
                      <span className="text-[10px] text-[#686174] block">{dest.country} • {dest.idealDuration}</span>
                      <span className="font-bold text-[10px] text-[#FCB040] block">Starting ₹{dest.startingPrice.toLocaleString("en-IN")}</span>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        {/* Selected Destination Preview Card */}
        <div className="lg:col-span-4 bg-[#FFF8ED] text-[#2C2640] p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E9D4B5] shadow-xl flex flex-col justify-between min-h-[320px] sm:h-[480px]">
          <div>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-36 sm:h-44 mb-3 sm:mb-4">
              <img
                src={selectedDest.heroImage}
                alt={selectedDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#2C2640] text-[#FCB040] font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {selectedDest.country}
              </div>
            </div>

            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#2C2640] mb-0.5">
              {selectedDest.name}
            </h4>
            <p className="text-xs font-bold text-[#FCB040] italic font-handwriting text-base sm:text-lg mb-2">
              "{selectedDest.tagline}"
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#686174] py-2 border-t border-b border-[#E9D4B5] my-2 sm:my-3">
              <div>
                <span className="block text-[9px] sm:text-[10px] text-[#686174]/70 uppercase">Ideal Duration</span>
                <span className="text-[#2C2640] font-bold text-xs sm:text-sm">{selectedDest.idealDuration}</span>
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] text-[#686174]/70 uppercase">Starting Price</span>
                <span className="text-[#2C2640] font-bold text-xs sm:text-sm">₹{selectedDest.startingPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <Link
            href={`/destinations/${selectedDest.slug}`}
            className="w-full py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md mt-2"
          >
            <span>Explore {selectedDest.name} Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
