import { useEffect, useState } from 'react';
import { genderList } from '../constants';
import { filterGender } from '../utils';

function CallOnDependencyChangeComponent() {
  const [genderType, updateGenderType] = useState('male')

  function handleSelectionChange(e) {
    updateGenderType(e.target.value)
  }

  return (
    <>
      <GenderTypesListComponent onSelectionChange={handleSelectionChange}/>
      <GenerateGenderListComponent genderType={genderType}/>
    </>
  )
}

export default CallOnDependencyChangeComponent;

function GenderTypesListComponent(props) {
  const { onSelectionChange } = props;
  return (
    <select onChange={onSelectionChange}>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
      <option value='trans'>Trans</option>
    </select>
  )
}

function GenerateGenderListComponent(props) {
  const { genderType } = props;
  const [list, updateList] = useState([])

  //console.log('GenerateGenderListComponent: re-render')

  useEffect(() => {
    //console.log('call on gender change')
    setTimeout(() => {
      const newList = filterGender(genderType, genderList);
      updateList(newList)
    }, 2000)
  }, [genderType]) // props change for gender type

  return (
    <ul>
      {
        list.map(item => {
          const {name, gender} = item;
          return (
            <li key={name}>{name} : {gender}</li>
          )
        })
      }
    </ul>
  )
}