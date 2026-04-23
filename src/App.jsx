import React from 'react';

function App() {
  return (
    <div className="app-container">
      <header style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ color: '#8b5e3c', fontSize: '2.5rem' }}>تعاونية النسيج الممتاز</h1>
        <p style={{ color: '#5c4033', fontSize: '1.2rem' }}>أصالة الأطلس في كل غرزة</p>
      </header>
      
      <div style={{ 
        background: 'white', 
        padding: '30px', 
        borderRadius: '20px', 
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ color: '#d4a373' }}>مرحباً بكم في معرضنا الرقمي</h2>
        <p>يتم الآن تحضير العرض الأول للزرابي...</p>
      </div>
    </div>
  );
}

export default App;

