import Navigation from './components/Navigation';
import Card from './components/Card';
import Firefox from './data/Firefox.jpg'
import Chrome from './data/Chrome.jpg'
import IE from './data/IE.png'

var mydata = [
  {
      "name":"Mozilla Firefox",
      "imgUrl":Firefox,
      "description":"Mozilla Firefox is an open-source web browser developed by Mozilla.Firefox..."
  },
  {
      "name":"Google Chrome",
      "imgUrl":'./data/Chrome.jpg',
      "description":"Google Chrome is a web browser developed by Google..."},

  {
      "name":"Internet Explorer",
      "imgUrl":"'../data/Chrome.jpg'",
      "description":"Microsoft ege is the fastest web browser"
  }
]

function App() {
  return (<div>
    <Navigation></Navigation>
    <Card data = {mydata}></Card><br></br>
    <footer>Copyright by Łukasz A</footer>
  </div>
  );
}

export default App;
