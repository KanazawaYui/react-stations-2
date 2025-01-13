import { useEffect, useState } from "react";
import "../assets/css/Thread.css";

const Thread = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=10")
      .then((res) => res.json())
      .then((result) => {
        setThreads(
          result.slice(0, 7).map((item) => ({
            id: item.id,
            title: item.title,
          }))
        );
      })
      .catch((error) => {
        console.log("Fetch Error: " + error);
      });
  });

  return (
    <div className="thread">
      <p className="subTitle">新着スレッド</p>
      <table>
        <tbody>
          {threads.map((thread) => {
            return (
              <tr key={thread.id}>
                <td>{thread.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Thread;
