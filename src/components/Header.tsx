import React from 'react';
import Link from 'next/link';
import { BookOpen, Calculator, History, Trophy, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8" />
            <span className="text-2xl font-bold">MathLearn</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/lessons" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Lições</span>
            </Link>
            <Link href="/history" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <History className="h-5 w-5" />
              <span>História</span>
            </Link>
            <Link href="/exercises" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Calculator className="h-5 w-5" />
              <span>Exercícios</span>
            </Link>
            <Link href="/achievements" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Trophy className="h-5 w-5" />
              <span>Conquistas</span>
            </Link>
            <Link href="/profile" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <User className="h-5 w-5" />
              <span>Perfil</span>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
