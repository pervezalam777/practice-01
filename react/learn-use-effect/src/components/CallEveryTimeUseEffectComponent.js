import { useEffect, useState } from 'react';

function CallEveryTimeUseEffectComponent(props) {
  const {counterValue} = props
  const [counter, updateCounter] = useState(0);

  // ComponentWillUpdate
  useEffect(() => {
    setTimeout(() => {
      updateCounter(counter + 1); 
    },  4000)
  })

  console.log('CallEveryTimeUseEffectComponent: re-render')
  useEffect(() => {
    console.log('CallEveryTimeUseEffectComponent: ', counterValue)
  }, [counterValue])
  
  //console.log('CallEveryTimeUseEffectComponent: re-rendered')

  return (
    <p>
      <h3>Call on every re-render use effect component</h3>
      <p>Dependencies array should not be provided in this case</p>
      <p>Counter (0) should be increase to (1): {counter}</p>
    </p>
  )

}

export default CallEveryTimeUseEffectComponent;