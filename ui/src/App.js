import React from 'react';

import {Route, Routes} from "react-router-dom";
import Portfiolio from 'portfolio';
import WinXP from 'XP/WinXP';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Portfiolio />} />
      <Route path='/xp' element={<WinXP />} />
    </Routes>
  );
};

export default App;
