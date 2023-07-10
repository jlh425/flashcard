import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Importing useSelector
import { selectCards } from "../../features/cards/cards"; // Importing the selectCards selector

export default function Card({ id }) {
  const cards = useSelector(selectCards); // Accessing all the cards from state
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}