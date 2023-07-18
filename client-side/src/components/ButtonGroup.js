import classNames from "classnames";
import styles from "../styles/Pages/Practice/practice.module.css";

function ButtonGroup({handleClickButton,answer}) {
    const answerState = answer.state;

  return (
    <div className={styles.button_container}>
      <button
        className={classNames(styles.button_verb, styles.button)}
        disabled={answerState}
        onClick={() => handleClickButton("verb")}
      >
        verb
      </button>
      <button
        className={classNames(styles.button_noun, styles.button)}
        disabled={answerState}
        onClick={() => handleClickButton("noun")}
      >
        noun
      </button>
      <button
        className={classNames(styles.button_adjective, styles.button)}
        disabled={answerState}
        onClick={() => handleClickButton("adjective")}
      >
        adjective
      </button>
      <button
        className={classNames(styles.button_adverb, styles.button)}
        disabled={answerState}
        onClick={() => handleClickButton("adverb")}
      >
        adverb
      </button>
    </div>
  );
}

export default ButtonGroup;
