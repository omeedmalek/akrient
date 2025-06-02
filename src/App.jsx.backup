import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProjectTypeSelection from './pages/ProjectTypeSelection';
import MAPEQuestionnaire from './pages/MAPEQuestionnaire';
import MinorityQuestionnaire from './pages/MinorityQuestionnaire';
import JointVenturesQuestionnaire from './pages/JointVenturesQuestionnaire';
import TermSheetUpload from './pages/TermSheetUpload';
import DocumentEditor from './pages/DocumentEditor';
import SigningHub from './pages/SigningHub';

function App() {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <Router>
      <Analytics />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage setCurrentProject={setCurrentProject} />} />
            
            {/* New project flow */}
            <Route path="/new-project" element={<ProjectTypeSelection />} />
            <Route path="/new-project/ma-pe" element={<MAPEQuestionnaire setCurrentProject={setCurrentProject} />} />
            <Route path="/new-project/minority" element={<MinorityQuestionnaire setCurrentProject={setCurrentProject} />} />
            <Route path="/new-project/joint-ventures" element={<JointVenturesQuestionnaire setCurrentProject={setCurrentProject} />} />
            
            {/* Existing routes */}
            <Route path="/new-project/term-sheet" element={<TermSheetUpload currentProject={currentProject} />} />
            <Route path="/project/:id/editor" element={<DocumentEditor currentProject={currentProject} />} />
            <Route path="/project/:id/signing" element={<SigningHub currentProject={currentProject} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
