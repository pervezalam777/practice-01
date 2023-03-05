export function filterGender(genderType, genderList) {
  if(genderType === 'all'){
    return genderList;
  }

  const filteredList = genderList.filter(innerFunction);
  
  function innerFunction(person) {
    return person.gender === genderType;
  }
  
  return filteredList
}

export function filterGenderWithNativeForLoop(genderType, genderList) {
  if(genderType === 'all'){
    return genderList;
  }
  const newArray = [];
  const len = genderList.length;
  // for(initialization; condition; increment) {}
  for(let index = 0; index < len; index++) {
    const element = genderList[index];
    console.log(index, ' -- ', element);
    if(element.gender === genderType){
      newArray.push(element)
    }
  }
  console.log('new Array ', newArray);
  return newArray;
}

export function getColor(){
  return 'red';
}