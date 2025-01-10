import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Image, Type, FileText, Link2, Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const menuItems = [
    { icon: LayoutDashboard, text: 'Dashboard', path: '/' },
    { icon: Image, text: 'Editar Imagem', path: '/edit-image' },
    { icon: Type, text: 'Editar Título', path: '/edit-title' },
    { icon: FileText, text: 'Editar Texto Principal', path: '/edit-text' },
    { icon: Link2, text: 'Gerenciar Links', path: '/manage-links' },
  ];

  return (
    <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center">
        <h1 className={`font-bold ${isOpen ? 'block' : 'hidden'}`}>Vakinha Editor</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-700 rounded">
          <Menu size={24} />
        </button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <item.icon size={24} />
            <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;