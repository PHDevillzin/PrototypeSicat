
import React from 'react';
import { MainLogo } from './icons/MainLogo';
import { SesiSenaiLogo } from './icons/SesiSenaiLogo';

const Header: React.FC = () => {
  return (
    <header className="bg-[#8B0000] text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <MainLogo className="h-10 w-10" />
          <h1 className="text-xl font-semibold">Sistema de Cadastro de Terceiros</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm">paulo.ribeiro.3@sesisenaisp.org.br</p>
            <p className="text-xs text-gray-300">Gerência de Facilities</p>
          </div>
          <img
            src="https://picsum.photos/id/237/200/200"
            alt="User Avatar"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <SesiSenaiLogo className="h-10" />
        </div>
      </div>
    </header>
  );
};

export default Header;
