import './App.css';
import ClearPath from './components/ClearPath';
import Footer from './components/Footer';
import Learning from './components/Learning';
import StopPaying from './components/StopPaying';
import Transparency from './components/Transparency';
import Webserv from './components/Webserv';
import MobileEfforts from './MobileEfforts';

function App() {
  return (
    <>
      <StopPaying />
      <Webserv />
      <MobileEfforts />
      <ClearPath />
      <Transparency />
      <Learning />
      <Footer />
    </>
  );
}

export default App;
