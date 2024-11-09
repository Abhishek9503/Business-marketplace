// pages/admin/ProjectsPage.jsx
import React from 'react';
import ProjectList from '../../components/admin/projects/ProjectList';
import ProjectForm from '../../components/admin/projects/ProjectForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectForm />
          <div className="mt-6">
            <ProjectList />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsPage;