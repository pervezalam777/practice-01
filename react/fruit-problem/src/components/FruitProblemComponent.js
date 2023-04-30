import { useState } from 'react'

const data = ["apple", "banana", "orange", "papaya"];
  
function FruitProblemComponent() {
  const [fruitList, updateFruitList] = useState(data);
  const [selectedFruits, updateSelectedFruitsList] = useState([])

  function renderDeleteButton(fruitName) {
    if(selectedFruits.indexOf(fruitName) !== -1){
      return <button id={fruitName} onClick={handleDelete}>Delete</button>
    }
    return null;
  }

  function handleDelete(event){
    const { id } = event.target;
    const cloneFruitList = deleteFruitFrom(fruitList, id)
    // fruitList.filter((fruitName) => {
    //   return fruitName !== id
    // })
    const cloneSelectedList = deleteFruitFrom(selectedFruits, id)
    // selectedFruits.filter((fruitName) => {
    //   return fruitName !== id
    // })
    updateFruitList(cloneFruitList);
    updateSelectedFruitsList(cloneSelectedList);
  }

  function deleteFruitFrom(list, fruit) {
    const cloneList = list.filter((fruitName) => {
      return fruitName !== fruit
    })
    return cloneList;
  }

  function handleInputChange(event) {
    const {checked, name} = event.target;
    if(checked){
      updateSelectedFruitsList([...selectedFruits, name])
    } else {
      const cloneSelectedList = deleteFruitFrom(selectedFruits, name)
      // selectedFruits.filter((fruitName) => {
      //   return fruitName !== name
      // })
      updateSelectedFruitsList(cloneSelectedList)
    }
  }

  return (
    <ul>
      {
        fruitList.map((fruitName) => {
          return (
            <li key={fruitName}>
              <input type='checkbox' name={fruitName} onChange={handleInputChange} />
              <span>{fruitName}</span>
              {renderDeleteButton(fruitName)}
            </li>
          )
        })
      }
     
    </ul>
  )
}

export default FruitProblemComponent;