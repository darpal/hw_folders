import React from 'react';

const Footer = () => {
  const currentTimestamp = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  return (
    <div className="h-8 bg-slate-200 flex items-center justify-between px-4">
      <div>{currentTimestamp}</div>
      <div>Patrik Oskarsson</div>
      <div>patrik.oskarsson@gmail.com</div>
    </div>
  );
};

export default Footer;
