//import React from 'react'; // till React 17

function GenderSelectionComponent(props) {
  const { handleSelect, list } = props;
  return (
    <select onChange={handleSelect}>
      {
        list.map((item) => {
          const { label, value } = item;
          return (
            <option value={value} key={value}>{label}</option>
          )
        })
      }
    </select>
  )
}

export default GenderSelectionComponent;