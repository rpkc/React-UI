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
import {ConverterMenuInfo,NumberSystemMenuInfo} from './Data/Data';

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
        
        <Route exact path="/basic" element={<Temp/>}/>
        
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
