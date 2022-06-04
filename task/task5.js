const personsList = [
  {
    name:'Ram',
    address:'ram@gmail.com',
    phone:9899743623,
    gender: 'male'
  },
  {
    name:'vijaya',
    address:'vijaya@gmail.com',
    phone:9899743621,
    gender: 'female'
  },
  {
    name:'Narender',
    address:'narender@gmail.com',
    phone:9899745623,
    gender: 'male'
  },
  {
    name:'Arif',
    address:'arif@gmail.com',
    phone:9899943623,
    gender: 'male'
  },
  {
    name:'Pervez',
    address:'pervez@gmail.com',
    phone:9899748623,
    gender: 'male'
  },
  {
    name:'Hema',
    address:'hema@gmail.com',
    phone:9899713623,
    gender: 'female'
  },
  {
    name:'imrana',
    address:'imrana@gmail.com',
    phone:9899743623,
    gender: 'female'
  },
  {
    name:'Arti',
    address:'Arti@gmail.com',
    phone:9899743633,
    gender: 'female'
  },
  {
    name:'Pooja',
    address:'Pooja@gmail.com',
    phone:9899743693,
    gender: 'female'
  },
  {
    name:'kanu',
    address:'kanu@gmail.com',
    phone:9892743623,
    gender: 'female'
  }
]

//const aadharKeyMap = ['name', 'address', 'phone']
function generateAadhar(){
  return 'AD'+ Math.round(Math.random()*99999)
}
function getAadharList(){
  const aadharList = personsList.map(({name, address, phone}) => {
    return {
      name,
      address,
      phone,
      aadhar: generateAadhar()
    }
  })
  return aadharList
}

const aadharKeyMap = ['name', 'address', 'phone', 'gender']
function getAadharListSecondApproach(){
  const aadharList = personsList.map(person => {
    const personWithAadhar = {
      aadhar: generateAadhar()
    }
    aadharKeyMap.forEach(key => {
      personWithAadhar[key] = person[key]
      //personWithAadhar.name = 'pervez' -- loop 1
      //personWithAadhar.address = 'pervez@gamil.com' --- loop 2
      //personWithAadhar.phone = 9841641661 --- loop 3
    })
    return personWithAadhar
  })
  return aadharList
}
const aadharList = getAadharList();
console.log('aadharList', aadharList)

const aadharListWithSecondApproach = getAadharListSecondApproach();
console.log('aadharListWithSecondApproach', aadharListWithSecondApproach);