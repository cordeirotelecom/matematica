'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calculator, History, Trophy, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from '@/components/auth/AuthModal';

const Header = () => {
  const { user, login, logout, isLoggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
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
              <Link href="/exercises" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Calculator className="h-5 w-5" />
                <span>Exercícios</span>
              </Link>
              <Link href="/about" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <History className="h-5 w-5" />
                <span>Sobre</span>
              </Link>
              <Link href="/achievements" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Trophy className="h-5 w-5" />
                <span>Conquistas</span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                  >
                    <span className="text-2xl">{user?.avatar}</span>
                    <div className="text-left hidden sm:block">
                      <div className="text-sm font-semibold">{user?.name}</div>
                      <div className="text-xs text-blue-200">{user?.points} pontos</div>
                    </div>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <div className="text-sm font-semibold text-gray-900">{user?.name}</div>
                        <div className="text-xs text-gray-500">{user?.email}</div>
                      </div>
                      
                      <Link
                        href="/profile"
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className="h-4 w-4" />
                        <span>Meu Perfil</span>
                      </Link>
                      
                      <Link
                        href="/settings"
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Configurações</span>
                      </Link>
                      
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sair</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Entrar
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={login}
      />
    </>
  );
};

export default Header;
