// declare object
const withCurly = {} // declare and initialized (recommended)
const withClass = new Object(); // (not recommended)

// what object can hold
const objCanHold = {
  key:'value',
  strKey: 'string value',
  booleanKey: true,
  numberKey: 10,
  arrayKey: [],
  objKey: {},
  functionKey: function() {}
}

// person object with his address
const personObject = {
  name: 'Pervez',
  lastName:'alam',
  age: 38,
  address: {
    houseNo: 111,
    block: 'C',
    colony:'deoli',
    city: 'Delhi',
    country: 'India',
    pincode: 110011
  }
}

console.log('Name of the person', personObject.name, personObject['name']);
console.log('Last name of the person', personObject['lastName'])
console.log('Person country name', personObject.address.country, personObject['address']['country'])

// Complex car object
const carObject = {
  registrationDetails: {
    number:'DL1c4433',
    owner: {
      name: 'pervez'
    }
  },
  attributes: {
    color: 'red',
    make: 2018,
    modal: 'swift zxi',
    fuel: 'petrol'
  },
  wheels: 5,
  engineDetails: {
    cc: 1000,
    engineNumber: '32azxf24234342'
  }
}
