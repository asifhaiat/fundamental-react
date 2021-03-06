import logo from './logo.svg';
import './App.css';

const singers = [
  {
    name: 'agun',
    job: 'sopno'
  },
  {
    name: 'Eva Rahman',
    job: 'Comedy'
  },
  {
    name: 'Balam',
    job: 'Ki nesha'
  }
]
function App() {
  const nakoys = ['riyaz', 'jasim', 'razzak', 'ferdous', 'manna', 'bappa raz', 'rubel'];
  return (
    <div className="App">
      {
        nakoys.map(nayok => <li>Name: {nayok}</li>)
      }

      {/* {
        nakoys.map(nayok => <Router name= {nayok}></Router>)
      } */}

      {
        singers.map(singer => <Router name={singer.name}></Router>)
      }

      {/* <Router name={nakoys[0]} brand="TP Link" paragraph="Most used router all over Bangladesh"></Router>
      <Laptop name={nakoys[1]} brand="Apple" paragraph="Most valuable laptop all over the world"></Laptop>
      <Book name="Iblisher Jibon Kahini" authorName="Monowara Begum" paragraph="This Book contain Eblish Jinn History"></Book>
      <Phone name="Apple 13 pro Max" brand="Apple" paragraph="Most valuable phone all over the world"></Phone> */}
    </div>
  );
}
// similar in loop different in data using props parameter
function Router(props) {
  /* this console return object
  console.log(props); */
  return (
    <div className='container'>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <p>{props.paragraph}</p>
    </div>
  )
}
// similar in loop different in data using props parameter
function Laptop(props){
  /* this console return object
  console.log(props); */
  return (
    <div className='container1'>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <p>{props.paragraph}</p>
    </div>
  )
}
// similar in loop different in data using props parameter
function Book(props){
  /* this console return object
  console.log(props); */
  return (
    <div className='container2'>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <p>{props.paragraph}</p>
    </div>
  )
}
// similar in loop different in data using props parameter
function Phone(props){
  /* this console return object
  console.log(props); */
  return (
    <div className='container3'>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default App;
