import React from 'react';
import './App.css';
import Login from './component/login';
import Login1 from './component/login1';
import Login2 from './component/login2';
import Login3 from './component/login3';
import Login4 from './component/login4';
import Login5 from './component/login5';
import Login6 from './component/login6';
import Screen9 from './component/screen9';
import Screen10 from './component/screen10';
import Screen11 from './component/screen11';
import Screen12 from './component/screen12';
import Screen13 from './component/screen13';
import Screen14 from './component/screen14';
import Screen15 from './component/screen15';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App=()=> {
  return ( 
    <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Login/>}/>
                  <Route path="/login1" element={<Login1/>}/>
                  <Route path="/login2" element={<Login2/>}/>
                  <Route path="/login3" element={<Login3/>}/>
                  <Route path="/login4" element={<Login4/>}/>
                  <Route path="/login5" element={<Login5/>}/>
                  <Route path="/login6" element={<Login6/>}/>
                  <Route path="/screen9" element={<Screen9/>}/>
                  <Route path="/screen10" element={<Screen10/>}/>
                  <Route path="/screen11" element={<Screen11/>}/>
                  <Route path="/screen12" element={<Screen12/>}/>
                  <Route path="/screen13" element={<Screen13/>}/>
                  <Route path="/screen14" element={<Screen14/>}/>
                  <Route path="/screen15" element={<Screen15/>}/>

              </Routes>
    </BrowserRouter>
     
    
   );
}

export default App;
