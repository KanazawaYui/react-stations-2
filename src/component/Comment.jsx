import "../assets/css/Comment.css";
import { useState } from "react";

const Comment = (threadId) => {
  const [newComment, setNewComment] = useState("");

  const postComment = async () => {
    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newComment }),
      }
    );

    if (response.ok) {
      setNewComment(""); // フォームをリセット
      fetchComments(); // コメント一覧を再取得
    } else {
      console.error("Failed to post comment");
    }
  };

  return (
    <div className="createComment">
      <form onSubmit={postComment}>
        <input
          className="inputComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="投稿しよう！"
        ></input>
        <button type="submit" className="commentButton">
          投稿
        </button>
      </form>
    </div>
  );
};

export default Comment;
