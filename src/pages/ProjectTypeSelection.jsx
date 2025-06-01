import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FileText, Users, Briefcase } from 'lucide-react';

const ProjectTypeSelection = () => {
  const navigate = useNavigate();

  const projectTypes = [
    {
      id: 'ma-pe',
      title: 'M&A / PE',
      description: 'Mergers, acquisitions, and private equity transactions',
      icon: Briefcase,
      route: '/new-project/ma-pe'
    },
    {
      id: 'minority',
      title: 'Minority Investments',
      description: 'Minority stake purchases and growth equity investments',
      icon: Users,
      route: '/new-project/minority'
    },
    {
      id: 'joint-ventures',
      title: 'Joint Ventures',
      description: 'Strategic partnerships and joint venture agreements',
      icon: FileText,
      route: '/new-project/joint-ventures'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Select Project Type
        </h1>
        <p className="text-lg text-gray-600">
          Choose the type of transaction you're working on
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projectTypes.map((type) => (
          <Card 
            key={type.id}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(type.route)}
          >
            <div className="text-center">
              <type.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <Button className="w-full">
                Start {type.title} Project
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeSelection;
