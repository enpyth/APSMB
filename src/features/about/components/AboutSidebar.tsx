"use client";

import { useState } from "react";

interface AboutSidebarProps {
  selectedSection: string | null;
  onSectionSelect: (section: string | null) => void;
}

export default function AboutSidebar({ selectedSection, onSectionSelect }: AboutSidebarProps) {
  const sections = [
    { id: "what-we-do", title: "What we do" },
    { id: "partners", title: "Partners" },
    { id: "board", title: "APSMB Board" },
    { id: "contact", title: "Contact" }
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">About APSMB</h2>
        <nav className="space-y-2">
          <button
            onClick={() => onSectionSelect(null)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedSection === null
                ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Introduction
          </button>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedSection === section.id
                  ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
