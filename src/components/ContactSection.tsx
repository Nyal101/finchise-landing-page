'use client';

import React from 'react';

export default function ContactSection() {
  const calendlyLink = 'https://calendly.com/your-link';
  const email = 'info@finchise.ai';

  return (
    <section id="contact" className="py-20 bg-white animate-fade">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 leading-tight tracking-tight text-center">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center mb-10">
          We&apos;d love to hear from you! Reach out via email or book a meeting with our team.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline text-lg font-medium">
            {email}
          </a>
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
} 