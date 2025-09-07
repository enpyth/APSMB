import Image from "next/image";
import Partners from "@/features/home/Partners";
import ContactEmail from "@/components/form/contact-email";
import { Box } from "@mui/material";

interface AboutDetailsProps {
  selectedSection: string | null;
}

// Board members data
const boardMembers = [
  {
    id: "wei-zhang",
    name: "Wei Zhang",
    position: "President",
    country: "Australia",
    image: "/home/leader.png",
  },
  {
    id: "member2",
    name: "Dr. Sarah Johnson",
    position: "Vice President",
    country: "Japan",
    image: "/placeholder.jpg",
  },
  {
    id: "member3",
    name: "Prof. Michael Chen",
    position: "Secretary",
    country: "Singapore",
    image: "/placeholder.jpg",
  },
  {
    id: "member4",
    name: "Dr. Maria Rodriguez",
    position: "Treasurer",
    country: "Philippines",
    image: "/placeholder.jpg",
  },
];

// Contact form subject options
const contactSubjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "membership", label: "Membership Information" },
  { value: "events", label: "Events & Conferences" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "research", label: "Research Collaboration" },
];

export default function AboutDetails({ selectedSection }: AboutDetailsProps) {
  const address = "GPO Box 2100, ADELAIDE, SA, 5001";
  if (!selectedSection) {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About APSMB</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to APSMB
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  The Asia-Pacific Marine Biotechnology Association (APSMB) is a
                  leading organization dedicated to advancing marine
                  biotechnology research, industry development, and policy
                  making across the Asia-Pacific region. Our mission is to
                  foster collaboration between researchers, industry leaders,
                  investors, and policymakers to drive innovation in marine
                  biotechnology.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  APSMB serves as a platform for marine biotechnologists,
                  industry professionals, investors, and policy makers to
                  collaborate on current marine biotechnology research and
                  industry development. We facilitate knowledge sharing, promote
                  best practices, and support the growth of sustainable marine
                  biotechnology solutions across the Asia-Pacific region.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Key Focus Areas
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Marine biotechnology research and development</li>
                  <li>• Industry collaboration and technology transfer</li>
                  <li>• Policy development and regulatory guidance</li>
                  <li>• Investment facilitation and funding opportunities</li>
                  <li>• Education and capacity building</li>
                  <li>• Sustainable marine resource management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection === "what-we-do") {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Platform
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  The APSMB official website of the Asia-Pacific Marine
                  Biotechnology Association (APSMB) will serve as the
                  Association's long-term digital platform. It will provide
                  public access to comprehensive information about the
                  Association, its activities, and its members, while also
                  supporting internal communication, event promotion, and
                  document sharing.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  The Forum will address many of the current issues farmers,
                  industry, investors and governments are facing. How to scale
                  the production, how to improve genetic selection from existing
                  strains, what does it take to build local and national
                  strategies to facilitate the biorefinery and the offtakes? How
                  to avoid excessive fluctuations in the prices paid to seaweed
                  farmers? Could we work on a central collection center,
                  established either through cooperatives, farmer associations,
                  private companies, or the government to help coordinate the
                  marketing and trading and to monitor seaweed quality.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Achievements
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 leading-relaxed">
                      The 13th APMBC and 5th ANZMBS conference are combining to
                      engage marine biotechnologists, industry, investors, and
                      policy makers in current marine biotechnology research,
                      and industry development in the Asia-Pacific region.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-gray-700 leading-relaxed">
                      The 13th APMBC and 5th ANZMBS conference are combining to
                      engage marine biotechnologists, industry, investors, and
                      policy makers in current marine biotechnology research,
                      and industry development in the Asia-Pacific region.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 leading-relaxed">
                      The 13th APMBC and 5th ANZMBS conference are combining to
                      engage marine biotechnologists, industry, investors, and
                      policy makers in current marine biotechnology research,
                      and industry development in the Asia-Pacific region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection === "partners") {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Our Partners
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Partnership Overview
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Our partners are important to successfully carrying out the
                  mission of APSMB, and together we have been able to accomplish
                  much. We work closely with leading institutions, research
                  organizations, and industry partners to advance marine
                  biotechnology across the Asia-Pacific region.
                </p>
              </div>
            </div>

            <div>
              <Partners />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection === "board") {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">APSMB Board</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Executive Committee
              </h2>
              <div className="bg-white p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {boardMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {member.position}
                        </p>
                        <p className="text-gray-600">{member.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection === "contact") {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Get in Touch
                </h2>
                <div className="bg-white p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-700">
                        GPO Box 2100
                        <br />
                        ADELAIDE, SA 5001
                        <br />
                        Australia
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Contact Form
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Send us a message and we'll get back to you as soon as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Send Message
                </h2>
                <div className="bg-white p-6 rounded-lg">
                  <ContactEmail
                    subjectOptions={contactSubjectOptions}
                    buttonLabel="Send Message"
                    messagePlaceholder="Tell us more about your inquiry..."
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Location
              </h2>
              <Box sx={{ height: 400, position: "relative" }}>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}&q=${encodeURIComponent(address)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
