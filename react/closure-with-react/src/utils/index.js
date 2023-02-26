export function filterGender(genderType, genderList) {
  const filteredList = genderList.filter(innerFunction)
  
  function innerFunction(person) {
    return person.gender === genderType;
  }
  
  return filteredList
}

export function getColor(){
  return 'red';
}