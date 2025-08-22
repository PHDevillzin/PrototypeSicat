
import React from 'react';
import { LogoutIcon } from './icons/LogoutIcon';

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ children, active, onClick }) => {
  const baseClasses = "px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 cursor-pointer";
  const activeClasses = "bg-white border-t-4 border-blue-800 shadow-inner -mt-px";
  const inactiveClasses = "hover:bg-gray-300";

  return (
    <div onClick={onClick} className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
      {children}
    </div>
  );
};

interface NavbarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const navItems = ['Lista de terceiros', 'Cadastro', 'Dashboard', 'Gerenciar Usuários', 'Gerenciar Empresas'];

  return (
    <nav className="bg-[#EAF1F8] shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {navItems.map((item) => (
            <NavItem key={item} active={activePage === item} onClick={() => setActivePage(item)}>
              {item}
            </NavItem>
          ))}
        </div>
        <button className="p-2 text-gray-600 hover:text-red-700">
          <LogoutIcon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
