
import './App.css';
import logo from "./assets/monetaelogo.png"
import CardPrincipal from './components/CardPrincipal';
import DivWhats from './components/DivWhats';
import Saudation from './components/Saudation';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo da Monetae Câmbio" className="logo-img"/>
      <Saudation/>
      <CardPrincipal/>
      <DivWhats/>
      
    </div>
  );
}

export default App;
