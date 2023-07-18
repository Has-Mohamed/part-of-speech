import styles from "../styles/Pages/Practice/practice.module.css";

function Progress({ wordIndex, wordList }) {
  const progressBarState = (wordIndex / wordList.length) * 100 || 0;
  return (
    <div className={styles.progress}>
      <p>{`${wordIndex} / ${wordList.length}`}</p>
      <progress value={progressBarState} max="100"></progress>
    </div>
  );
}

export default Progress;
