import Image from "next/image";
import ContactForm from "./ContactForm";

const services = [
  {
    title: "Microsoft Azure",
    description:
      "Cloud infrastructure design, migration, and management on Azure. From virtual machines and networking to scalable PaaS solutions tailored to your workload.",
    icon: "☁️",
  },
  {
    title: "Amazon Web Services",
    description:
      "AWS architecture, deployment, and ongoing management. We help you leverage the right AWS services to meet performance, cost, and reliability goals.",
    icon: "🔶",
  },
  {
    title: "Microsoft 365",
    description:
      "Tenant setup, licensing optimization, Teams, SharePoint, Exchange, and security hardening. Get the most out of your M365 investment.",
    icon: "📧",
  },
  {
    title: "DevOps",
    description:
      "CI/CD pipeline design, GitHub Actions, Infrastructure as Code with Terraform and Bicep, and automation strategies that accelerate your delivery.",
    icon: "⚙️",
  },
  {
    title: "Hybrid Cloud",
    description:
      "Seamlessly connect on-premises infrastructure with the cloud. Azure Arc, VPN and ExpressRoute, Active Directory integration, and hybrid networking.",
    icon: "🔗",
  },
  {
    title: "Multi-Cloud",
    description:
      "Architect solutions that span Azure and AWS. We design vendor-neutral strategies that give your business flexibility, resilience, and best-of-breed services.",
    icon: "🌐",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image
            src="/ByrdCloudLI-clr.png"
            alt="Byrd Cloud Solutions LLC"
            width={220}
            height={72}
            priority
          />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-[#1b3a6b] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#1b3a6b] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#1b3a6b] transition-colors">Contact</a>
            <a
              href="#contact"
              className="bg-[#1b3a6b] text-white px-4 py-2 rounded-lg hover:bg-[#4bbfbf] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1b3a6b] to-[#4bbfbf] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">
            Cloud Solutions Built for Your Business
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            Whether you&apos;re migrating to the cloud, connecting on-premises infrastructure,
            or spanning multiple platforms — Byrd Cloud Solutions delivers expert guidance
            across Azure, AWS, M365, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#services"
              className="bg-white text-[#1b3a6b] font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-[#1b3a6b] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b]">What We Do</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              End-to-end cloud services from a team that knows the technology and understands your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#4bbfbf] transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-[#1b3a6b] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b] mb-6">About Byrd Cloud Solutions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Byrd Cloud Solutions LLC is a cloud consulting firm built on deep hands-on experience
              with Microsoft Azure, Amazon Web Services, and Microsoft 365. We help businesses of all
              sizes design, migrate, and manage their cloud infrastructure with confidence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in hybrid environments — bridging on-premises infrastructure with the cloud —
              and multi-cloud architectures that give your organization flexibility without vendor lock-in.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need a one-time architecture review or an ongoing managed services partner,
              we bring enterprise-level expertise to every engagement.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-[#1b3a6b] to-[#4bbfbf] rounded-2xl p-10 text-white text-center max-w-sm w-full">
              <div className="text-5xl font-bold mb-2">6+</div>
              <div className="text-blue-100 mb-8">Core Service Areas</div>
              <div className="text-5xl font-bold mb-2">2</div>
              <div className="text-blue-100 mb-8">Major Cloud Platforms</div>
              <div className="text-5xl font-bold mb-2">1</div>
              <div className="text-blue-100">Trusted Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-10">
            Ready to move to the cloud or optimize what you already have? Let&apos;s talk.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b3a6b] text-blue-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/ByrdCloudLI-clr.png"
            alt="Byrd Cloud Solutions LLC"
            width={160}
            height={52}
          />
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Byrd Cloud Solutions LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
