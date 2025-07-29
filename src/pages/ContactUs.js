import React from 'react';

export default function ContactUs() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-green-700 text-center">Get in Touch</h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center">
          We're here to help! For any questions, concerns, feedback, or support regarding the Zakat Calculator app or this website,
          please don't hesitate to reach out.
        </p>
        <div className="flex flex-col items-center space-y-4 text-lg text-gray-800">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>Email: <a href="mailto:ahmedyasin1947@gmail.com" className="text-green-600 hover:underline">ahmedyasin1947@gmail.com</a></span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
            </svg>
            <span>Support Hours: Monday to Friday, 9:00 AM – 5:00 PM (PKT)</span>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600 text-sm">
          We aim to respond to all inquiries within 24-48 business hours.
        </p>
      </div>
    </section>
  );
}