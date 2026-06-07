import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tom Sutton Heating',
  description: 'Privacy Policy for Tom Sutton Heating. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#191919] pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            How we collect, use, disclose, and safeguard your information.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8">
            Tom Sutton Heating ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, utilize our services, or interact with us.
          </p>
          <p className="mb-8">
            Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect personal data from you in a variety of ways, including when you visit our site, request a quote, book a service, or fill out a form.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Data You Provide</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and physical billing/job addresses.</li>
            <li><strong>Property Details:</strong> Type of heating system, boiler model, and layout details provided for quote calculations.</li>
            <li><strong>Financial Data:</strong> If you apply for financing options through our third-party partners, we collect data to facilitate the application, though we do not store full credit details on our servers.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automated Data Collection</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Log & Usage Data:</strong> IP addresses, browser types, Internet Service Provider (ISP), date/time stamps, and page navigation patterns.</li>
            <li><strong>Cookies:</strong> Standard tracking data to optimize your browsing experience, remember preferences, and analyze site traffic.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We process your personal information based on legitimate business interests, the fulfillment of a contract with you, compliance with our legal obligations, and/or your explicit consent. We use it to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, operate, and maintain our plumbing, heating, and renewable energy services.</li>
            <li>Generate accurate, upfront installation and servicing quotes.</li>
            <li>Process bookings, arrange engineer visits, and complete domestic or commercial jobs.</li>
            <li>Facilitate finance and payment options.</li>
            <li>Communicate administrative updates, technical notices, and service reminders.</li>
            <li>Monitor and analyze website usage to improve performance and user experience.</li>
            <li>Prevent fraudulent transactions and secure our digital infrastructure.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Sharing Your Information</h2>
          <p className="mb-4">We do not sell or rent your personal data. We only share information with third parties in the following strictly controlled scenarios:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Subcontractors & Engineers:</strong> To fulfill physical service requests and installations at your property.</li>
            <li><strong>Third-Party Service Providers:</strong> Trusted partners who handle website analytics, email delivery, and CRM/booking management tools.</li>
            <li><strong>Financing Partners:</strong> When you explicitly apply for financing, your details are passed securely to our financial integration providers.</li>
            <li><strong>Legal & Compliance:</strong> When required by law, regulation, or legal process to protect the rights, property, or safety of our business and clients.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Security & Retention</h2>
          <p className="mb-4">We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no electronic transmission over the internet or information storage technology can be guaranteed 100% secure.</p>
          <p className="mb-6">We only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or gas safety compliance requirements).</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Your Rights (UK GDPR)</h2>
          <p className="mb-4">Under UK data protection laws, you have specific rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Access & Portability:</strong> The right to request copies of your personal data.</li>
            <li><strong>Correction:</strong> The right to request that we correct any inaccurate or incomplete data.</li>
            <li><strong>Erasure ("Right to be Forgotten"):</strong> The right to request that we erase your personal data under certain conditions.</li>
            <li><strong>Restriction & Objection:</strong> The right to object to or restrict our processing of your data under certain conditions.</li>
            <li><strong>Withdraw Consent:</strong> If we rely on your consent to process data, you can withdraw it at any time.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Cookies Policy</h2>
          <p className="mb-6">Our website uses cookies and similar tracking technologies to customize our web pages and improve your experience. You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of some interactive features on our website.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Updates to This Policy</h2>
          <p className="mb-6">We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Effective Date" at the top will be updated accordingly.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Contact Us</h2>
          <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <ul className="list-none pl-0 mt-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <li className="mb-2"><strong>Company Name:</strong> SL Energy Ltd / Tom Sutton Heating</li>
            <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@tomsuttonheating.co.uk" className="text-[#0055A4] hover:underline font-medium">info@tomsuttonheating.co.uk</a></li>
            <li className="mb-2"><strong>Phone:</strong> <a href="tel:01590631671" className="text-[#0055A4] hover:underline font-medium">01590 631671</a></li>
            <li><strong>Address:</strong> New Milton, Hampshire, UK</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
