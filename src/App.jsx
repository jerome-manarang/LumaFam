import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StickyHeader from './components/StickyHeader';
import FamHeads from './pages/FamHeads';
import './App.css';

export default function App() {
  return (
    <Router>
      <StickyHeader />

      {/* Example sections for each HashLink -- Change to include actual pages and stuff */}
      <main className="pt-40 space-y-20">
        
        <section id="hangouts" className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold">🎉 Hangouts Section</h1>
        </section>

        <section id="famheads">
          <FamHeads />
          <div className="background-stars"></div>
        </section>

        <section id="fusion" className="min-h-screen flex items-center justify-center bg-gray-300">
          <h1 className="text-4xl font-bold">🔥 FUSION at UCI Section</h1>
        </section>

        <section id="directory" className="min-h-screen flex items-center justify-center bg-gray-400">
          <h1 className="text-4xl font-bold">📖 Directory Section</h1>
        </section>

      </main>
    </Router>
  );
}
