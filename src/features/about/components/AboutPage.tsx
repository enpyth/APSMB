"use client";

import { useState } from "react";
import AboutSidebar from "./AboutSidebar";
import AboutDetails from "./AboutDetails";

export default function AboutPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <div className="flex h-full">
      <AboutSidebar 
        selectedSection={selectedSection} 
        onSectionSelect={setSelectedSection} 
      />
      <AboutDetails selectedSection={selectedSection} />
    </div>
  );
}
