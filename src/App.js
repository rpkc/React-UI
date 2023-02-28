import React from 'react';
import {Route,Routes,useLocation} from 'react-router-dom';
import logo from './Image/favicon.png';
import {Frame} from './Util/Util';
import {Page404,BasicCalc,Converter,
        Temp,Factor,HCF,LCM,Temprature,
        Length,BaseCalc,BaseConv,NumberSystem,Semi404} from './Pages/Pages';
import {ConverterMenuInfo,NumberSystemMenuInfo,BasicCalcMenuInfo} from './Data/Data';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location=useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
        <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Temp/>}/>
        
        <Route exact path="/basic-calulator" element={<Frame ButtonInfo={BasicCalcMenuInfo} imgSrc={logo} label={"Basic Calculator"}/>}>
        <Route path="" element={<BasicCalc/>}/>
          <Route path="hcf" element={<HCF/>}/>
          <Route path="lcm" element={<LCM/>}/>
          <Route path="factor" element={<Factor/>}/>
          <Route path="*" element={<Semi404/>}/>
        </Route>  
        
        <Route exact path="/converter" element={<Frame ButtonInfo={ConverterMenuInfo} imgSrc={logo} label={"Converter"}/>}>
        <Route path="" element={<Converter/>}/>
          <Route path="temp" element={<Temprature/>}/>
          <Route path="length" element={<Length/>}/>
          <Route path="*" element={<Semi404/>}/>
        </Route>  


        <Route exact path="/number-system/" element={<Frame ButtonInfo={NumberSystemMenuInfo} imgSrc={logo} label={"Number System"}/>}>
        <Route path="" element={<NumberSystem/>}/>
          <Route path="base-converter" element={<BaseConv/>}/>
          <Route path="base-calculator" element={<BaseCalc/>}/>
          <Route path="*" element={<Semi404/>}/>
        </Route>   
        
        <Route exact path="/projects" element={<Temp/>}/> 
        <Route path='*' element={<Page404/>}/>
        </Routes>
        </AnimatePresence>
  );
}

export default App;
