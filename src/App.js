import './global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>

  );
}

export default App;
