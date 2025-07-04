import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Finchise',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="animate-fade max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-normal mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Finchise website and services (the &quot;Service&quot;).
            By accessing or using the Service, you agree to be bound by these Terms.
          </p>
          <h2 className="text-2xl mt-8 mb-4 font-semibold">1. Use of Service</h2>
          <p>
            You may use the Service only in accordance with these Terms and all applicable laws.
            You agree not to misuse the Service or help anyone else to do so.
          </p>
          <h2 className="text-2xl mt-8 mb-4 font-semibold">2. Intellectual Property</h2>
          <p>
            Finchise retains all rights, title, and interest in and to the Service, including all related intellectual property rights.
          </p>
          <h2 className="text-2xl mt-8 mb-4 font-semibold">3. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Finchise shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or revenues.
          </p>
          <h2 className="text-2xl mt-8 mb-4 font-semibold">4. Changes</h2>
          <p>
            We may modify these Terms at any time. If we make changes, we will provide notice on our website.
            Your continued use of the Service after the changes become effective constitutes your acceptance of the revised Terms.
          </p>
          <h2 className="text-2xl mt-8 mb-4 font-semibold">5. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@finchise.ai.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
} 