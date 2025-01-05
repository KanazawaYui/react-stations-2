import { useEffect, useState } from "react";
import "../assets/css/ThreadList.css";
import { useNavigate } from "react-router-dom";

function ThreadList() {
  const [threads, setThreads] = useState([]);

  // セルをクリックしたときの遷移処理
  const navigate = useNavigate();
  const goToThread = (thread_id) => {
    navigate(`/threads/${thread_id}`);
  };

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=10")
      .then((res) => res.json())
      .then((result) => {
        setThreads(result);
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
                <td onClick={() => goToThread(thread.id)}>{thread.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ThreadList;
