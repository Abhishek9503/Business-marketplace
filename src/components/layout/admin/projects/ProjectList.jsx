import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

const ProjectList = ({ projects = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="px-4 py-2 text-left font-semibold">Image</th>
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            <th className="px-4 py-2 text-left font-semibold">Description</th>
            <th className="px-4 py-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">
                {project.image && (
                  <img
                    src={URL.createObjectURL(project.image)}
                    alt={project.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
              </td>
              <td className="px-4 py-2">{project.name}</td>
              <td className="px-4 py-2">{project.description}</td>
              <td className="px-4 py-2">
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onEdit?.(project)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => onDelete?.(project.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ProjectList;