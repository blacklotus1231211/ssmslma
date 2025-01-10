import React from 'react';
import { FileText, Image, Link2, Type } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Image className="text-blue-500" size={24} />
            <h2 className="text-xl font-semibold ml-2">Imagem</h2>
          </div>
          <p className="text-gray-600">Gerencie a imagem principal da campanha</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Type className="text-green-500" size={24} />
            <h2 className="text-xl font-semibold ml-2">Título</h2>
          </div>
          <p className="text-gray-600">Edite o título da sua campanha</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FileText className="text-purple-500" size={24} />
            <h2 className="text-xl font-semibold ml-2">Texto Principal</h2>
          </div>
          <p className="text-gray-600">Atualize o conteúdo principal</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Link2 className="text-orange-500" size={24} />
            <h2 className="text-xl font-semibold ml-2">Links</h2>
          </div>
          <p className="text-gray-600">Configure os links de doação</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;