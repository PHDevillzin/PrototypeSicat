
import React from 'react';
import { CalendarIcon } from './icons/CalendarIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface RegistrationFormProps {
  onBackClick: () => void;
}

const FormField: React.FC<{ label: string; helperText: string; children: React.ReactNode }> = ({ label, helperText, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 relative">
      {children}
    </div>
    <p className="mt-1 text-xs text-gray-500">{helperText}</p>
  </div>
);

const SelectField: React.FC<{ value?: string; placeholder?: string }> = ({ value, placeholder }) => (
  <div className="relative">
    <select
      defaultValue={value}
      className="w-full bg-white p-2 border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500 pr-8"
    >
      {value ? <option>{value}</option> : <option disabled selected>{placeholder}</option>}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-blue-800 rounded-r-md">
      <ChevronDownIcon className="w-5 h-5 text-white" />
    </div>
  </div>
);

const DateField: React.FC<{ value?: string }> = ({ value }) => (
    <div className="relative">
        <input
            type="text"
            defaultValue={value}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-blue-800 rounded-r-md">
            <CalendarIcon className="w-5 h-5 text-white" />
        </div>
    </div>
);


const RadioGroup: React.FC<{ label: string; helperText: string }> = ({ label, helperText }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-2 flex items-center space-x-6">
      <label className="flex items-center">
        <input type="radio" name="insalubridade" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
        <span className="ml-2 text-sm text-gray-700">Sim</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="insalubridade" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
        <span className="ml-2 text-sm text-gray-700">Não</span>
      </label>
    </div>
    <p className="mt-1 text-xs text-gray-500">{helperText}</p>
  </div>
);


const RegistrationForm: React.FC<RegistrationFormProps> = ({ onBackClick }) => {
  return (
    <div className="bg-white border-2 border-blue-900 rounded-lg shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-3xl font-light text-gray-800">Cadastro de Novo Terceiro</h2>
      </div>
      <div className="flex-grow p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
        <div className="space-y-6">
          <FormField label="Unidade:" helperText="Selecione uma opção (obrigatório)">
            <SelectField placeholder="Localizar itens" />
          </FormField>
          <FormField label="Entidade:" helperText="">
             <select className="w-full bg-gray-100 p-2 border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500 pr-8">
                <option>SENAI</option>
             </select>
          </FormField>
          <FormField label="Razão Social da Contratada:" helperText="">
            <SelectField value="ALFER PRESTADORA DE SERVICOS LTDA" />
          </FormField>
          <FormField label="CNPJ da Contratada:" helperText="">
            <input type="text" defaultValue="01.456.620/0001-00" className="w-full bg-gray-100 p-2 border border-gray-300 rounded-md" readOnly />
          </FormField>

          <hr className="my-6" />

          <FormField label="Nome Completo do Terceiro a Cadastrar:" helperText="Selecione uma opção (obrigatório)">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </FormField>
          <FormField label="CPF (sem pontos e traço)" helperText="Selecione uma opção (obrigatório)">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </FormField>
          <FormField label="Escolaridade:" helperText="">
            <SelectField />
          </FormField>
          <FormField label="Gênero" helperText="">
            <SelectField />
          </FormField>
           <FormField label="Logradouro:" helperText="">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </FormField>
          <FormField label="Data de Nascimento:" helperText="Selecione uma opção (obrigatório)">
            <DateField value="31/12/2025" />
          </FormField>
          <FormField label="Cargo:" helperText="Selecione uma opção (obrigatório)">
            <SelectField />
          </FormField>
          <FormField label="Data de início do vínculo com a empresa contratada:" helperText="">
            <DateField value="31/12/2025" />
          </FormField>
          <FormField label="Data de início das atividades na unidade:" helperText="Selecione uma opção (obrigatório)">
            <DateField value="31/12/2025" />
          </FormField>
          <FormField label="Jornada de Trabalho:" helperText="Selecione uma opção (obrigatório)">
            <SelectField />
          </FormField>
          
          <RadioGroup label="Recebe adicional de insalubridade ou periculosidade?" helperText="Selecione uma opção (obrigatório)" />

        </div>
      </div>
      <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-center space-x-4">
        <button
          onClick={onBackClick}
          className="bg-white text-gray-800 px-10 py-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
        >
          Voltar
        </button>
        <button className="bg-[#8B0000] text-white px-10 py-2 rounded-md shadow-sm hover:bg-red-800 transition-colors duration-200">
          Salvar
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
