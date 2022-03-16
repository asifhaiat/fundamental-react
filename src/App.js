import logo from './logo.svg';
import './App.css';

const singer = {
  name: 'Hayat',
  age: 24,
  id: 57898,
  favSong: 'Onek Shadhonar pore'
};
const innerStyle = {
  color: 'blue',
  backgroundColor: 'gold',
  borderRadius: '10px',
  border: '1px solid tomato',
  margin: '2px',
  padding: '10px'
};
const rabbatulBait = {
  name: 'Muhtasina Jabin Arika',
  age: 21,
  isSheMarried: 'Yes',
  anniversary: '31 Dec,2022',
  favPerson: {
    name: 'Asif Hayat',
    age: 24,
    mostFavPerson: 'Muhtasina Jabin Arika'
  },
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className='container'>
          <p>My name is Asif Hayat</p>
        </div>
        <div className='music'>
          <p style={innerStyle}>Name: {singer.name} Age: {singer.age} Favorite Song: {singer.favSong} ID: {singer.id}</p>
        </div>
        <div className='fav-person'>
          <p>Name: {rabbatulBait.name} Married: {rabbatulBait.isSheMarried} Anniversary: {rabbatulBait.anniversary} Favorite Person: {rabbatulBait.favPerson.name}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
