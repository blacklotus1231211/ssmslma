import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { DonationLink } from '../types';
import { campaignService } from '../services/campaignService';

const ManageLinks = () => {
  const [links, setLinks] = useState<DonationLink[]>([
    { amount: 20, url: '' },
    { amount: 30, url: '' },
    { amount: 40, url: '' },
    { amount: 50, url: '' },
    { amount: 100, url: '' },
    { amount: 200, url: '' },
    { amount: 300, url: '' },
    { amount: 400, url: '' },
    { amount: 500, url: '' },
    { amount: 1000, url: '' },
  ]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Buscar links existentes do backend ao carregar o painel
    const fetchLinks = async () => {
      try {
        const savedLinks = await campaignService.getDonationLinks();
        setLinks(savedLinks);
      } catch (error) {
        console.error('Erro ao carregar links:', error);
        toast.error('Erro ao carregar links de doação');
      }
    };
    fetchLinks();
  }, []);

  const handleUrlChange = (index: number, url: string) => {
    const newLinks = [...links];
    newLinks[index].url = url;
    setLinks(newLinks);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await campaignService.updateDonationLinks(links);

      // Disparar um evento personalizado com os links atualizados
      const updateEvent = new CustomEvent('updateDonationLinks', { detail: links });
      window.dispatchEvent(updateEvent);

      toast.success('Links atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar links:', error);
      toast.error('Erro ao atualizar links');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Gerenciar Links de Doação</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          {links.map((link, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-32">
                <span className="font-semibold">R$ {link.amount.toFixed(2)}</span>
              </div>
              <input
                type="url"
                className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="URL de doação"
                value={link.url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>

        <button
          className={`mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors ${
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

export default ManageLinks;
