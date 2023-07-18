import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Pages/Practice/practice.module.css";
import classNames from "classnames";
import { fetchWordList } from "../../service/practice";

import { useNavigate } from "react-router-dom";
import Answer from "../../components/Answer";
import Progress from "../../components/Progress";
import ButtonGroup from "../../components/ButtonGroup";
function Practice() {
  const [wordList, setWordList] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [answer, setAnswer] = useState({ state: null, correctAnswer: 0 });
  const navigate = useNavigate();
  const selectedItem_top = useRef(null);
  const selectedItem_bottom = useRef(null);

  // fetch word list from server
  const getWordList = async () => {
    const response = await fetchWordList();
    console.log(response);
    selectedItem_top.current = response.word_list[0].word;
    setWordList(response.word_list);
  };

  useEffect(() => {
    // ferch word list from server
    getWordList();
    return () => {};
  }, []);

  useEffect(() => {
    // redirect to rank page after answer all questions
    if (wordIndex && wordIndex === wordList.length) {
      const studentScore = (answer.correctAnswer / wordList.length) * 100;
      navigate("/rank", { state: { score: studentScore } });
    }
    return () => {};
  }, [wordIndex]);

  const updateWordState = () => {
    setTimeout(() => {
      // set next word in hidden <h3 /> to be visible next time
      // this for animate word
      if (!(wordIndex % 2) || !wordIndex) {
        selectedItem_bottom.current = wordList[wordIndex + 1]?.word;
      } else {
        selectedItem_top.current = wordList[wordIndex + 1]?.word;
      }

      // reset answer state
      setAnswer((prev) => ({ ...prev, state: null }));

      // update word index to next one
      setWordIndex((prev) => prev + 1);
    }, 800);
  };

  const handleClickButton = (type) => {
    // check if Answer is correct
    const selectedItem = wordList[wordIndex];
    if (type === selectedItem.pos) {
      setAnswer((prev) => ({
        state: "correct",
        correctAnswer: prev.correctAnswer + 1,
      }));
    } else {
      setAnswer((prev) => ({
        ...prev,
        state: "wrong",
      }));
    }

    updateWordState();
  };

  // Word class if word index even top h3 will be visible else if bottom h3 will be visible
  const wordClass = classNames(styles.word, {
    [styles.word_bottom]: wordIndex % 2 && wordIndex !== 0,
    [styles.word_top]: (wordIndex + 1) % 2 && wordIndex !== 0,
  });

  return (
    <div className={classNames(styles.practice_container)}>
      {/* header  */}
      <div className={styles.header}>
        <h3 className={styles.title}>Parts of Speech</h3>
        <p className={styles.sub_title}>What kind of word is</p>
        <div className={styles.word_container}>
          <h3 className={wordClass}>{selectedItem_top.current}</h3>
          <h3 className={classNames(styles.word)}>
            {selectedItem_bottom.current}
          </h3>
        </div>
      </div>

      {/* Button group to choose answer  */}
      <ButtonGroup handleClickButton={handleClickButton} answer={answer} />

      {/* progress bar */}
      <Progress wordIndex={wordIndex} wordList={wordList} />

      {/* component show if the answer correct or wrong */}
      <Answer answer={answer} />
    </div>
  );
}

export default Practice;
