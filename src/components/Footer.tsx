import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MathLearn</h3>
            <p className="text-gray-300">
              Sua jornada matemática completa, do básico ao avançado. 
              Aprenda de forma interativa e divertida.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/lessons" className="text-gray-300 hover:text-white">Lições</Link></li>
              <li><Link href="/exercises" className="text-gray-300 hover:text-white">Exercícios</Link></li>
              <li><Link href="/history" className="text-gray-300 hover:text-white">História</Link></li>
              <li><Link href="/achievements" className="text-gray-300 hover:text-white">Conquistas</Link></li>
            </ul>
          </div>

          {/* Níveis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Níveis</h4>
            <ul className="space-y-2">
              <li><Link href="/lessons/elementary" className="text-gray-300 hover:text-white">Fundamental I</Link></li>
              <li><Link href="/lessons/middle" className="text-gray-300 hover:text-white">Fundamental II</Link></li>
              <li><Link href="/lessons/high-school" className="text-gray-300 hover:text-white">Ensino Médio</Link></li>
              <li><Link href="/lessons/advanced" className="text-gray-300 hover:text-white">Avançado</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">contato@mathlearn.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 MathLearn. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
