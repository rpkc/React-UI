import React from 'react';
import Temp from './Pages/Temp';
import NumberSystem from './Pages/NumberSystem';
import Wrapper from './Util/Wrapper';
import logo from './Image/favicon.png';
import Page404 from './Pages/404';
import BaseCalc from './Pages/Number System/BaseCalc';
import BaseConv from './Pages/Number System/BaseConv';
import Temprature from './Pages/Converter/Temprature';
import Length from './Pages/Converter/Length';
import {Route,Routes} from 'react-router-dom';
import Converter from './Pages/Converter';
import Factor from './Pages/Basic Calc/Factor';
import LCM from './Pages/Basic Calc/LCM';
import HCF from './Pages/Basic Calc/HCF';
import BasicCalc from './Pages/BasicCalc';
import {ConverterMenuInfo,NumberSystemMenuInfo,BasicCalcMenuInfo} from './Data/Data';

function App() {
  // const ConverterMenuInfo=[
  //   {label:"Temprature",link:"temp"},{label:"Length",link:"length"}
  // ]
  // const NumberSystemMenuInfo=[
  //   {label:"Base Converter",link:"base-converter"},{label:"Base Calculator",link:"base-calculator"}
  // ]
  return (
        <Routes>
        <Route exact path="/" element={<Temp/>}/>
        
        <Route exact path="/basic-calulator" element={<Wrapper ButtonInfo={BasicCalcMenuInfo} imgSrc={logo} label={"Basic"}/>}>
        <Route path="" element={<BasicCalc/>}/>
          <Route path="hcf" element={<HCF/>}/>
          <Route path="lcm" element={<LCM/>}/>
          <Route path="factor" element={<Factor/>}/>
        </Route>  
        
        <Route exact path="/converter" element={<Wrapper ButtonInfo={ConverterMenuInfo} imgSrc={logo} label={"Converter"}/>}>
        <Route path="" element={<Converter/>}/>
          <Route path="temp" element={<Temprature/>}/>
          <Route path="length" element={<Length/>}/>
        </Route>  


        <Route exact path="/number-system/" element={<Wrapper ButtonInfo={NumberSystemMenuInfo} imgSrc={logo} label={"Number System"}/>}>
        <Route path="" element={<NumberSystem/>}/>
          <Route path="base-converter" element={<BaseConv/>}/>
          <Route path="base-calculator" element={<BaseCalc/>}/>
        </Route>   
        
        <Route exact path="/projects" element={<Temp/>}/> 
        <Route path='*' element={<Page404/>}/>
        </Routes>
  );
}

export default App;
