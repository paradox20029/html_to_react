// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
  
//   );
// }

// export default App;

import React from 'react';
import CategoryChart from './CategoryChart';
import './App.css';

const App = () => {
  const chartData = 'yourBase64EncodedImageDataHere';
  
  return (
    <div>
      <h1>My App</h1>
      <CategoryChart chartData={chartData} />
    </div>
  );
};

export default App;

