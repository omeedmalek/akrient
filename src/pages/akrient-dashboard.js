import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Clock, CheckCircle, AlertCircle, FileText, Calendar } from 'lucide-react';

const DashboardPage = ({ setCurrentProject }) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('akrient_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Demo projects
      setProjects([
        {
          id: '1',
          name: 'Acme Corp - Asset Purchase',
          clientName: 'Acme Corporation',
          createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
          status: 'in_review',
          dealType: 'Asset Purchase',
          value: '$45M'
        },
        {
          id: '2',
          name: 'TechStart - Series B Acquisition',
          clientName: 'TechStart Inc.',
          createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
          status: 'completed',
          dealType: 'Stock Purchase',
          value: '$120M'
        },
        {
          id: '3',
          name: 'GlobalCo - Merger',
          clientName: 'Global Corporation',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          status: 'drafting',
          dealType: 'Forward Merger',
          value: '$280M'
        }
      ]);
    }
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in_review':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'drafting':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in_review':
        return 'In Review';
      case 'drafting':
        return 'Drafting';
      case 'questionnaire_complete':
        return 'Questionnaire Complete';
      default:
        return 'Unknown';
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    if (project.status === 'questionnaire_complete') {
      navigate('/new-project/term-sheet');
    } else {
      navigate(`/project/${project.id}/editor`);
    }
  };

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: <FileText className="w-6 h-6" /> },
    { label: 'In Progress', value: projects.filter(p => p.status === 'drafting').length, icon: <Clock className="w-6 h-6" /> },
    { label: 'Completed', value: projects.filter(p => p.status === 'completed').length, icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'This Month', value: projects.filter(p => new Date(p.createdAt) > new Date(Date.now() - 30 * 86400000)).length, icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your legal documents and deals</p>
        </div>
        <button
          onClick={() => navigate('/new-project/questionnaire')}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className="text-blue-600">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="drafting">Drafting</option>
              <option value="in_review">In Review</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deal Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{project.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{project.clientName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{project.dealType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{project.value}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(project.status)}
                      <span className="text-sm text-gray-600">{getStatusLabel(project.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No projects found</p>
              <button
                onClick={() => navigate('/new-project/questionnaire')}
                className="mt-4 text-blue-600 hover:text-blue-700"
              >
                Create your first project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;