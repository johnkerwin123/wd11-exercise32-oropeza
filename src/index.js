import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadingPart from './components/HeadingPart';
import ImageLayout from './components/ImageLayout';
import AboutDota from './components/aboutDota';
import MapDota from './components/mapDota';
import FooterLayout from './components/footerLayout';
import './index.css';
// import App from './App'
import reportWebVitals from './reportWebVitals';
import CardLayout from './components/cardLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HeadingPart/>
     <ImageLayout/>
     <AboutDota/>
     <MapDota/>
     <CardLayout/>
     <FooterLayout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
