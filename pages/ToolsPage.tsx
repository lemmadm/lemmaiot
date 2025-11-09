import React from 'react';
import FreeTools from '../components/FreeTools';

interface ToolsPageProps {
  onConsultationClick: () => void;
}

const ToolsPage: React.FC<ToolsPageProps> = ({ onConsultationClick }) => {
  return <FreeTools onConsultationClick={onConsultationClick} />;
};

export default ToolsPage;
