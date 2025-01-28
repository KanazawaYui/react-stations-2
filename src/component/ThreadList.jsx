import { useEffect, useState } from "react";
import "../assets/css/ThreadList.css";
import { useNavigate } from "react-router-dom";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  // セルをクリックしたときの遷移処理
  const navigate = useNavigate();
  const goToThread = (threadId) => {
    navigate(`/threads/${threadId}`);
  };

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=10")
      .then((res) => res.json())
      .then((result) => {
        setThreads(
          result.slice(-7).map((item) => ({
            id: item.id,
            title: item.title,
          }))
        );
      })
      .catch((error) => {
        console.log("Fetch Error: " + error);
      });
  }, []);

  return (
    <div className="thread">
      <p className="subTitle">新着スレッド</p>
      <table>
        <tbody>
          {threads.map((thread) => {
            return (
              <tr key={thread.id}>
                <td onClick={() => goToThread(thread.id)}>{thread.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ThreadList;
