import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EditImage from './pages/EditImage';
import EditTitle from './pages/EditTitle';
import EditText from './pages/EditText';
import ManageLinks from './pages/ManageLinks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="edit-image" element={<EditImage />} />
          <Route path="edit-title" element={<EditTitle />} />
          <Route path="edit-text" element={<EditText />} />
          <Route path="manage-links" element={<ManageLinks />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;