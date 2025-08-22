
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RegistrationForm from './components/RegistrationForm';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';
import { User } from './types';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-light text-gray-800">{title}</h2>
            <p className="mt-4 text-gray-600">Conteúdo para esta página ainda não foi implementado.</p>
        </div>
    </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Gerenciar Usuários');
  const [viewingUser, setViewingUser] = useState<User | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleViewUser = (user: User) => {
    setViewingUser(user);
  };

  const handleCloseView = () => {
    setViewingUser(null);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleCloseEdit = () => {
    setEditingUser(null);
  };

  const renderPage = () => {
    if (viewingUser) {
      return <ViewUser user={viewingUser} onClose={handleCloseView} />;
    }
    if (editingUser) {
      return <EditUser user={editingUser} onClose={handleCloseEdit} />;
    }

    switch (activePage) {
      case 'Cadastro':
        return <RegistrationForm onBackClick={() => setActivePage('Gerenciar Usuários')} />;
      case 'Gerenciar Usuários':
        return <UserManagement onAddUserClick={() => setActivePage('Cadastro')} onViewUserClick={handleViewUser} onEditUserClick={handleEditUser} />;
      case 'Lista de terceiros':
        return <PlaceholderPage title="Lista de Terceiros" />;
      case 'Dashboard':
        return <PlaceholderPage title="Dashboard" />;
      case 'Gerenciar Empresas':
        return <PlaceholderPage title="Gerenciar Empresas" />;
      default:
        return <UserManagement onAddUserClick={() => setActivePage('Cadastro')} onViewUserClick={handleViewUser} onEditUserClick={handleEditUser} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        {renderPage()}
      </main>
      <footer className="bg-gray-500 h-4"></footer>
    </div>
  );
};

export default App;