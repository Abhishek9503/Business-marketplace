import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(p => p.id === id ? { ...updatedProject, id } : p));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Similar functions for clients, contacts, and subscriptions...

  const value = {
    projects,
    clients,
    contacts,
    subscriptions,
    addProject,
    updateProject,
    deleteProject,
    // ... other functions
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};