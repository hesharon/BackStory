import Tabs from "./Home";
import './Collections.css'

function Collections() {
  const squares = Array.from(Array(64).keys());

  return <><Tabs/>
  <div className="wrapper">
    <div className="grid">
      {squares.map((square) => (
        <div key={square} className="square">
          <button>This button takes you to the collection</button>
        </div>
      ))}
    </div>
    </div>
  ;</>;
}

export default Collections;