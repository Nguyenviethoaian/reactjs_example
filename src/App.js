import Component1 from './Component/Component1/Component1';
import Component2 from './Component/Component2/Component2';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Component1 value={""}
      onChange ={(e)=>{}}
      placeholder={""} />
      <Component2/>
    </div>
  );
}

export default App;
