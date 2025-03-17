///import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/Accordion"
import Accordion from './components/Accordion';
import Alerts from './components/Alerts';
import Badges from './components/Badges';

function App() {
  return (
    <>
    <Accordion/>
    <Alerts/>
    <Badges/>
    </>
  );
}

export default App;
