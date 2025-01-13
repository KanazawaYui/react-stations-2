import { useState } from "react";

import "../assets/css/CreateThread.css";

const CreateThread = () => {
  const [newThread, setNewThread] = useState("");

  const API_URL = "https://railway.bulletinboard.techtrain.dev/threads";

  const createThread = async (e) => {
    e.preventDefault(); // ページリロードを防ぐ

    // 空欄でpostされることを防ぐ
    if (newThread.trim() === "") {
      alert("スレッドタイトルを入力してください。");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newThread }),
      });

      if (response.ok) {
        console.log("ok");
        setNewThread(""); // フォームをリセット
      } else {
        console.error("Failed to post comment");
        alert("スレッド作成に失敗しました。もう一度行なってください。");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("スレッド作成に失敗しました。もう一度行なってください。");
    }
  };

  return (
    <div className="create">
      <p className="subTitle">スレッド新規作成</p>
      <form onSubmit={createThread}>
        <input
          value={newThread}
          className="createTitle"
          placeholder="スレッドタイトル"
          onChange={(e) => {
            setNewThread(e.target.value);
          }}
        />
        <div className="createButtonSet">
          <a className="toTop" href="/">
            Topに戻る
          </a>
          <button
            type="submit"
            className="createButton"
            onClick={(e) => e.target.blur()}
          >
            作成
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateThread;
