import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Select } from '../components/ui/Select';
import { Progress } from '../components/ui/Progress';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const JointVenturesQuestionnaire = ({ setCurrentProject }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  
  const [formData, setFormData] = useState({
    // General Section
    firmRepresents: '',
    
    // Joint Venture Specific Fields
    jointVentureStructure: '',
    numberOfJVPartners: { min: '', max: '' },
    jvPercentOwnedByClient: { min: '', max: '' },
    
    // Standard fields from the general section
    consideration: [],
    structure: [],
    
    // All other fields following the joint ventures form...
  });

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
                <option value="joint-venturer">Joint Venturer (JV)</option>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Joint Venture Structure</h2>
            
            <div>
              <Label htmlFor="jvStructure">Joint Venture Structure</Label>
              <Select
                id="jvStructure"
                value={formData.jointVentureStructure}
                onChange={(e) => setFormData(prev => ({ ...prev, jointVentureStructure: e.target.value }))}
              >
                <option value="">-- Select --</option>
                <option value="via-entity">Via Entity</option>
                <option value="via-contract">Via Contract</option>
                <option value="virtual">Virtual Joint Venture</option>
                <option value="strategic-alliance">Strategic Alliance</option>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minPartners">Min # of JV Partners</Label>
                <Input
                  id="minPartners"
                  type="number"
                  value={formData.numberOfJVPartners.min}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    numberOfJVPartners: { ...prev.numberOfJVPartners, min: e.target.value }
                  }))}
                  placeholder="2"
                />
              </div>
              <div>
                <Label htmlFor="maxPartners">Max # of JV Partners</Label>
                <Input
                  id="maxPartners"
                  type="number"
                  value={formData.numberOfJVPartners.max}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    numberOfJVPartners: { ...prev.numberOfJVPartners, max: e.target.value }
                  }))}
                  placeholder="10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minOwnership">Min JV % Owned by Client</Label>
                <Input
                  id="minOwnership"
                  type="number"
                  value={formData.jvPercentOwnedByClient.min}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    jvPercentOwnedByClient: { ...prev.jvPercentOwnedByClient, min: e.target.value }
                  }))}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="maxOwnership">Max JV % Owned by Client</Label>
                <Input
                  id="maxOwnership"
                  type="number"
                  value={formData.jvPercentOwnedByClient.max}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    jvPercentOwnedByClient: { ...prev.jvPercentOwnedByClient, max: e.target.value }
                  }))}
                  placeholder="100"
                />
              </div>
            </div>
          </div>
        );

      // Add remaining steps 3-6 following the same pattern
      
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
        type: 'joint-ventures',
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
          <h1 className="text-2xl font-bold mb-2">Joint Ventures Questionnaire</h1>
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

export default JointVenturesQuestionnaire;
