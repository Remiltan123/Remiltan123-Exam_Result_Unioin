import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const [activePage, setActivePage] = useState('');  
  
  useEffect(() => {
    
    if (location.pathname === '/') {
      setActivePage('Home');
    } else if (location.pathname === '/ModelPaper') {
      setActivePage('ModelPaper');
    } else if (location.pathname === '/ResultPage') {
      setActivePage('Result');
    }
  }, [location]);  

  const handleNavigation = (page, path) => {
    setActivePage(page); 
    navigate(path);      
  };

  return (
    <div className='Navbar-container sticky-top'>
      <nav className='navbar navbar-dark'>
        <h4>JTamil Union Exam</h4>
        <div className='Navbar-Option'>
          <p 
            className={activePage === 'Home' ? 'active' : ''} 
            onClick={() => handleNavigation('Home', '/')}
          >
            Home
          </p>
          <p 
            className={activePage === 'ModelPaper' ? 'active' : ''} 
            onClick={() => handleNavigation('ModelPaper', '/ModelPaper')}
          >
            ExamPapers
          </p>
          <p 
            className={activePage === 'Result' ? 'active' : ''} 
            onClick={() => handleNavigation('Result', '/ResultPage')}
          >
            Result
          </p>
        </div>
      </nav>
    </div>
  );
};
