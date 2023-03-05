import CallOnceUseEffectComponent from './components/CallOnceUseEffectComponent';
import CallEveryTimeUseEffectComponent from './components/CallEveryTimeUseEffectComponent';
import CallOnDependencyChangeComponent from './components/CallOnDependencyChangeComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <CallOnceUseEffectComponent />
      <CallEveryTimeUseEffectComponent counterValue={10} />
      <CallOnDependencyChangeComponent />
    </div>
  );
}

export default App;
