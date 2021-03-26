import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row} from "react-bootstrap";

import Title from "./components/title";
import BeatPad from "./components/beat-pad";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Title />
          <BeatPad />
        </Row>
      </Container>
    </div>
  );
}

export default App;
