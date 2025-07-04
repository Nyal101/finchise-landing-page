import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Finchise',
};

export default function ContactPage() {
  const calendlyLink = 'https://calendly.com/your-link';
  const email = 'info@finchise.ai';

  return (
    <>
      <Header />
      <main className="animate-fade max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-normal mb-8">Contact Us</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          We&apos;d love to hear from you! Reach out via email or book a meeting with our team.
        </p>
        <div className="space-y-4">
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
          <br />
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Book a Meeting
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
} 