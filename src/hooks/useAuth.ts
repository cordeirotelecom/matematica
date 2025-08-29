'use client';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  level: string;
  avatar: string;
  points: number;
  streak: number;
  achievements: number;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se há um usuário logado no localStorage
    const savedUser = localStorage.getItem('mathlearn_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('mathlearn_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mathlearn_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('mathlearn_user', JSON.stringify(updatedUser));
    }
  };

  return {
    user,
    isLoading,
    login,
    logout,
    updateUser,
    isLoggedIn: !!user
  };
};
