import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VirtualMechanic from './components/VirtualMechanic';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <VirtualMechanic />
        <Contact />
      </main>
      <footer className="bg-black text-white text-center py-6 text-sm">
        <p>Mecânica Do Seu Zé — Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;