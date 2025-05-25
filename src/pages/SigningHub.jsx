import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Send, Users, CheckCircle, Clock, AlertCircle, MessageSquare, Volume2, Download, ArrowLeft } from 'lucide-react';

const SigningHub = ({ currentProject }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [signers, setSigners] = useState([
    { id: '1', name: 'John Doe', email: 'john@buyercorp.com', role: 'Buyer Representative', status: 'pending' },
    { id: '2', name: 'Jane Smith', email: 'jane@sellercorp.com', role: 'Seller Representative', status: 'pending' },
    { id: '3', name: 'Michael Johnson', email: 'mjohnson@legalcounsel.com', role: 'Legal Counsel', status: 'pending' }
  ]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSendForSignature = () => {
    // In a real app, this would send emails to all signers
    alert('Document sent for signature to all parties!');
    setSigners(signers.map(s => ({ ...s, status: 'sent' })));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now().toString(),
        author: 'Current User',
        text: newComment,
        timestamp: new Date().toISOString()
      }]);
      setNewComment('');
    }
  };

  const handleVoiceExplanation = () => {
    // In a real app, this would use text-to-speech
    alert('Voice explanation feature would explain the selected section of the document.');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/project/${id}/editor`)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">{currentProject?.name || 'Document'} - Signing Hub</h1>
            <p className="text-gray-600">Manage signatures and document execution</p>
          </div>
        </div>
        <button
          onClick={handleSendForSignature}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Send className="w-5 h-5" />
          Send for Signature
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b flex">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'overview'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('signers')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'signers'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Signers
          </button>
          <button
            onClick={() => setActiveTab('document')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'document'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Document
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'comments'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Comments
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Total Signers</span>
                  </div>
                  <p className="text-2xl font-bold">{signers.length}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium">Pending</span>
                  </div>
                  <p className="text-2xl font-bold">{signers.filter(s => s.status === 'pending').length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Signed</span>
                  </div>
                  <p className="text-2xl font-bold">{signers.filter(s => s.status === 'signed').length}</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Signing Process Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Real-time signature tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Voice explanations for complex terms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Document integrity validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Amendment proposals before signing
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'signers' && (
            <div className="space-y-4">
              {signers.map((signer) => (
                <div key={signer.id} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{signer.name}</h4>
                    <p className="text-sm text-gray-600">{signer.email}</p>
                    <p className="text-sm text-gray-500">{signer.role}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {signer.status === 'pending' && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                        Not Sent
                      </span>
                    )}
                    {signer.status === 'sent' && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                        Awaiting Signature
                      </span>
                    )}
                    {signer.status === 'signed' && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Signed
                      </span>
                    )}
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Send Reminder
                    </button>
                  </div>
                </div>
              ))}
              
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                + Add Signer
              </button>
            </div>
          )}

          {activeTab === 'document' && (
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">Voice Explanation Available</p>
                    <p className="text-sm text-gray-600">
                      Highlight any section to hear an AI explanation of complex terms
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleVoiceExplanation}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                >
                  Try Demo
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 h-96 overflow-auto">
                <pre className="whitespace-pre-wrap font-serif text-sm">
{`ASSET PURCHASE AGREEMENT

This agreement contains the final terms for the acquisition...

[Document content would be displayed here with highlighting capabilities]

Section 2.1 Purchase Price: The total consideration shall be...

Section 3.1 Closing Conditions: The following conditions must be met...`}
                </pre>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                  Propose Amendment
                </button>
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment or question..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                  rows="3"
                />
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={handleAddComment}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Post Comment
                  </button>
                </div>
              </div>

              {comments.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No comments yet. Be the first to add one!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))}
))}
               </div>
             )}
           </div>
         )}
       </div>
     </div>
   </div>
 );
};

export default SigningHub;
