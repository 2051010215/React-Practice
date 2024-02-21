import './App.scss';
import ExmapleBody1 from '../components/exmaple1';
import Header from '../components/header';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <ExmapleBody1 />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
