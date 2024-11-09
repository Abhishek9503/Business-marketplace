import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';

const ProjectForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    setFormData({ name: '', description: '', image: null });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          className="mb-4"
        />
      </div>
      <div>
        <Input
          placeholder="Project Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mb-4"
        />
      </div>
      <div>
        <Textarea
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mb-4"
        />
      </div>
      <Button type="submit">
        <Plus className="mr-2 h-4 w-4" />
        Add Project
      </Button>
    </form>
  );
};

export default ProjectForm;