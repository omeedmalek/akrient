import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, Download, Eye, Plus, Search, AlertCircle, CheckCircle, FileText, Settings, Send } from 'lucide-react';

const DocumentEditor = ({ currentProject }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [document, setDocument] = useState('');
  const [showClauseLibrary, setShowClauseLibrary] = useState(false);
  const [selectedClauses, setSelectedClauses] = useState([]);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');

  // Sample clause library
  const clauseLibrary = [
    {
      id: '1',
      category: 'Purchase Price',
      title: 'Purchase Price Adjustment',
      content: 'The Purchase Price shall be subject to adjustment based on the difference between the Target Working Capital and the Estimated Working Capital as of the Closing Date.',
      recommended: true
    },
    {
      id: '2',
      category: 'Representations',
      title: 'Seller Representations and Warranties',
      content: 'The Seller represents and warrants to the Buyer that the statements contained in this Article are true and correct as of the date of this Agreement and as of the Closing Date.',
      recommended: true
    },
    {
      id: '3',
      category: 'Indemnification',
      title: 'Indemnification by Seller',
      content: 'Subject to the terms and conditions of this Article, the Seller shall indemnify and hold harmless the Buyer from and against any and all losses arising out of any breach of any representation or warranty of the Seller.',
      recommended: false
    },
    {
      id: '4',
      category: 'Closing Conditions',
      title: 'Conditions to Buyer\'s Obligations',
      content: 'The obligations of the Buyer to consummate the transactions contemplated by this Agreement are subject to the satisfaction of the following conditions...',
      recommended: true
    },
    {
      id: '5',
      category: 'Covenants',
      title: 'Conduct of Business',
      content: 'From the date hereof until the Closing, except as otherwise provided in this Agreement or consented to in writing by Buyer, Seller shall conduct the Business in the ordinary course.',
      recommended: false
    }
  ];

  useEffect(() => {
    // Load or generate document content
    generateInitialDocument();
  }, []);

  const generateInitialDocument = () => {
    const baseDocument = `ASSET PURCHASE AGREEMENT

This ASSET PURCHASE AGREEMENT (this "Agreement") is entered into as of [DATE], by and between:

BUYER: ${currentProject?.questionnaire?.clientName || '[BUYER NAME]'}, a ${currentProject?.questionnaire?.targetJurisdiction || '[STATE]'} corporation ("Buyer"), and

SELLER: [SELLER NAME], a [STATE] limited liability company ("Seller").

RECITALS

WHEREAS, Seller owns and operates [BUSINESS DESCRIPTION] (the "Business"); and

WHEREAS, Seller desires to sell to Buyer, and Buyer desires to purchase from Seller, substantially all of the assets of the Business, subject to the terms and conditions set forth herein.

NOW, THEREFORE, in consideration of the mutual covenants and agreements hereinafter set forth and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties hereto agree as follows:

ARTICLE I
PURCHASE AND SALE

Section 1.1 Purchase and Sale of Assets. Subject to the terms and conditions set forth herein, at the Closing, Seller shall sell, convey, transfer, assign and deliver to Buyer, and Buyer shall purchase from Seller, free and clear of all Encumbrances, all of Seller's right, title and interest in and to all of the assets, properties and rights of every kind and nature, whether real, personal or mixed, tangible or intangible, wherever located and whether now existing or hereafter acquired (other than the Excluded Assets), which relate to, or are used or held for use in connection with, the Business (collectively, the "Purchased Assets").

Section 1.2 Excluded Assets. Notwithstanding the foregoing, the Purchased Assets shall not include the following assets (collectively, the "Excluded Assets"):
(a) Cash and cash equivalents;
(b) The corporate books and records of Seller;
(c) The assets set forth on Schedule 1.2.

ARTICLE II
PURCHASE PRICE

Section 2.1 Purchase Price. The aggregate purchase price for the Purchased Assets shall be ${currentProject?.termSheet?.extractedTerms?.purchasePrice || '[PURCHASE PRICE]'} (the "Purchase Price").

Section 2.2 Payment at Closing. At the Closing, Buyer shall pay to Seller the Purchase Price by wire transfer of immediately available funds to an account designated in writing by Seller.

[Additional sections to be added based on deal structure and requirements...]`;

    setDocument(baseDocument);
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      // In a real app, save to backend
    }, 1000);
  };

  const handleAddClause = (clause) => {
    const newClauseText = `\n\n${clause.title.toUpperCase()}\n${clause.content}\n`;
    setDocument(document + newClauseText);
    setSelectedClauses([...selectedClauses, clause.id]);
  };

  const handleReview = () => {
    // Navigate to signing hub
    navigate(`/project/${id}/signing`);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">{currentProject?.name || 'Untitled Document'}</h1>
          {saving && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button 
            onClick={handleReview}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Send className="w-4 h-4" />
            Send for Review
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Document Editor */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="bg-gray-50 border-b flex gap-4 px-6">
            <button
              onClick={() => setActiveTab('edit')}
              className={`py-3 px-4 border-b-2 font-medium transition ${
                activeTab === 'edit' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Edit
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`py-3 px-4 border-b-2 font-medium transition ${
                activeTab === 'preview' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`py-3 px-4 border-b-2 font-medium transition ${
                activeTab === 'review' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <CheckCircle className="w-4 h-4 inline mr-2" />
              AI Review
            </button>
          </div>

          {/* Editor Area */}
          <div className="flex-1 p-6 overflow-auto">
            {activeTab === 'edit' && (
              <textarea
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                className="w-full h-full p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Start typing your agreement..."
              />
            )}
            
            {activeTab === 'preview' && (
              <div className="bg-white p-8 max-w-4xl mx-auto rounded-lg shadow-sm">
                <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed">
                  {document}
                </pre>
              </div>
            )}

            {activeTab === 'review' && (
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">AI Document Review</p>
                    <p className="text-sm text-blue-700 mt-1">
                      The AI has identified 3 potential issues and 5 suggestions for improvement.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-semibold mb-4">Review Summary</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Missing Clause: Dispute Resolution</p>
                        <p className="text-sm text-gray-600">Consider adding an arbitration or litigation clause.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Purchase Price Terms: Complete</p>
                        <p className="text-sm text-gray-600">All required pricing elements are present.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Clause Library Sidebar */}
        <div className={`bg-gray-50 border-l transition-all ${showClauseLibrary ? 'w-96' : 'w-12'}`}>
          <button
            onClick={() => setShowClauseLibrary(!showClauseLibrary)}
            className="w-full p-3 hover:bg-gray-100 flex items-center justify-center"
          >
            {showClauseLibrary ? (
              <span className="text-sm font-medium">Hide Clause Library</span>
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>

          {showClauseLibrary && (
            <div className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search clauses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-3">
                {clauseLibrary.map((clause) => (
                  <div
                    key={clause.id}
                    className={`bg-white p-4 rounded-lg border ${
                      selectedClauses.includes(clause.id) 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-sm">{clause.title}</h4>
                        <p className="text-xs text-gray-500">{clause.category}</p>
                      </div>
                      {clause.recommended && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{clause.content}</p>
                    <button
                      onClick={() => handleAddClause(clause)}
                      disabled={selectedClauses.includes(clause.id)}
                      className={`w-full text-xs py-2 rounded ${
                        selectedClauses.includes(clause.id)
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {selectedClauses.includes(clause.id) ? 'Added' : 'Add to Document'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentEditor;