import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import { campaignService } from '../services/campaignService';
import 'react-quill/dist/quill.snow.css';

const EditText = () => {
  const [text, setText] = useState(`👉🏻 Essa cadelinha apareceu na Penitenciária de Sapucaia do sul e pediram ajuda ao protetor Felipe, que recorreu ao Instituto em busca do socorro. Prontamente liberei a internação e agora a Dra Luciane informou que precisamos de uma bolsa de sangue e só conseguimos no dr Abílio com os custo de 2500 REAIS fora procedimento de transfusão e internação. Pós festa de ANO NOVO E NÓS ESTAMOS LOTADOS DE CASOS E SEM RECURSOS 😿`);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await campaignService.updateMainText(text);
      toast.success('Texto atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar texto');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Texto Principal</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Texto Principal da Campanha
          </label>
          <div className="h-64">
            <ReactQuill
              theme="snow"
              value={text}
              onChange={setText}
              className="h-48"
            />
          </div>
        </div>

        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-8 ${
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

export default EditText;