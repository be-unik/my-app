import Header from "./component/header";
import Headline from "./component/headline";
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render Posts." />
      </section>
    </div>
  );
}

export default App;
