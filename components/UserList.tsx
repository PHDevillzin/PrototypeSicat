
import React from 'react';
import { User } from '../types';
import UserListItem from './UserListItem';

interface UserListProps {
  users: User[];
  onViewUserClick: (user: User) => void;
  onEditUserClick: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onViewUserClick, onEditUserClick }) => {
  return (
    <div className="divide-y divide-gray-200">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50">
        <div className="col-span-12 sm:col-span-5">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</span>
        </div>
        <div className="col-span-12 sm:col-span-5">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Unidades</span>
        </div>
        <div className="col-span-12 sm:col-span-2">
          {/* Actions header can be empty */}
        </div>
      </div>
      {/* Body */}
      <div className="bg-white">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} onViewUserClick={onViewUserClick} onEditUserClick={onEditUserClick} />
        ))}
      </div>
    </div>
  );
};

export default UserList;