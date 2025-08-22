
import React from 'react';
import { USERS } from '../constants';
import UserList from './UserList';
import { SearchIcon } from './icons/SearchIcon';
import { User } from '../types';

interface UserManagementProps {
  onAddUserClick: () => void;
  onViewUserClick: (user: User) => void;
  onEditUserClick: (user: User) => void;
}

const UserManagement: React.FC<UserManagementProps> = ({ onAddUserClick, onViewUserClick, onEditUserClick }) => {
  return (
    <div className="bg-white border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-3xl font-light text-gray-800 mb-4 sm:mb-0">Lista de usuários</h2>
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button
              onClick={onAddUserClick}
              className="bg-[#B30000] text-white px-5 py-2 rounded-md shadow-sm hover:bg-red-800 transition-colors duration-200 whitespace-nowrap"
            >
              Adicionar usuário
            </button>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Pesquise"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserList users={USERS} onViewUserClick={onViewUserClick} onEditUserClick={onEditUserClick} />
    </div>
  );
};

export default UserManagement;