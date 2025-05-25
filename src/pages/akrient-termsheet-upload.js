import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, AlertCircle, CheckCircle, Loader, ArrowRight } from 'lucide-react';

const TermSheetUpload = ({ currentProject }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [extractedTerms, setExtractedTerms] = useState(null);
  const [error, setError] = useState('');

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf' || 
          selectedFile.type === 'application/msword' ||
          selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
        setError('');
      } else {
        setError('Please upload a PDF or Word document');
        setFile(null);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type === 'application/pdf' || 
          droppedFile.type === 'application/msword' ||
          droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(droppedFile);
        setError('');
      } else {
        setError('Please upload a PDF or Word document');
        setFile(null);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const processTermSheet = async () => {
    setUploading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Mock extracted terms
      const mockExtractedTerms = {
        purchasePrice: '$45,000,000',
        closingDate: '2024-03-15',
        escrowAmount: '$4,500,000',
        escrowPeriod: '18 months',
        workingCapitalTarget: '$8,000,000',
        parties: {
          buyer: 'Acme Acquisition Corp.',
          seller: 'Target Company LLC',
          sellerReps: ['John Doe', 'Jane Smith']
        },
        conditions: [
          'Regulatory approval from FTC',
          'Third-party consents',
          'Key employee retention agreements',
          'No Material Adverse Change'
        ],
        indemnification: {
          cap: '10% of Purchase Price',
          basket: '$450,000',
          survivalPeriod: '18 months for general reps'
        }
      };
      
      setExtractedTerms(mockExtractedTerms);
      setUploading(false);
    }, 3000);
  };

  const handleProceed = () => {
    // Save extracted terms to project
    const updatedProject = {
      ...currentProject,
      termSheet: {
        fileName: file.name,
        extractedTerms: extractedTerms,
        uploadedAt: new Date().toISOString()
      },
      status: 'drafting'
    };
    
    // In a real app, you'd save this to a backend
    // For now, we'll use localStorage
    const existingProjects = JSON.parse(localStorage.getItem('akrient_projects') || '[]');
    const projectIndex = existingProjects.findIndex(p => p.id === currentProject.id);
    
    if (projectIndex === -1) {
      existingProjects.push(updatedProject);
    } else {
      existingProjects[projectIndex] = updatedProject;
    }
    
    localStorage.setItem('akrient_projects', JSON.stringify(existingProjects));
    
    navigate(`/project/${currentProject.id}/editor`);
  };

  const handleSkip = () => {
    navigate(`/project/${currentProject.id}/editor`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Upload Term Sheet</h2>
        
        {!file && !extractedTerms && (
          <div>
            <p className="text-gray-600 mb-6">
              Upload your term sheet and Akrient will automatically extract key terms and populate your agreement.
              You can also skip this step and proceed directly to the document editor.
            </p>

            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Drop your term sheet here</p>
              <p className="text-sm text-gray-500 mb-4">or</p>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                />
                <span className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                  Browse Files
                </span>
              </label>
              <p className="text-sm text-gray-500 mt-4">Supports PDF and Word documents</p>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleSkip}
                className="text-gray-600 hover:text-gray-800"
              >
                Skip this step
              </button>
            </div>
          </div>
        )}

        {file && !extractedTerms && !uploading && (
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-4">
                <FileText className="w-12 h-12 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setFile(null)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={processTermSheet}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                Process Term Sheet <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {uploading && (
          <div className="text-center py-12">
            <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Processing Term Sheet...</p>
            <p className="text-gray-600">Using AI to extract key terms and conditions</p>
          </div>
        )}

        {extractedTerms && (
          <div>
            <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-700">Successfully extracted terms from your term sheet</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Key Terms Extracted:</h3>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Purchase Price</p>
                      <p className="font-medium">{extractedTerms.purchasePrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Closing Date</p>
                      <p className="font-medium">{extractedTerms.closingDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Escrow Amount</p>
                      <p className="font-medium">{extractedTerms.escrowAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Working Capital Target</p>
                      <p className="font-medium">{extractedTerms.workingCapitalTarget}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Parties:</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Buyer:</span> <span className="font-medium">{extractedTerms.parties.buyer}</span></p>
                    <p><span className="text-gray-600">Seller:</span> <span className="font-medium">{extractedTerms.parties.seller}</span></p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Closing Conditions:</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-1">
                    {extractedTerms.conditions.map((condition, index) => (
                      <li key={index} className="text-gray-700">{condition}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-end">
              <button
                onClick={() => {
                  setExtractedTerms(null);
                  setFile(null);
                }}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Upload Different File
              </button>
              <button
                onClick={handleProceed}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                Proceed to Document Editor <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermSheetUpload;