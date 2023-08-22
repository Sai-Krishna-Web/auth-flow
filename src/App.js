import './App.css';
import Login from './components/login';
import Graph1 from './components/graph1/graph1';
import Graph2 from './components/graph2';
import { Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header"><div className='Nav'>
      <nav style={{ margin: 10 }}>
    <Link to="/" >
    Home
    </Link>
    <Link to="/graph1" >
    Simple Graph
    </Link>
    <Link to="/graph2" >
    Graph filter
    </Link>
</nav></div></header>
<div  style={{height:'calc(100vh - 60px)',display: 'flex',
    flexDirection: 'column'}}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/graph1" element={<Graph1 />} />
        <Route path="/graph2" element={<Graph2 />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
