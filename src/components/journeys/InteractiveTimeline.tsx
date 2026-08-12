"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, CheckCircle2 } from "lucide-react";

interface TimelineDayProps {
  dayNumber: number;
  title: string;
  location: string;
  description: string;
  activities?: string[];
  meals?: string;
  stay?: string;
  image?: string;
}

export default function InteractiveTimeline({ days }: { days: TimelineDayProps[] }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  return (
    <div className="space-y-6 relative before:content-[''] before:absolute before:left-6 before:top-4 before:bottom-4 before:w-1 before:bg-[#E9D4B5] before:rounded-full">
      {days.map((day) => {
        const isOpen = expandedDay === day.dayNumber;

        return (
          <div
            key={day.dayNumber}
            className="relative pl-14 transition-all duration-300"
          >
            {/* Day Badge Number Dot */}
            <button
              onClick={() => toggleDay(day.dayNumber)}
              className={`absolute left-0 top-1.5 w-12 h-12 rounded-full border-4 border-[#FFF8ED] flex items-center justify-center font-display font-extrabold text-sm shadow-md transition-all ${
                isOpen
                  ? "bg-[#FCB040] text-[#2C2640] scale-110"
                  : "bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640]"
              }`}
            >
              D{day.dayNumber}
            </button>

            {/* Content Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9D4B5] shadow-md hover:shadow-lg transition-all">
              <div
                onClick={() => toggleDay(day.dayNumber)}
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FCB040]">
                    <MapPin className="w-3.5 h-3.5" /> {day.location}
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#2C2640] mt-0.5">
                    DAY 0{day.dayNumber} — {day.title}
                  </h3>
                </div>
                <div className="p-2 rounded-full bg-[#FFF8ED] text-[#2C2640]">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expandable Details */}
              {isOpen && (
                <div className="mt-6 pt-6 border-t border-[#FFF8ED] space-y-4 animate-in fade-in duration-300">
                  {day.image && (
                    <div className="rounded-2xl overflow-hidden h-48 sm:h-64 mb-4">
                      <img
                        src={day.image}
                        alt={day.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-[#686174] leading-relaxed">
                    {day.description}
                  </p>

                  {day.activities && day.activities.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                        Planned Highlights & Activities:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {day.activities.map((act, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-medium text-[#2C2640]">
                            <CheckCircle2 className="w-4 h-4 text-[#FCB040] shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold text-[#686174]">
                    {day.meals && (
                      <span className="px-3 py-1 rounded-full bg-[#FFF8ED] border border-[#E9D4B5]">
                        🍽️ {day.meals}
                      </span>
                    )}
                    {day.stay && (
                      <span className="px-3 py-1 rounded-full bg-[#FFF8ED] border border-[#E9D4B5]">
                        🏨 {day.stay}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
