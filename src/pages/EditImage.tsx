import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { toast } from 'react-toastify';
import { campaignService } from '../services/campaignService';

const EditImage = () => {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!selectedFile) {
      toast.error('Selecione uma imagem para salvar');
      return;
    }

    try {
      setIsSaving(true);
      await campaignService.updateImage(selectedFile);
      toast.success('Imagem atualizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar imagem');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Imagem</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Imagem Atual
          </label>
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="max-w-full h-auto rounded" />
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500">Nenhuma imagem selecionada</p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Nova Imagem
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload um arquivo</span>
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
            </div>
          </div>
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

export default EditImage;