import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Info, Building2, DollarSign, FileText, Globe } from 'lucide-react';

const QuestionnaireStep = ({ setCurrentProject }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firmRepresents: '',
    buyerCharacteristics: [],
    sellerCharacteristics: [],
    consideration: '',
    structure: '',
    targetType: '',
    targetJurisdiction: '',
    significantCountries: [],
    foreignBuyer: '',
    foreignSeller: '',
    signingDateRange: { start: '', end: '' },
    // Deal characteristics
    isAuction: null,
    isBankruptcy: null,
    isCarveout: null,
    isDistressed: null,
    hasMultipleClosings: null,
    // Parties and drafts
    leadPartner: '',
    opposingCounsel: '',
    clientName: '',
    investmentBanker: '',
    isFirstDraftByUs: null,
    // Industry
    industry: '',
    // Price adjustments
    hasPurchasePriceAdjustment: null,
    hasEscrow: null,
    hasRollover: null,
    hasEarnout: null,
    // Closing and termination
    isSimultaneousSignClose: null,
    hasReverseTerminationFee: null,
    hasRWI: null
  });

  const steps = [
    { title: "General Information", icon: <Building2 className="w-5 h-5" /> },
    { title: "Deal Structure", icon: <FileText className="w-5 h-5" /> },
    { title: "Jurisdictions", icon: <Globe className="w-5 h-5" /> },
    { title: "Deal Characteristics", icon: <Info className="w-5 h-5" /> },
    { title: "Parties & Pricing", icon: <DollarSign className="w-5 h-5" /> }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and create project
      const project = {
        id: Date.now().toString(),
        name: `${formData.clientName} - ${formData.structure || 'M&A Deal'}`,
        createdAt: new Date().toISOString(),
        questionnaire: formData,
        status: 'questionnaire_complete'
      };
      setCurrentProject(project);
      navigate('/new-project/term-sheet');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // General Information
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Firm Represents *
              </label>
              <select
                value={formData.firmRepresents}
                onChange={(e) => handleInputChange('firmRepresents', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="buyer">Buyer (Controlling interest)</option>
                <option value="seller">Seller (Controlling interest)</option>
                <option value="co-investor-buyer">Co-investor part of Buyer Group</option>
                <option value="co-investor-seller">Co-investor part of Seller Group</option>
                <option value="financial-advisor">Financial Advisor</option>
                <option value="management">Management</option>
                <option value="merger-equals">Merger of Equals</option>
                <option value="special-committee">Special Committee</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buyer Characteristics
              </label>
              <div className="space-y-2">
                {['PE Buyer (Platform)', 'Portfolio Add-on', 'Public Company Buyer', 'Private Company Buyer', 'SPAC Buyer'].map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.buyerCharacteristics.includes(option)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('buyerCharacteristics', [...formData.buyerCharacteristics, option]);
                        } else {
                          handleInputChange('buyerCharacteristics', formData.buyerCharacteristics.filter(item => item !== option));
                        }
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seller Characteristics
              </label>
              <div className="space-y-2">
                {['Private Company Target', 'Public Company Target', 'PE Seller', 'Government Entity', 'Trust'].map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.sellerCharacteristics.includes(option)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('sellerCharacteristics', [...formData.sellerCharacteristics, option]);
                        } else {
                          handleInputChange('sellerCharacteristics', formData.sellerCharacteristics.filter(item => item !== option));
                        }
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 1: // Deal Structure
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Consideration Type *
              </label>
              <select
                value={formData.consideration}
                onChange={(e) => handleInputChange('consideration', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="cash">Cash</option>
                <option value="stock">Stock/Equity</option>
                <option value="promissory-note">Promissory Note</option>
                <option value="warrant">Warrant</option>
                <option value="mixed">Mixed Consideration</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Structure *
              </label>
              <select
                value={formData.structure}
                onChange={(e) => handleInputChange('structure', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="asset-all">Asset Purchase (All or Substantially All)</option>
                <option value="asset-partial">Asset Purchase (Partial)</option>
                <option value="stock-purchase">Stock/Equity Purchase</option>
                <option value="merger-forward">Merger - Forward</option>
                <option value="merger-reverse-triangular">Merger - Reverse Triangular</option>
                <option value="merger-double-dummy">Merger - Double Dummy</option>
                <option value="tender-offer">Tender Offer</option>
                <option value="363-apa">363 Asset Purchase</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Entity Type
              </label>
              <select
                value={formData.targetType}
                onChange={(e) => handleInputChange('targetType', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="c-corp">C Corporation</option>
                <option value="s-corp">S Corporation</option>
                <option value="llc">LLC</option>
                <option value="lp">Limited Partnership</option>
                <option value="gp">General Partnership</option>
                <option value="public-benefit">Public Benefit Corporation</option>
              </select>
            </div>
          </div>
        );

      case 2: // Jurisdictions
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Jurisdiction *
              </label>
              <select
                value={formData.targetJurisdiction}
                onChange={(e) => handleInputChange('targetJurisdiction', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <optgroup label="United States">
                  <option value="us-de">Delaware</option>
                  <option value="us-ny">New York</option>
                  <option value="us-ca">California</option>
                  <option value="us-tx">Texas</option>
                  <option value="us-il">Illinois</option>
                  <option value="us-ma">Massachusetts</option>
                </optgroup>
                <optgroup label="International">
                  <option value="int-uk">United Kingdom</option>
                  <option value="int-ca">Canada</option>
                  <option value="int-au">Australia</option>
                  <option value="int-de">Germany</option>
                  <option value="int-fr">France</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foreign Buyer Country (if applicable)
              </label>
              <select
                value={formData.foreignBuyer}
                onChange={(e) => handleInputChange('foreignBuyer', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">No Foreign Buyer</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
                <option value="australia">Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foreign Seller Country (if applicable)
              </label>
              <select
                value={formData.foreignSeller}
                onChange={(e) => handleInputChange('foreignSeller', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">No Foreign Seller</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
                <option value="australia">Australia</option>
              </select>
            </div>
          </div>
        );

      case 3: // Deal Characteristics
        return (
          <div className="space-y-6">
            <h3 className="font-medium text-gray-900">Deal Characteristics</h3>
            
            {[
              { field: 'isAuction', label: 'Auction Process?' },
              { field: 'isBankruptcy', label: 'Bankruptcy Deal?' },
              { field: 'isCarveout', label: 'Carveout Transaction?' },
              { field: 'isDistressed', label: 'Distressed M&A?' },
              { field: 'hasMultipleClosings', label: 'Multiple Closings?' }
            ].map(({ field, label }) => (
              <div key={field} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{label}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleInputChange(field, true)}
                    className={`px-4 py-2 rounded ${formData[field] === true ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange(field, false)}
                    className={`px-4 py-2 rounded ${formData[field] === false ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange(field, null)}
                    className={`px-4 py-2 rounded ${formData[field] === null ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    N/A
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 4: // Parties & Pricing
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Name *
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter client name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lead Partner
              </label>
              <input
                type="text"
                value={formData.leadPartner}
                onChange={(e) => handleInputChange('leadPartner', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter lead partner name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="consumer">Consumer Products/B2C</option>
                <option value="financial">Financial Services/Fintech</option>
                <option value="industrial">Industrial/B2B</option>
                <option value="energy">Energy, Real Estate, Transportation</option>
                <option value="healthcare">Healthcare/Biotech</option>
                <option value="media">Media, Entertainment & Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>

            <h3 className="font-medium text-gray-900 mt-6">Pricing & Terms</h3>
            
            {[
              { field: 'hasEarnout', label: 'Earnout?' },
              { field: 'hasEscrow', label: 'Escrow/Holdback?' },
              { field: 'hasRollover', label: 'Rollover?' },
              { field: 'isSimultaneousSignClose', label: 'Simultaneous Sign/Close?' },
              { field: 'hasRWI', label: 'Rep & Warranty Insurance?' }
            ].map(({ field, label }) => (
              <div key={field} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{label}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleInputChange(field, true)}
                    className={`px-4 py-2 rounded ${formData[field] === true ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange(field, false)}
                    className={`px-4 py-2 rounded ${formData[field] === false ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Progress Bar */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">M&A Deal Questionnaire</h2>
            <span className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</span>
          </div>
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex-1">
                <div className={`h-2 rounded ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className="mt-2 flex items-center gap-2">
                  <div className={`${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step.icon}
                  </div>
                  <span className={`text-xs ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="p-6 border-t flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
              currentStep === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-5 h-5" /> Back
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireStep;