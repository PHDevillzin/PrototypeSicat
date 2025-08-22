
import React from 'react';
import { User } from '../types';
import { EyeIcon } from './icons/EyeIcon';
import { PencilIcon } from './icons/PencilIcon';
import { MinusCircleIcon } from './icons/MinusCircleIcon';

interface UserListItemProps {
  user: User;
  onViewUserClick: (user: User) => void;
  onEditUserClick: (user: User) => void;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, onViewUserClick, onEditUserClick }) => {
  return (
    <div className="flex items-stretch border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
        <div className="w-1.5 bg-blue-900"></div>
        <div className="flex-grow grid grid-cols-12 gap-4 items-center px-6 py-4">
            <div className="col-span-12 sm:col-span-5 flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
            </div>
            <div className="col-span-12 sm:col-span-5">
                <div className="flex flex-wrap gap-2">
                    {user.units.map((unit) => (
                        <span key={unit} className="text-sm text-gray-600">{unit}</span>
                    ))}
                </div>
            </div>
            <div className="col-span-12 sm:col-span-2 flex items-center justify-end space-x-4">
                <button onClick={() => onViewUserClick(user)} className="text-gray-500 hover:text-blue-600 transition-colors">
                    <EyeIcon className="w-5 h-5" />
                </button>
                <button onClick={() => onEditUserClick(user)} className="text-gray-500 hover:text-yellow-600 transition-colors">
                    <PencilIcon className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-red-600 transition-colors">
                    <MinusCircleIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
        <div className="w-4 bg-gray-100 border-l border-gray-300 flex items-center justify-center cursor-pointer">
            <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
        </div>
    </div>
  );
};

export default UserListItem;