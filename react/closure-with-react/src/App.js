import { useState } from 'react';
import { genderList } from './constants'
import GenderListComponent from './components/GenderListComponent';
import './App.css';


function App() {
  const [genderType, changeGenderType ] = useState('male')
  
  function handleSelect(e) {
    changeGenderType(e.target.value)
    //console.log(e.target.value)
    // if(e.target.value === 'b'){
    //   changeGenderType('female')
    // } else if(e.target.value === 'a') {
    //   changeGenderType('male')
    // } else {
    //   changeGenderType('trans')
    // }
  } 

  return (
    <div className="App">
      <h1>Closure</h1>
      <select onChange={handleSelect}>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='trans'>Trans</option>
      </select>

      <GenderListComponent genderList={genderList} genderType={genderType}/>
      {/* <GenderListComponent genderList={genderList} genderType="female" />
      <GenderListComponent genderList={genderList} genderType="trans" /> */}
    </div>
  );
}

export default App;
