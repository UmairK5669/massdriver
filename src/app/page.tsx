'use client'

import Head from 'next/head';
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <Head>
        <title>Massdriver - DevOps Without the Red Tape</title>
        <meta name="description" content="DevOps Without the Red Tape" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-gray-900">
                <img src="/logo.png" alt="Massdriver" className="h-10" />
              </a>
            </div>

            {/* Mobile Menu Button - Visible when width ≤ 1230px */}
            <div className="hidden max-[1230px]:flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation (Desktop) - Hidden at 1230px */}
            <nav className="flex space-x-8 max-[1230px]:hidden">
              <a href="#" className="text-gray-600 hover:text-gray-900">Features &#9661;</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Solutions &#9661;</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Templates</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Community &#9661;</a>
            </nav>

            {/* Buttons (Desktop) - Hidden at 1230px */}
            <div className="flex space-x-4 max-[1230px]:hidden">
              <a href="#" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                Sign In
              </a>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Try Free &#8594;
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) - Shown when isOpen is true */}
        {isOpen && (
          <div className="max-[1230px]:block bg-white shadow-md">
            <nav className="px-4 py-3 space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900">Features &#9661;</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Solutions &#9661;</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Docs</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Templates</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Community &#9661;</a>
              <a href="#" className="block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-center">
                Sign In
              </a>
              <a href="#" className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center">
                Try Free &#8594;
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="bg-gray-50 bg-no-repeat bg-right-top"
          style={{ backgroundImage: "url('/logo-bg.png')" }}
        >
          <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              DevOps Without the Red Tape
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              At Massdriver, we believe in prevention, not permission.
            </p>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Our platform lets <span className="font-semibold">&quot;ops&quot;</span> teams encode their expertise and your organization’s 
              non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know.
            </p>
            <p className="mt-4 text-lg font-medium text-gray-900">
              Massdriver—Fast by default. Safe by design.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
              >
                See a demo
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Start free trial →
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          className="py-20 text-white"
          style={{ backgroundImage: "linear-gradient(#06212d, #1e3741)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-lg text-white">
              Streamlined infrastructure provisioning in three simple steps.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ops Teams Write IaC
                </h3>
                <p className="mt-2 text-gray-600">
                  DevOps and Platform teams use the infrastructure-as-code tools they know—such as Terraform, OpenTofu, Helm, or CloudFormation—and package them into use-case–specific modules with your policy tooling built in. Your IaC is no longer just config—it’s a functional software asset with embedded policy and cost controls.
                </p>
              </div>
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ops Teams Publish Modules
                </h3>
                <p className="mt-2 text-gray-600">
                  Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover supported cloud services and applications with your organization’s compliance, security, and guardrails in place. A central repository for provisioning, policy, and cost controls.
                </p>
              </div>
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Devs Diagram to Provision
                </h3>
                <p className="mt-2 text-gray-600">
                  Developers diagram what they want and your IaC modules are used to provision it automatically. No more copying Helm Charts or Terraform modules or managing brittle IaC pipelines—Massdriver builds ephemeral CI/CD pipelines behind the scenes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              See What’s Possible with Massdriver’s IaC-Powered Platform
            </h2>
            <div className="mt-8">
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/yxAPMfGR0jE?autoplay=1"
                  title="Massdriver Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="bg-gray-50 text-center py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "linear-gradient(#06212d, #1e3741)" }}
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-white">
            Check out our FAQs or ping us directly in our community Slack
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
              View the FAQ →
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 flex items-center"
            >
              <img src="/slack-icon.png" alt="Slack" className="h-5 w-5 mr-2" />
              <p className="text-white">Join us on Slack</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            
            {/* Massdriver Logo and Status */}
            <div className="col-span-1 flex flex-col items-start">
              <img src="/logo.png" alt="Massdriver" className="h-8" />
              <button className="mt-2 px-4 py-2 border rounded-md text-blue-600 border-blue-300">
                ✅ System Operational
              </button>
              <div className="mt-4 flex space-x-3">
              </div>
            </div>

            {/* Marketplace */}
            <div>
              <h4 className="font-semibold text-gray-900">Marketplace</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#">AWS</a></li>
                <li><a href="#">Azure</a></li>
              </ul>
            </div>

            {/* Templates */}
            <div>
              <h4 className="font-semibold text-gray-900">Templates</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#">AWS</a></li>
                <li><a href="#">GCP</a></li>
                <li><a href="#">Azure</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-gray-900">Solutions</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#">Developer Self Service</a></li>
                <li><a href="#">OpenTofu for Enterprise</a></li>
                <li><a href="#">Platform Engineering Accelerator</a></li>
                <li><a href="#">Cost Management</a></li>
              </ul>
            </div>

            {/* Company & Resources */}
            <div>
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
              <h4 className="mt-6 font-semibold text-gray-900">Resources</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Webinars</a></li>
                <li><a href="#">Pitch Deck</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section (Moved Outside the Grid) */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
            <p>© Massdriver, Inc. 2024</p>
            <div className="flex space-x-4">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
