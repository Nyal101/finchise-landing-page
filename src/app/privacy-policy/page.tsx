import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Finchise',
};

export default async function PrivacyPolicyPage() {
  // Read the markdown file from the public directory
  const filePath = path.join(process.cwd(), 'public', 'privacy-policy.md');
  const content = await fs.readFile(filePath, 'utf8');

  return (
    <>
      <Header />
      <main className="animate-fade max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-normal mb-8">Privacy Policy</h1>
        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {content}
        </div>
      </main>
      <Footer />
    </>
  );
} 