import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Clock, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Drafting",
      description: "Transform term sheets into full agreements in minutes, not days"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Precedent Intelligence",
      description: "AI-powered selection of the most relevant precedent documents"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Clause Library",
      description: "Access thousands of vetted clauses tailored to your deal type"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Billable Hours",
      description: "Focus on strategy and negotiation, not document assembly"
    }
  ];

  const stats = [
    { value: "90%", label: "Time Saved" },
    { value: "$165B", label: "Industry Size" },
    { value: "5min", label: "Avg Draft Time" },
    { value: "99.9%", label: "Accuracy Rate" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Legal Drafting for the
            <span className="text-blue-600"> AI Era</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Akrient transforms how Big Law creates agreements. Turn term sheets into 
            execution-ready documents in minutes using AI-powered precedent matching.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">
          Built for Modern Legal Practice
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 text-white rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          How Akrient Works
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          {[
            { step: "1", title: "Answer Questions", desc: "Complete smart questionnaire" },
            { step: "2", title: "Upload Term Sheet", desc: "AI extracts key terms" },
            { step: "3", title: "Select Clauses", desc: "Choose from vetted library" },
            { step: "4", title: "Review & Refine", desc: "AI checks completeness" },
            { step: "5", title: "Sign & Execute", desc: "Built-in signing hub" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-blue-600 text-white rounded-3xl">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Legal Drafting?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join leading law firms already using Akrient
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default HomePage;
