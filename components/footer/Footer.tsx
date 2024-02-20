import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const footerStyle = {
    minHeight: '20px',
  };

  const copyrightStyle = {
    color: '#778899', 
    fontSize: '18px', 
    fontWeight: 'bold',
  };

  const socialMediaContainerStyle = {
    backgroundColor: '#FFFFFF', 
    padding: '10px', 
    borderRadius: '10px', 
  };

  return (
    <div className="container flex flex-col items-center py-2" style={backgroundStyle}>
      <div className="footer-content" style={footerStyle}>
        <p style={copyrightStyle}>Identifica Aí | Copyright:</p>
        <p className='text-lg'>Acesse nossas redes sociais</p>
        <div className='flex gap-2' style={socialMediaContainerStyle}>
          <LinkedinLogo size={20} />
          <InstagramLogo size={20}/>
          <FacebookLogo size={20}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
