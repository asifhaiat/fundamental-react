import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router></Router>
      <Laptop></Laptop>
      <Book></Book>
      <Phone></Phone>
    </div>
  );
}

function Router() {
  return (
    <div className='container'>
      <h3>Name: Mi Router 4c</h3>
      <h4>Brand: Xiaomi</h4>
      <p>This router has four antenna and it's performance is very good.</p>
    </div>
  )
}
function Laptop(){
  return (
    <div className='container1'>
      <h3>Name: HP ProBook 450 G4</h3>
      <h4>Brand: HP</h4>
      <p>i used in this laptop 4 year's and it's performance really satisfied to me.</p>
    </div>
  )
}

function Book(){
  return (
    <div className='container2'>
      <h3>Name: Islamer Etihash</h3>
      <h4>Author Name: Dr. Muhammad Ibrahim Ash-shariki</h4>
      <p>This book contain Islamic History</p>
    </div>
  )
}
function Phone(){
  return (
    <div className='container3'>
      <h3>Name: Vivo Y93</h3>
      <h4>Brand: Vivo</h4>
      <p>I used this phone 3year's and i really satisfied to this phone</p>
    </div>
  )
}

export default App;
