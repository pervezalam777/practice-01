import { useEffect, useState } from 'react';

function CallOnceUseEffectComponent() {
  const [counter, updateCounter] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    updateCounter(counter + 1);
  }, [])
  
  console.log('CallOnceUseEffectComponent: re-rendered')

  return (
    <p>
      <h3>Call only once use effect component</h3>
      <p>Dependencies array should be blank in this case</p>
      <p>Counter (0) should be increase to (1): {counter}</p>
    </p>
  )

}

export default CallOnceUseEffectComponent;