import classNames from "classnames";
import { ReactComponent as CorrectSVG } from "../assets/images/check-circle-solid.svg";
import { ReactComponent as WrongSVG } from "../assets/images/times-circle-solid.svg";
import styles from "../styles/components/answer.module.css";

function Answer({ answer }) {

  const answerState = answer.state;
  const wrongAnswer = answerState === "wrong";
  const correctAnswer = answerState === "correct";
  return (
    <>
      <div
        className={classNames(styles.invisible, {
          [styles.visible]: correctAnswer,
        })}
      >
        <CorrectSVG fill="#8fc320" className={classNames(styles.answer)} />
      </div>

      <div
        className={classNames(styles.invisible, {
          [styles.visible]: wrongAnswer,
        })}
      >
        <WrongSVG fill="#e70013" className={classNames(styles.answer)} />
      </div>
    </>
  );
}

export default Answer;
