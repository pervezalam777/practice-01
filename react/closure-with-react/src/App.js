import { useEffect, useState } from 'react';
import { genderList, genders } from './constants'
import GenderListComponent from './components/GenderListComponent';
import GenderSelectionComponent from './components/GenderSelectionComponent';
import './App.css';


function App() {
  const [genderType, changeGenderType ] = useState(null);
  const [genderTypeList, updateGenderTypeList] = useState([])

  useEffect(() => {
    console.log('called effect function')
    const interval = setTimeout(() => {
      const list = [{label:'All', value:'all'}, ...genders]
      updateGenderTypeList(list);
      changeGenderType('all');
    }, 2000)
    return () => {
      //clean up function
      console.log('clean up called')
      clearTimeout(interval)
    }
  }, [])
  
  function handleSelect(e) {
    changeGenderType(e.target.value)
  } 
  console.log('in')
  return (
    <div className="App">
      <h1>Closure</h1>
      {genderType && (
        <>
          <GenderSelectionComponent list={genderTypeList} handleSelect={handleSelect} />
          <GenderListComponent genderList={genderList} genderType={genderType}/>
        </>
      )}
      
    </div>
  );
}

export default App;
