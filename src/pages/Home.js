import React from 'react';
// Assuming you have images in your public folder or accessible via import
// import appScreenshot1 from '../assets/screenshot1.png'; // Example import

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-500 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Calculate Your Zakat with Ease and Confidence
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The simple, secure, and accurate way to fulfill your religious obligation.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Replace with actual app store links and icons */}
            <a href="#download" className="bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Download on the App Store
            </a>
            <a href="#download" className="bg-green-800 text-white hover:bg-green-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Introduction/About Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 bg-white shadow-md rounded-lg -mt-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700 text-center">
          Your Trusted Companion for Zakat Calculations
        </h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center">
          Our mobile Zakat Calculator app is meticulously designed to simplify the complex process of
          calculating your Zakat obligations. Built with a focus on accuracy, privacy, and an intuitive user experience,
          it helps you effortlessly fulfill this pillar of Islam.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-green-600">Why Our App?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-medium">User-Friendly Interface:</span> Clean and simple design for easy navigation.</li>
              <li><span className="font-medium">Accurate Calculations:</span> Based on widely accepted Islamic principles.</li>
              <li><span className="font-medium">Complete Privacy:</span> No personal data collected, stored, or shared.</li>
              <li><span className="font-medium">Offline Functionality:</span> Calculate Zakat anytime, anywhere.</li>
            </ul>
          </div>
          {/* Placeholder for App Screenshots/Mockup */}
         <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg shadow-inner">
          <img
            src="/ss_app.png"
            alt="App Screenshot"
            // className="max-h-full max-w-full object-contain rounded-md shadow-md"
          />
        </div>
        </div>
      </section>

      {/* How It Works Section (Optional, but good for clarity) */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-700 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl text-green-500 mb-4">1</div> {/* Example icon or number */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Input Your Assets</h3>
              <p className="text-gray-600">Enter details about your gold, silver, cash, investments, and other zakatable assets.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl text-green-500 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Deduct Liabilities</h3>
              <p className="text-gray-600">Account for any short-term debts or liabilities to determine your net worth.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl text-green-500 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Get Your Zakat Due</h3>
              <p className="text-gray-600">Receive an instant, clear calculation of your total Zakat obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Repeat at bottom for convenience) */}
      <section className="bg-green-700 text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Zakat?</h2>
          <p className="text-lg mb-8 opacity-90">
            Download the Zakat Calculator app today and fulfill your obligations with confidence.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#download" className="bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Download on the App Store
            </a>
            <a href="#download" className="bg-green-800 text-white hover:bg-green-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}