import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  onNavigate?: (section: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header onNavigate={onNavigate} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
