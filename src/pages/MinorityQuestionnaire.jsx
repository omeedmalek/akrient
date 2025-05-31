import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Select } from '../components/ui/Select';
import { Progress } from '../components/ui/Progress';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const MinorityQuestionnaire = ({ setCurrentProject }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  
  const [formData, setFormData] = useState({
    // General Section
    firmRepresents: '',
    
    // Buyer/Seller Characteristics (similar to M&A but with minority-specific options)
    buyerCharacteristics: {},
    sellerCharacteristics: {},
    
    // Minority Investment Specific Fields
    targetSecuritiesSold: [],
    proceedsDestination: '',
    growthEquity: '',
    minorityInvestmentSize: { min: '', max: '' },
    ownedInterestBefore: '',
    ownedInterestAfter: '',
    
    // All other standard fields from the form...
  });

  // Similar structure to MAPEQuestionnaire but with minority-specific steps
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
                onChange={(e) => setFormData(prev => ({ ...prev, firmRepresents: e.target.value }))}
              >
                <option value="">-- Select --</option>
                <option value="buyer-minority">Buyer of minority (or non-controlling majority) interest</option>
                <option value="pipe-investor">PIPE Investor</option>
                <option value="pipe-issuer">PIPE Issuer</option>
                <option value="seller-minority">Seller of minority (or non-controlling majority) interest</option>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Minority Investment Details</h2>
            
            <div>
              <Label>Target Securities Sold</Label>
              <div className="space-y-2 mt-2">
                {[
                  'Common',
                  'Debt (Convertible)',
                  'Preferred (Convertible)',
                  'Preferred (Straight)',
                  'Warrant'
                ].map(security => (
                  <label key={security} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.targetSecuritiesSold.includes(security)}
                      onChange={() => {
                        const current = formData.targetSecuritiesSold;
                        if (current.includes(security)) {
                          setFormData(prev => ({
                            ...prev,
                            targetSecuritiesSold: current.filter(s => s !== security)
                          }));
                        } else {
                          setFormData(prev => ({
                            ...prev,
                            targetSecuritiesSold: [...current, security]
                          }));
                        }
                      }}
                      className="mr-2"
                    />
                    {security}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="proceeds">Any Proceeds Going to Company?</Label>
              <Select
                id="proceeds"
                value={formData.proceedsDestination}
                onChange={(e) => setFormData(prev => ({ ...prev, proceedsDestination: e.target.value }))}
              >
                <option value="">-- Select --</option>
                <option value="both">Both Company and Seller</option>
                <option value="company">Company</option>
                <option value="seller">Seller</option>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minSize">Min Investment Size (%)</Label>
                <Input
                  id="minSize"
                  type="number"
                  value={formData.minorityInvestmentSize.min}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    minorityInvestmentSize: { ...prev.minorityInvestmentSize, min: e.target.value }
                  }))}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="maxSize">Max Investment Size (%)</Label>
                <Input
                  id="maxSize"
                  type="number"
                  value={formData.minorityInvestmentSize.max}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    minorityInvestmentSize: { ...prev.minorityInvestmentSize, max: e.target.value }
                  }))}
                  placeholder="100"
                />
              </div>
            </div>
          </div>
        );

      // Add remaining steps 3-7 following the same pattern
      
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      const project = {
        id: Date.now().toString(),
        type: 'minority',
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

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Minority Investments Questionnaire</h1>
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

export default MinorityQuestionnaire;
