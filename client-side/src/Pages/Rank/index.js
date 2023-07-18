import React, { useEffect, useState } from "react";
import { studentRank } from "../../service/rank";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/Pages/Rank/rank.module.css";
import CountUp from "react-countup";
import classNames from "classnames";

function Rank(props) {
  const [rank, setRank] = useState(0);

  const { state } = useLocation();
  const navigate = useNavigate();

  // get student rank beased on his score
  const fetchStudentRank = async () => {
    const rank = await studentRank(state.score);
    setRank(rank.rank);

    debugger;
    const storedRanks = localStorage.getItem("studentRankLog") ?? "[]";
    const parsedRank = JSON.parse(storedRanks);
    const date = new Date().toLocaleString();
    const newRank = {
      id: parsedRank.length,
      date,
      rank: rank.rank,
    };
    parsedRank.push(newRank);

    localStorage.setItem("studentRankLog", JSON.stringify(parsedRank));
  };

  useEffect(() => {
    fetchStudentRank();
    return () => {};
  }, []);

  return (
    <div className={styles.rank_container}>
      <div className={styles.card}>
        <CountUp
          className={styles.rank}
          start={0}
          end={rank}
          duration={2.75}
          prefix=""
          suffix="%"
        ></CountUp>
        <p className={styles.details}>Your Rank</p>
      </div>

      <div className={styles.button_section}>
        <button
          className={classNames(styles.button, styles.pink_button)}
          onClick={() => navigate("/")}
        >
          Try Again
        </button>
        <button
          className={classNames(styles.button, styles.blue_button)}
          onClick={() => navigate("/history")}
        >
          View History
        </button>
      </div>
    </div>
  );
}

export default Rank;
