import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Select } from '../components/ui/Select';
import { Progress } from '../components/ui/Progress';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const MAPEQuestionnaire = ({ setCurrentProject }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  
  // Initialize form data with all fields from the M&A/PE form
  const [formData, setFormData] = useState({
    // General Section
    firmRepresents: '',
    
    // Buyer Characteristics
    buyerCharacteristics: {
      peBuyer: false,
      portfolioAddOn: false,
      noPEBuyer: false,
      publicCompanyBuyer: false,
      privateCompanyBuyer: false,
      spacBuyer: false,
      noSpacBuyer: false,
      buyerIsGovernmentEntity: false,
      buyerGroupStrategic: false,
      buyerGroupPEStrategic: false,
      buyerGroupPE: false,
      noBuyerGroup: false
    },
    peBuyersList: [],
    
    // Seller Characteristics
    sellerCharacteristics: {
      sellerIsGovernmentEntity: false,
      sellerIsNotGovernmentEntity: false,
      privateCompanyTarget: false,
      publicCompanySeller: false,
      publicCompanyTarget: false,
      noPESeller: false,
      peSeller: false,
      noSellerGroup: false,
      sellerGroupPE: false,
      sellerGroupPEStrategic: false,
      sellerGroupStrategic: false,
      sellerIsTrust: false,
      sellerIsNotTrust: false
    },
    peSellersList: [],
    
    // Deal Structure
    consideration: [],
    structure: [],
    numberOfBlockers: { min: '', max: '' },
    targetType: [],
    targetJurisdiction: [],
    significantCountry: '',
    foreignBuyer: '',
    foreignSeller: '',
    signingDate: { start: '', end: '' },
    
    // Deal Characteristics
    auction: '',
    bankruptcyDeal: '',
    carveoutTransaction: '',
    distressedMA: '',
    financingBank: '',
    financingHighYield: '',
    goingPrivate: '',
    goingPrivate13e3: '',
    multipleClosings: '',
    preClosingSale: '',
    saleOfSubsidiary: '',
    secondaryPurchase: '',
    unsolicitedTransaction: '',
    activismAgainstMerger: '',
    
    // Parties and Drafts
    leadPartner: '',
    opposingCounsel: '',
    coCounsel: '',
    clientNumber: '',
    matterNumber: '',
    clientName: '',
    investmentBanker: '',
    firstDraftByFirm: '',
    
    // Industry
    industry: '',
    specificIndustries: [],
    
    // Purchase Price and Terms
    purchasePrice: { min: '', max: '' },
    workingCapitalAdjustment: '',
    escrowHoldback: '',
    rollover: '',
    earnout: '',
    earnoutMetric: [],
    accelerationOnChange: '',
    covenants: [],
    earnoutExplicitlyOffset: '',
    
    // Closing and Termination
    simultaneousSignClose: '',
    reverseTerminationFee: [],
    feeExclusive: '',
    specificPerformance: '',
    liabilityForWillfulBreach: '',
    fullEquityBackstop: '',
    limitedGuaranty: '',
    
    // Deal Outcomes
    dealTerminatedSuperiorProposal: '',
    dealTerminatedFinancing: '',
    dealTerminatedOther: '',
    terminationFeePaid: '',
    reverseTerminationFeePaid: '',
    
    // Indemnification and Insurance
    postClosingIndemnification: '',
    repWarrantyInsurance: ''
  });

  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleCheckboxChange = (section, field) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field]
      }
    }));
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => {
      const currentArray = prev[field] || [];
      if (currentArray.includes(value)) {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentArray, value] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save project with M&A/PE type
      const project = {
        id: Date.now().toString(),
        type: 'ma-pe',
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'questionnaire-complete'
      };
      setCurrentProject(project);
      navigate('/new-project/term-sheet');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // PE Firms list (abbreviated for space - you'll add all firms)
  const peFirms = [
    '20 South Partners', '22C Capital', '2M Investments', 'A&M Capital Partners',
    'ABRY Partners', 'ATW Partners', 'Abrams Capital', 'Achieve Partners',
    'Apollo', 'Ares', 'Bain Capital', 'Blackstone', 'Carlyle Group',
    'KKR', 'TPG', 'Warburg Pincus'
    // Add all other PE firms from the document
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">General Information</h2>
            
            <div>
              <Label htmlFor="firmRepresents">Firm Represents</Label>
              <Select
                id="firmRepresents"
                value={formData.firmRepresents}
                onChange={(e) => handleInputChange(null, 'firmRepresents', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="buyer">Buyer (controlling interest)</option>
                <option value="seller">Seller (controlling interest)</option>
                <option value="co-investor-buyer">Co-investor part of Buyer Group</option>
                <option value="co-investor-seller">Co-investor part of Seller Group</option>
                <option value="financial-advisor">Financial Advisor</option>
                <option value="management">Management</option>
                <option value="merger-equals">Merger of Equals</option>
                <option value="affiliate">Affiliate Transaction</option>
                <option value="issuer">Issuer</option>
                <option value="shareholders">Shareholders</option>
                <option value="special-committee">Special Committee</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div>
              <Label>Buyer Characteristics</Label>
              <div className="space-y-2 mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.buyerCharacteristics.peBuyer}
                    onChange={() => handleCheckboxChange('buyerCharacteristics', 'peBuyer')}
                    className="mr-2"
                  />
                  PE Buyer (Platform)
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.buyerCharacteristics.publicCompanyBuyer}
                    onChange={() => handleCheckboxChange('buyerCharacteristics', 'publicCompanyBuyer')}
                    className="mr-2"
                  />
                  Public Company Buyer
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.buyerCharacteristics.privateCompanyBuyer}
                    onChange={() => handleCheckboxChange('buyerCharacteristics', 'privateCompanyBuyer')}
                    className="mr-2"
                  />
                  Private Company Buyer
                </label>
                {/* Add all other buyer characteristics */}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">PE Firms Selection</h2>
            
            <div>
              <Label>Select PE Buyers (if applicable)</Label>
              <div className="grid grid-cols-2 gap-2 mt-2 max-h-96 overflow-y-auto border rounded p-4">
                {peFirms.map(firm => (
                  <label key={firm} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.peBuyersList.includes(firm)}
                      onChange={() => handleArrayChange('peBuyersList', firm)}
                      className="mr-2"
                    />
                    {firm}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Deal Structure</h2>
            
            <div>
              <Label>Consideration Type</Label>
              <div className="space-y-2 mt-2">
                {['Cash', 'Promissory Note', 'Stock/Equity', 'Warrant'].map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.consideration.includes(type)}
                      onChange={() => handleArrayChange('consideration', type)}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Structure</Label>
              <div className="space-y-2 mt-2">
                {[
                  '363 APA',
                  'Asset (All or Substantially All)',
                  'Asset (Partial)',
                  'Merger - Forward',
                  'Merger - Reverse Triangular',
                  'Stock/Equity'
                ].map(structure => (
                  <label key={structure} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.structure.includes(structure)}
                      onChange={() => handleArrayChange('structure', structure)}
                      className="mr-2"
                    />
                    {structure}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Target Information</h2>
            
            <div>
              <Label>Target Type (Domestic Only)</Label>
              <div className="space-y-2 mt-2">
                {[
                  'C Corp',
                  'LLC',
                  'LP',
                  'S Corp',
                  'Public Benefit Corporation'
                ].map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.targetType.includes(type)}
                      onChange={() => handleArrayChange('targetType', type)}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Target Jurisdiction</Label>
              <Select
                value={formData.targetJurisdiction[0] || ''}
                onChange={(e) => handleInputChange(null, 'targetJurisdiction', [e.target.value])}
              >
                <option value="">-- Select --</option>
                <option value="Delaware">Delaware</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Texas">Texas</option>
                {/* Add all other states */}
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Purchase Price & Terms</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minPrice">Minimum Purchase Price ($)</Label>
                <Input
                  id="minPrice"
                  type="number"
                  value={formData.purchasePrice.min}
                  onChange={(e) => handleInputChange('purchasePrice', 'min', e.target.value)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="maxPrice">Maximum Purchase Price ($)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  value={formData.purchasePrice.max}
                  onChange={(e) => handleInputChange('purchasePrice', 'max', e.target.value)}
                  placeholder="999999999"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="workingCapital">Working Capital Adjustment</Label>
              <Select
                id="workingCapital"
                value={formData.workingCapitalAdjustment}
                onChange={(e) => handleInputChange(null, 'workingCapitalAdjustment', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="collar">Yes (collar adjustment)</option>
                <option value="traditional">Yes (traditional adjustment)</option>
                <option value="locked-box">Locked box</option>
                <option value="no">No (other than locked box)</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="earnout">Earnout</Label>
              <Select
                id="earnout"
                value={formData.earnout}
                onChange={(e) => handleInputChange(null, 'earnout', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>

            {formData.earnout === 'yes' && (
              <div>
                <Label>Earnout Metrics</Label>
                <div className="space-y-2 mt-2">
                  {[
                    'EBITDA/Income',
                    'Revenue',
                    'Milestone - Regulatory',
                    'Milestone - Business Performance'
                  ].map(metric => (
                    <label key={metric} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.earnoutMetric.includes(metric)}
                        onChange={() => handleArrayChange('earnoutMetric', metric)}
                        className="mr-2"
                      />
                      {metric}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Deal Characteristics</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="auction">Auction</Label>
                <Select
                  id="auction"
                  value={formData.auction}
                  onChange={(e) => handleInputChange(null, 'auction', e.target.value)}
                >
                  <option value="">-- Select --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="na">N/A</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="distressed">Distressed M&A</Label>
                <Select
                  id="distressed"
                  value={formData.distressedMA}
                  onChange={(e) => handleInputChange(null, 'distressedMA', e.target.value)}
                >
                  <option value="">-- Select --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="na">N/A</option>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="signClose">Simultaneous Sign/Close?</Label>
              <Select
                id="signClose"
                value={formData.simultaneousSignClose}
                onChange={(e) => handleInputChange(null, 'simultaneousSignClose', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Indemnification & Insurance</h2>
            
            <div>
              <Label htmlFor="indemnification">Post-Closing Indemnification</Label>
              <Select
                id="indemnification"
                value={formData.postClosingIndemnification}
                onChange={(e) => handleInputChange(null, 'postClosingIndemnification', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="fundamental-only">Yes, but only for Fundamental Representations</option>
                <option value="special-only">Yes, but only special indemnities</option>
                <option value="no">No</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="rwi">Rep & Warranty Insurance?</Label>
              <Select
                id="rwi"
                value={formData.repWarrantyInsurance}
                onChange={(e) => handleInputChange(null, 'repWarrantyInsurance', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unknown">Unknown</option>
              </Select>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Review Your Inputs</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Summary</h3>
              <div className="space-y-2">
                <p><strong>Firm Represents:</strong> {formData.firmRepresents || 'Not specified'}</p>
                <p><strong>Structure:</strong> {formData.structure.join(', ') || 'Not specified'}</p>
                <p><strong>Purchase Price Range:</strong> ${formData.purchasePrice.min || '0'} - ${formData.purchasePrice.max || 'Not specified'}</p>
                <p><strong>Earnout:</strong> {formData.earnout || 'Not specified'}</p>
                <p><strong>RWI:</strong> {formData.repWarrantyInsurance || 'Not specified'}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Next Step:</strong> After completing this questionnaire, you'll be prompted to upload the term sheet for AI-powered document generation.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">M&A / PE Transaction Questionnaire</h1>
          <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
          <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
        </div>
        
        {renderStep()}
        
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button onClick={handleNext}>
            {currentStep === totalSteps ? 'Complete Questionnaire' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MAPEQuestionnaire;
