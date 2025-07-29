import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-green-700 text-center">Privacy Policy</h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          At Zakat Calculator, your privacy is our utmost priority. We are committed to
          transparency about how our app functions and what information, if any, is handled.
          The core principle of our application is to provide a secure and private calculation
          tool without compromising your personal data.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-green-600">Our Commitment to Your Data Privacy</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Zakat Calculator is designed with a "privacy by design" approach. This means:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>We **do not collect, store, or share** any personal or financial data from our users.</li>
          <li>All Zakat calculations are performed **locally on your device or browser**.</li>
          <li>Your input and results are **never transmitted** to any server or third party.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-green-600">Data Collection Explained</h3>
        <p className="text-gray-700 leading-relaxed">
          This app operates without any form of user data collection. There are absolutely no
          login or registration features, and no analytics or tracking tools are embedded within
          the application. We do not use cookies or third-party scripts that would track your
          activity or collect information. Your use of the Zakat Calculator is entirely anonymous.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-green-600">Security Measures</h3>
        <p className="text-gray-700 leading-relaxed">
          Since no data is transmitted from your device or stored on our behalf, your financial
          information and personal details remain entirely private and secure on your device.
          There are no external data breaches to worry about concerning your Zakat calculations
          made with our app.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-green-600">Compliance & Transparency</h3>
        <p className="text-gray-700 leading-relaxed">
          This privacy policy is crafted to meet and exceed the requirements of platforms like
          the Google Play Store and Apple App Store for applications that handle sensitive content
          but are designed explicitly *not* to process personal user data. We believe in clear
          and straightforward communication about our data practices.
        </p>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Thank you for choosing Zakat Calculator for your Zakat needs. Your trust and privacy are paramount to us.
        </p>
      </div>
    </section>
  );
}