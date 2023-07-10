import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Importing useSelector
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { selectQuizzes } from "../../features/quizzes/quizzes"; // Importing the selectQuizzes selector

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes); // Accessing all the quizzes from state
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
