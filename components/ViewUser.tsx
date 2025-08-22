
import React from 'react';
import { User } from '../types';

interface ViewUserProps {
  user: User;
  onClose: () => void;
}

const FormField: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 relative">
      {children}
    </div>
  </div>
);

const ReadOnlyField: React.FC<{ value?: string | string[] }> = ({ value }) => (
  <div className="w-full bg-gray-100 p-2 border border-gray-300 rounded-md text-gray-800 min-h-[40px]">
    {Array.isArray(value) ? value.join(', ') : value}
  </div>
);

const ReadOnlyRadio: React.FC<{ value: boolean }> = ({ value }) => (
    <div className="mt-2 flex items-center space-x-6">
      <label className="flex items-center">
        <input type="radio" checked={value === true} disabled className="h-4 w-4 text-blue-600 border-gray-300" />
        <span className="ml-2 text-sm text-gray-700">Sim</span>
      </label>
      <label className="flex items-center">
        <input type="radio" checked={value === false} disabled className="h-4 w-4 text-blue-600 border-gray-300" />
        <span className="ml-2 text-sm text-gray-700">Não</span>
      </label>
    </div>
);

const ViewUser: React.FC<ViewUserProps> = ({ user, onClose }) => {
  return (
    <div className="bg-white border-2 border-blue-900 rounded-lg shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-3xl font-light text-gray-800">Visualizar Cadastro de Terceiro</h2>
      </div>
      <div className="flex-grow p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
        <div className="space-y-6">
          <FormField label="Unidade:">
            <ReadOnlyField value={user.unidade} />
          </FormField>
          <FormField label="Entidade:">
            <ReadOnlyField value={user.entidade} />
          </FormField>
          <FormField label="Razão Social da Contratada:">
            <ReadOnlyField value={user.razaoSocial} />
          </FormField>
          <FormField label="CNPJ da Contratada:">
            <ReadOnlyField value={user.cnpj} />
          </FormField>

          <hr className="my-6" />

          <FormField label="Nome Completo do Terceiro:">
            <ReadOnlyField value={user.name} />
          </FormField>
          <FormField label="CPF:">
            <ReadOnlyField value={user.cpf} />
          </FormField>
          <FormField label="Escolaridade:">
            <ReadOnlyField value={user.escolaridade} />
          </FormField>
          <FormField label="Gênero:">
            <ReadOnlyField value={user.genero} />
          </FormField>
           <FormField label="Logradouro:">
            <ReadOnlyField value={user.logradouro} />
          </FormField>
          <FormField label="Data de Nascimento:">
            <ReadOnlyField value={user.dataNascimento} />
          </FormField>
          <FormField label="Cargo:">
            <ReadOnlyField value={user.cargo} />
          </FormField>
          <FormField label="Data de início do vínculo com a empresa contratada:">
            <ReadOnlyField value={user.dataInicioVinculo} />
          </FormField>
          <FormField label="Data de início das atividades na unidade:">
            <ReadOnlyField value={user.dataInicioAtividades} />
          </FormField>
          <FormField label="Jornada de Trabalho:">
            <ReadOnlyField value={user.jornadaTrabalho} />
          </FormField>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Recebe adicional de insalubridade ou periculosidade?</label>
            <ReadOnlyRadio value={user.recebeAdicional} />
          </div>

        </div>
      </div>
      <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-center">
        <button
          onClick={onClose}
          className="bg-[#8B0000] text-white px-10 py-2 rounded-md shadow-sm hover:bg-red-800 transition-colors duration-200"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ViewUser;
