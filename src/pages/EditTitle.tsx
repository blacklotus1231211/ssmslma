import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { campaignService } from '../services/campaignService';

const EditTitle = () => {
  const [title, setTitle] = useState('Salve a Vida da Meg: Faça a Diferença Neste Inicio de Ano!');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await campaignService.updateTitle(title);
      toast.success('Título atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar título');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Título</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Título da Campanha
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors ${
            isSaving ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? 'Salvando...' : 'Salvar Alterações'}
        </button>
      </div>
    </div>
  );
};

export default EditTitle;