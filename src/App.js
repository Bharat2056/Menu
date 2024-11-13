import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import SecHome from './components/SecHome/SecHome';
import ThHome from './components/ThHome/ThHome';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sechome" element={<SecHome />} />
        <Route path='/thhome' element={<ThHome/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
   </>
  );
}

export default App;
