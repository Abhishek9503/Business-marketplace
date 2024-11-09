import React from 'react';
import ClientList from '../../components/admin/clients/ClientList';
import ClientForm from '../../components/admin/clients/ClientForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ClientsPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Client Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ClientForm />
          <div className="mt-6">
            <ClientList />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientsPage;