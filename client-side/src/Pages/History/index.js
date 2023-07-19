import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Pages/History/history.module.css";

function History(props) {
  const [rankLog, setRankLog] = useState([]);

  const navigate = useNavigate();

  // get student rank beased on his score

  useEffect(() => {
    const studentLog = JSON.parse(
      localStorage.getItem("studentRankLog") ?? "[]"
    );

    setRankLog(studentLog);

    return () => {};
  }, []);

  return (
    <div className={styles.history_container}>
      <h2>Test History</h2>
      <div className={styles.table_container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_header}>#</th>
            <th className={styles.table_header}>Date</th>
            <th className={styles.table_header}>Rank</th>
          </tr>
        </thead>
        <tbody>
          {rankLog &&
            rankLog.map((r) => (
              <tr key={r.id} className={styles.table_row}>
                <td className={styles.table_cell}>{r.id}</td>
                <td className={styles.table_cell}>{r.date}</td>
                <td className={styles.table_cell}>{r.rank}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      <button className={styles.button} onClick={() => navigate("/")}>
        Try Again
      </button>
    </div>
  );
}

export default History;
