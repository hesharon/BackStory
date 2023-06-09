import "./Collections.css";

function Collections(props) {
  const squares = Array.from(Array(6).keys());

  return (
    <div className="wrapper">
      <div className="grid">
        {squares.map((square) => (
          <div key={square} className="square">
            <button>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26ldn5r3EBGhRaUKnBKXM6T8yEhlbRI4xMQ&usqp=CAU"
                }
              ></img>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
