import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Select } from '../components/Select';
import { Progress } from '../components/Progress';
import { ChevronRight, ChevronLeft, Save } from 'lucide-react';
import {
  PE_BUYERS_LIST,
  PE_SELLERS_LIST,
  US_STATES,
  INTERNATIONAL_JURISDICTIONS,
  TARGET_TYPES,
  STRUCTURE_OPTIONS,
  CONSIDERATION_OPTIONS,
  EARNOUT_METRICS,
  INDUSTRIES,
  INDUSTRY_SUBCATEGORIES
} from '../data/questionnaireConstants';

const JointVenturesQuestionnaire = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // General Section
    firmRepresents: '',
    buyerCharacteristics: [],
    selectedPEBuyers: [],
    sellerCharacteristics: [],
    selectedPESellers: [],
    consideration: [],
    structure: [],
    structureSelectType: 'any',
    numberOfBlockersMin: '',
    numberOfBlockersMax: '',
    targetTypeDomestic: [],
    targetJurisdictionDomestic: [],
    targetJurisdictionInternational: [],
    significantCountry: '',
    foreignBuyer: '',
    foreignSeller: '',
    signingDateStart: '',
    signingDateEnd: '',
    textSearch: '',
    
    // Deal Characteristics (same as MAPE)
    auction: '',
    bankruptcyDeal: '',
    carveoutTransaction: '',
    distressedMA: '',
    financingBank: '',
    financingHighYield: '',
    goingPrivateNot13e3: '',
    goingPrivate13e3: '',
    multipleClosings: '',
    preClosingSaleSpin: '',
    saleOfSubsidiary: '',
    secondaryPurchase: '',
    unsolicitedTransaction: '',
    activismAgainstMerger: '',
    
    // Joint Ventures Specific
    jointVentureStructure: '',
    numberOfJVPartners: { min: '', max: '' },
    jvPercentOwnedByClient: { min: '', max: '' },
    
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
    specificIndustries: {},
    
    // Purchase Price/Adjustment/Rollover/Earnout
    purchasePriceMin: '',
    purchasePriceMax: '',
    workingCapitalAdjustment: '',
    escrowHoldback: '',
    rollover: '',
    earnout: '',
    earnoutMetric: [],
    accelerationOnChangeOfControl: '',
    covenantsPresent: [],
    earnoutExplicitlyOffset: '',
    
    // Closing Conditions
    simultaneousSignClose: '',
    
    // Termination/Remedies
    reverseTerminationFee: [],
    isFeeExclusive: '',
    buyerSpecificPerformance: '',
    liabilityForWillfulBreach: '',
    fullEquityBackstop: '',
    limitedGuaranty: '',
    dealTerminatedSuperiorProposal: '',
    dealTerminatedFinancing: '',
    dealTerminatedOther: '',
    terminationFeePaid: '',
    reverseTerminationFeePaid: '',
    
    // Indemnification
    postClosingIndemnification: '',
    
    // Rep & Warranty Insurance
    repWarrantyInsurance: ''
  });

  const steps = [
    "General Information",
    "Joint Venture Details",
    "Deal Characteristics",
    "Parties & Drafts",
    "Industry",
    "Purchase Price & Terms",
    "Closing & Termination",
    "Indemnification & Insurance"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem('jv_questionnaire_draft', JSON.stringify(formData));
    alert('Draft saved successfully!');
  };

  const handleSubmit = () => {
    console.log('Submitting Joint Ventures questionnaire:', formData);
    navigate('/dashboard');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // General Information
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="firmRepresents">Firm Represents</Label>
              <Select
                value={formData.firmRepresents}
                onChange={(e) => handleInputChange('firmRepresents', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="joint_venturer">Joint Venturer (JV)</option>
              </Select>
            </div>

            <div>
              <Label>Buyer Characteristics</Label>
              <div className="space-y-2 max-h-48 overflow-y-auto border rounded p-2">
                {[
                  "PE Buyer (Platform)",
                  "Portfolio Add-on",
                  "No PE Buyer/Add On",
                  "Public Company Buyer",
                  "Private Company Buyer",
                  "SPAC Buyer",
                  "No SPAC Buyer",
                  "Buyer is a Government Entity",
                  "Buyer Group - Strategic",
                  "Buyer Group - PE/Strategic",
                  "Buyer Group - PE",
                  "No Buyer Group"
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.buyerCharacteristics.includes(option)}
                      onChange={() => handleArrayChange('buyerCharacteristics', option)}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>PE Buyers (Select all that apply)</Label>
              <div className="space-y-2 max-h-48 overflow-y-auto border rounded p-2">
                {PE_BUYERS_LIST.map((firm) => (
                  <label key={firm} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.selectedPEBuyers.includes(firm)}
                      onChange={() => handleArrayChange('selectedPEBuyers', firm)}
                    />
                    <span className="text-sm">{firm}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Consideration</Label>
              <div className="space-y-2">
                {CONSIDERATION_OPTIONS.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.consideration.includes(option)}
                      onChange={() => handleArrayChange('consideration', option)}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Structure</Label>
              <div className="mb-2">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    value="any"
                    checked={formData.structureSelectType === 'any'}
                    onChange={(e) => handleInputChange('structureSelectType', e.target.value)}
                  />
                  <span className="ml-2">ANY checked structure</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="all"
                    checked={formData.structureSelectType === 'all'}
                    onChange={(e) => handleInputChange('structureSelectType', e.target.value)}
                  />
                  <span className="ml-2">ALL checked structures</span>
                </label>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto border rounded p-2">
                {STRUCTURE_OPTIONS.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.structure.includes(option)}
                      onChange={() => handleArrayChange('structure', option)}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Signing Date Range</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  value={formData.signingDateStart}
                  onChange={(e) => handleInputChange('signingDateStart', e.target.value)}
                  placeholder="Start Date"
                />
                <Input
                  type="date"
                  value={formData.signingDateEnd}
                  onChange={(e) => handleInputChange('signingDateEnd', e.target.value)}
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>
        );

      case 1: // Joint Venture Details
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="jointVentureStructure">Joint Venture Structure</Label>
              <Select
                id="jointVentureStructure"
                value={formData.jointVentureStructure}
                onChange={(e) => handleInputChange('jointVentureStructure', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="via_entity">Via Entity</option>
                <option value="via_contract">Via Contract</option>
                <option value="virtual_jv">Virtual Joint Venture</option>
                <option value="strategic_alliance">Strategic Alliance</option>
              </Select>
            </div>

            <div>
              <Label># of JV Partners</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jvPartnersMin">Min</Label>
                  <Input
                    id="jvPartnersMin"
                    type="number"
                    value={formData.numberOfJVPartners.min}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      numberOfJVPartners: { ...prev.numberOfJVPartners, min: e.target.value }
                    }))}
                    placeholder="Minimum partners"
                  />
                </div>
                <div>
                  <Label htmlFor="jvPartnersMax">Max</Label>
                  <Input
                    id="jvPartnersMax"
                    type="number"
                    value={formData.numberOfJVPartners.max}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      numberOfJVPartners: { ...prev.numberOfJVPartners, max: e.target.value }
                    }))}
                    placeholder="Maximum partners"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>JV % Owned by Client</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jvPercentMin">Min %</Label>
                  <Input
                    id="jvPercentMin"
                    type="number"
                    value={formData.jvPercentOwnedByClient.min}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      jvPercentOwnedByClient: { ...prev.jvPercentOwnedByClient, min: e.target.value }
                    }))}
                    placeholder="Minimum percentage"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <Label htmlFor="jvPercentMax">Max %</Label>
                  <Input
                    id="jvPercentMax"
                    type="number"
                    value={formData.jvPercentOwnedByClient.max}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      jvPercentOwnedByClient: { ...prev.jvPercentOwnedByClient, max: e.target.value }
                    }))}
                    placeholder="Maximum percentage"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Deal Characteristics
        return (
          <div className="space-y-6">
            {[
              { field: 'auction', label: 'Auction' },
              { field: 'bankruptcyDeal', label: 'Bankruptcy Deal' },
              { field: 'carveoutTransaction', label: 'Carveout Transaction' },
              { field: 'distressedMA', label: 'Distressed M&A' },
              { field: 'financingBank', label: 'Financing Bank' },
              { field: 'financingHighYield', label: 'Financing High Yield' },
              { field: 'goingPrivateNot13e3', label: 'Going Private (but not 13e-3)' },
              { field: 'goingPrivate13e3', label: 'Going Private / 13e-3' },
              { field: 'multipleClosings', label: 'Multiple Closings' },
              { field: 'preClosingSaleSpin', label: 'Pre-Closing Sale/Spin of Assets' },
              { field: 'saleOfSubsidiary', label: 'Sale of Subsidiary' },
              { field: 'secondaryPurchase', label: 'Secondary Purchase' },
              { field: 'unsolicitedTransaction', label: 'Unsolicited Transaction (Public Target only)' },
              { field: 'activismAgainstMerger', label: 'Activism Against Merger' }
            ].map(({ field, label }) => (
              <div key={field}>
                <Label>{label}</Label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={field}
                      value="yes"
                      checked={formData[field] === 'yes'}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={field}
                      value="no"
                      checked={formData[field] === 'no'}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={field}
                      value="na"
                      checked={formData[field] === 'na'}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                    <span className="ml-2">N/A</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        );

      case 3: // Parties & Drafts
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="leadPartner">Lead Partner</Label>
              <Input
                id="leadPartner"
                value={formData.leadPartner}
                onChange={(e) => handleInputChange('leadPartner', e.target.value)}
                placeholder="Enter lead partner name"
              />
            </div>

            <div>
              <Label htmlFor="opposingCounsel">Opposing Counsel</Label>
              <Input
                id="opposingCounsel"
                value={formData.opposingCounsel}
                onChange={(e) => handleInputChange('opposingCounsel', e.target.value)}
                placeholder="Enter opposing counsel"
              />
            </div>

            <div>
              <Label htmlFor="coCounsel">Co-Counsel/Lead Counsel for Group</Label>
              <Input
                id="coCounsel"
                value={formData.coCounsel}
                onChange={(e) => handleInputChange('coCounsel', e.target.value)}
                placeholder="Enter co-counsel"
              />
            </div>

            <div>
              <Label>Client/Matter</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  value={formData.clientNumber}
                  onChange={(e) => handleInputChange('clientNumber', e.target.value)}
                  placeholder="Client Number"
                />
                <Input
                  value={formData.matterNumber}
                  onChange={(e) => handleInputChange('matterNumber', e.target.value)}
                  placeholder="Matter Number"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Note: Search is by primary matter only
              </p>
            </div>

            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter client name"
              />
            </div>

            <div>
              <Label htmlFor="investmentBanker">Investment Banker</Label>
              <Select
                id="investmentBanker"
                value={formData.investmentBanker}
                onChange={(e) => handleInputChange('investmentBanker', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="none">None</option>
                <option value="goldman_sachs">Goldman Sachs</option>
                <option value="morgan_stanley">Morgan Stanley</option>
                <option value="jp_morgan">J.P. Morgan</option>
                <option value="bank_of_america">Bank of America</option>
                <option value="citi">Citi</option>
                <option value="barclays">Barclays</option>
                <option value="credit_suisse">Credit Suisse</option>
                <option value="deutsche_bank">Deutsche Bank</option>
                <option value="ubs">UBS</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="firstDraftByFirm">First Draft by Firm?</Label>
              <Select
                id="firstDraftByFirm"
                value={formData.firstDraftByFirm}
                onChange={(e) => handleInputChange('firstDraftByFirm', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unknown">Unknown</option>
              </Select>
            </div>
          </div>
        );

      case 4: // Industry
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Select
                id="industry"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
              >
                <option value="">-- Select --</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </Select>
            </div>

            <div className="border-t pt-4">
              <Label>OR - Specific Industries (Select all that apply)</Label>
              {INDUSTRIES.map((industry) => (
                <div key={industry} className="mt-4">
                  <h4 className="font-medium mb-2">{industry}</h4>
                  <div className="space-y-2 ml-4">
                    {INDUSTRY_SUBCATEGORIES[industry].map((subcategory) => (
                      <label key={subcategory} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.specificIndustries[subcategory] || false}
                          onChange={() => {
                            setFormData(prev => ({
                              ...prev,
                              specificIndustries: {
                                ...prev.specificIndustries,
                                [subcategory]: !prev.specificIndustries[subcategory]
                              }
                            }));
                          }}
                        />
                        <span className="text-sm">{subcategory}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5: // Purchase Price & Terms
        return (
          <div className="space-y-6">
            <div>
              <Label>Purchase Price Range</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="purchasePriceMin">Min Price ($)</Label>
                  <Input
                    id="purchasePriceMin"
                    type="number"
                    value={formData.purchasePriceMin}
                    onChange={(e) => handleInputChange('purchasePriceMin', e.target.value)}
                    placeholder="Minimum price"
                  />
                </div>
                <div>
                  <Label htmlFor="purchasePriceMax">Max Price ($)</Label>
                  <Input
                    id="purchasePriceMax"
                    type="number"
                    value={formData.purchasePriceMax}
                    onChange={(e) => handleInputChange('purchasePriceMax', e.target.value)}
                    placeholder="Maximum price"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="workingCapitalAdjustment">Working Capital Adjustment</Label>
              <Select
                id="workingCapitalAdjustment"
                value={formData.workingCapitalAdjustment}
                onChange={(e) => handleInputChange('workingCapitalAdjustment', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes_collar">Yes (collar adjustment)</option>
                <option value="yes_traditional">Yes (traditional adjustment)</option>
                <option value="locked_box">Locked box</option>
                <option value="no_other">No (other than locked box)</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="escrowHoldback">Escrow/Holdback for Purchase Price Adjustment?</Label>
              <Select
                id="escrowHoldback"
                value={formData.escrowHoldback}
                onChange={(e) => handleInputChange('escrowHoldback', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="separate_escrow">Separate escrow</option>
                <option value="combined_escrow">Combined escrow with indemnity</option>
                <option value="holdback">Holdback</option>
                <option value="none">None</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="rollover">Rollover</Label>
              <Select
                id="rollover"
                value={formData.rollover}
                onChange={(e) => handleInputChange('rollover', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="management_and_seller">Rollover by Management and Seller</option>
                <option value="management_only">Rollover by Management Only</option>
                <option value="seller_only">Rollover by Seller Only</option>
                <option value="no_rollover">No Rollover</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="earnout">Earnout</Label>
              <Select
                id="earnout"
                value={formData.earnout}
                onChange={(e) => handleInputChange('earnout', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>

            {formData.earnout === 'yes' && (
              <>
                <div>
                  <Label>Earnout Metric</Label>
                  <div className="space-y-2">
                    {EARNOUT_METRICS.map((metric) => (
                      <label key={metric} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.earnoutMetric.includes(metric)}
                          onChange={() => handleArrayChange('earnoutMetric', metric)}
                        />
                        <span className="text-sm">{metric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="accelerationOnChangeOfControl">Acceleration on Change of Control</Label>
                  <Select
                    id="accelerationOnChangeOfControl"
                    value={formData.accelerationOnChangeOfControl}
                    onChange={(e) => handleInputChange('accelerationOnChangeOfControl', e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Select>
                </div>

                <div>
                  <Label>Covenants Present?</Label>
                  <div className="space-y-2">
                    {[
                      "Run Business Consistent with Prior Practice",
                      "Run Business to Maximize Earnout Payment",
                      "Explicit Obligation to Act in Good Faith",
                      "None of the above"
                    ].map((covenant) => (
                      <label key={covenant} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.covenantsPresent.includes(covenant)}
                          onChange={() => handleArrayChange('covenantsPresent', covenant)}
                        />
                        <span className="text-sm">{covenant}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="earnoutExplicitlyOffset">Earnout Explicitly Offset</Label>
                  <Select
                    id="earnoutExplicitlyOffset"
                    value={formData.earnoutExplicitlyOffset}
                    onChange={(e) => handleInputChange('earnoutExplicitlyOffset', e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Select>
                </div>
              </>
            )}
          </div>
        );

      case 6: // Closing & Termination
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="simultaneousSignClose">Simultaneous Sign/Close?</Label>
              <Select
                id="simultaneousSignClose"
                value={formData.simultaneousSignClose}
                onChange={(e) => handleInputChange('simultaneousSignClose', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>

            <div>
              <Label>Reverse Termination Fee?</Label>
              <div className="space-y-2">
                {[
                  "Standard (Buyer breach/financing failure)",
                  "Regulatory",
                  "No Reverse Termination Fee"
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.reverseTerminationFee.includes(option)}
                      onChange={() => handleArrayChange('reverseTerminationFee', option)}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="isFeeExclusive">Is the Fee Exclusive?</Label>
              <Select
                id="isFeeExclusive"
                value={formData.isFeeExclusive}
                onChange={(e) => handleInputChange('isFeeExclusive', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="buyerSpecificPerformance">Does Buyer Have a Specific Performance Remedy?</Label>
              <Select
                id="buyerSpecificPerformance"
                value={formData.buyerSpecificPerformance}
                onChange={(e) => handleInputChange('buyerSpecificPerformance', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="full">Full specific performance remedy</option>
                <option value="lite">Specific performance lite</option>
                <option value="none">None</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="liabilityForWillfulBreach">Liability for Willful Breach?</Label>
              <Select
                id="liabilityForWillfulBreach"
                value={formData.liabilityForWillfulBreach}
                onChange={(e) => handleInputChange('liabilityForWillfulBreach', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes_willful">Yes liability for willful/intentional/material breach</option>
                <option value="yes_breach">Yes liability for breach (no willful limitation)</option>
                <option value="silent">Silent</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="fullEquityBackstop">Full Equity Backstop?</Label>
              <Select
                id="fullEquityBackstop"
                value={formData.fullEquityBackstop}
                onChange={(e) => handleInputChange('fullEquityBackstop', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No / Not Applicable</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="limitedGuaranty">Limited Guaranty?</Label>
              <Select
                id="limitedGuaranty"
                value={formData.limitedGuaranty}
                onChange={(e) => handleInputChange('limitedGuaranty', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Deal Termination Events</Label>
              {[
                { field: 'dealTerminatedSuperiorProposal', label: 'Deal Terminated Due to Superior Proposal' },
                { field: 'dealTerminatedFinancing', label: 'Deal Terminated Due to Financing' },
                { field: 'dealTerminatedOther', label: 'Deal Terminated – Other' },
                { field: 'terminationFeePaid', label: 'Termination Fee Paid' },
                { field: 'reverseTerminationFeePaid', label: 'Reverse Termination Fee Paid' }
              ].map(({ field, label }) => (
                <div key={field}>
                  <Label>{label}</Label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={field}
                        value="yes"
                        checked={formData[field] === 'yes'}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={field}
                        value="no"
                        checked={formData[field] === 'no'}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                      />
                      <span className="ml-2">No</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={field}
                        value="na"
                        checked={formData[field] === 'na'}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                      />
                      <span className="ml-2">N/A</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7: // Indemnification & Insurance
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="postClosingIndemnification">Post-Closing Indemnification</Label>
              <Select
                id="postClosingIndemnification"
                value={formData.postClosingIndemnification}
                onChange={(e) => handleInputChange('postClosingIndemnification', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="yes_fundamental">Yes, but only indemnification for Fundamental Representations</option>
                <option value="yes_special">Yes, but only special indemnities</option>
                <option value="no">No</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="repWarrantyInsurance">Rep & Warranty Insurance?</Label>
              <Select
                id="repWarrantyInsurance"
                value={formData.repWarrantyInsurance}
                onChange={(e) => handleInputChange('repWarrantyInsurance', e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unknown">Unknown</option>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Joint Ventures Questionnaire</h1>
          <p className="mt-2 text-gray-600">Complete the information below for your Joint Venture transaction</p>
        </div>

        <Card>
          <div className="p-6">
            <div className="mb-6">
              <Progress value={(currentStep + 1) / steps.length * 100} className="mb-2" />
              <p className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</p>
            </div>

            <div className="min-h-[400px]">
              {renderStepContent()}
            </div>

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={handleSaveDraft}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>

                {currentStep === steps.length - 1 ? (
                  <Button onClick={handleSubmit}>
                    Submit Questionnaire
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JointVenturesQuestionnaire;
