import React, { useState, useMemo } from 'react';
import { clauses, clauseStats } from '../data/clauseLibraryData';

const ClauseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedClause, setExpandedClause] = useState(null);

  // Filter clauses based on search term only (no category filter)
  const filteredClauses = useMemo(() => {
    if (searchTerm === '') return clauses;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return clauses.filter(clause => 
      clause.name.toLowerCase().includes(lowerSearchTerm) ||
      clause.definition.toLowerCase().includes(lowerSearchTerm) ||
      clause.scenario.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Statistics */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Akrient Comprehensive Clause Library
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The most extensive AI-powered legal clause repository in the industry
          </p>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600">{clauseStats.totalClauses}</p>
              <p className="text-sm text-gray-700">Unique Clause Types</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600">{clauseStats.categories}</p>
              <p className="text-sm text-gray-700">Major Categories</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-purple-600">{clauseStats.precedentDocs}</p>
              <p className="text-sm text-gray-700">Precedent Documents</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-orange-600">{clauseStats.accuracyRate}</p>
              <p className="text-sm text-gray-700">Accuracy Rate</p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="max-w-2xl mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Clauses
            </label>
            <input
              type="text"
              placeholder="Search by name, definition, or scenario..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mt-3 text-sm text-gray-600">
              Showing {filteredClauses.length} of {clauses.length} clauses
            </div>
          </div>
        </div>

        {/* All Clauses Display */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Clause Library
          </h2>
          
          <div className="space-y-4">
            {filteredClauses.map((clause, index) => (
              <div
                key={clause.id}
                className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setExpandedClause(expandedClause === clause.id ? null : clause.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          #{index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {clause.name}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {clause.definition}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 mt-1">
                      <svg
                        className={`w-5 h-5 text-gray-400 transform transition-transform ${
                          expandedClause === clause.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Scenario */}
                {expandedClause === clause.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Real-World Scenario:</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {clause.scenario}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-blue-600 rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Legal Practice?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            With 192 comprehensive clause types covering every aspect of corporate law, 
            Akrient's AI-powered platform can help you draft complex agreements 10x faster 
            while ensuring nothing is overlooked.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClauseLibrary;
