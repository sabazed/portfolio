import React from 'react';

import {Route, Routes} from "react-router-dom";
import Portfiolio from 'portfolio';
import WinXP from 'XP/WinXP';

const App = () => {
  return (
    <Routes>
      <Route path='/xp' element={<WinXP />} />
      <Route path='/*' element={<Portfiolio />} />
    </Routes>
  );
};

export default App;
