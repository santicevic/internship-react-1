import { useState } from "react";
import InternList from "./components/InternList";
import InternForm from "./components/InternForm";
import './app.css';

function App() {
  const [interns, setInterns] = useState([]);

  return (
    <div className="app">
      <h1>{interns.length > 3 ? '🍾🍾🍾Imamo više od 3 interna🍾🍾🍾' : 'Imamo 3 ili manje interna'}</h1>
      <div className="content-wrapper">
        <InternForm addIntern={intern => setInterns(prevState => ([...prevState, intern]))} />
        <InternList interns={interns} />
      </div>
    </div>
  );
}

export default App;
