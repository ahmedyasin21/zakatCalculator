import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Router>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-emerald-600 shadow-lg p-4 md:p-6 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Zakat Calculator
        </Link>
        <nav className="space-x-4 md:space-x-6">
          <Link to="/" className="text-white hover:text-green-200 transition duration-300 ease-in-out text-lg">Home</Link>
          <Link to="/privacy" className="text-white hover:text-green-200 transition duration-300 ease-in-out text-lg">Privacy Policy</Link>
          <Link to="/contact" className="text-white hover:text-green-200 transition duration-300 ease-in-out text-lg">Contact Us</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Zakat Calculator. All rights reserved.</p>
        <p className="mt-2">Made with ❤️ for the Muslim Ummah.</p>
      </footer>
    </Router>
  );
}