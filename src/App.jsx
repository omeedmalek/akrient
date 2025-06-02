import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectTypeSelection from './pages/ProjectTypeSelection';
import MAPEQuestionnaire from './pages/MAPEQuestionnaire';
import TermSheetUpload from './pages/TermSheetUpload';
import DocumentEditor from './pages/DocumentEditor';
import SigningHub from './pages/SigningHub';
import DashboardPage from './pages/DashboardPage';
import ClauseLibrary from './pages/ClauseLibrary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<ProjectTypeSelection />} />
          <Route path="/questionnaire/mape" element={<MAPEQuestionnaire />} />
          <Route path="/termsheet-upload" element={<TermSheetUpload />} />
          <Route path="/document-editor" element={<DocumentEditor />} />
          <Route path="/signing-hub" element={<SigningHub />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/clause-library" element={<ClauseLibrary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
