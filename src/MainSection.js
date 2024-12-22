import React from 'react';
import TopBar from './components/TopBar';

import './MainSection.css';
import TextArea from './components/TextArea';

const MainSection = () => {
  return (
    <div className="Right-container">
     <TopBar/>
     <TextArea/>
    </div>
  );
};

export default MainSection;
