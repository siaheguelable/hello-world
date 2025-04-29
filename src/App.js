import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Greet from './components/Greet'; // Importing the Greet component from the components folder
// import Welcome from './components/welcome'; // Importing the Welcome component from the components folder
import Welcome from './components/welcome'; // Importing the Welcome component from the components folder

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/> 
      
    </div>
  );
}

export default App;
