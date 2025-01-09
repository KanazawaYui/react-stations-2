import "../assets/css/Comment.css";
import { useEffect, useState } from "react";

const Comment = ({ thread_id }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComment();
  });

  const getComment = () => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=1`
    )
      .then((res) => res.json())
      .then((result) => {
        setComments(result.posts);
      });
  };

  const postComment = async (e) => {
    e.preventDefault(); // ページリロードを防ぐ
    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: newComment }),
      }
    );

    if (response.ok) {
      console.log("ok");
      setNewComment(""); // フォームをリセット
      getComment(); // コメント一覧を再取得
    } else {
      console.error("Failed to post comment");
    }
  };

  return (
    <div>
      <div className="commentList">
        {comments.map((comment) => {
          return (
            <p key={comment.id} className="comment">
              {comment.post}
            </p>
          );
        })}
      </div>
      <div className="createComment">
        <form onSubmit={postComment}>
          <input
            className="inputComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="投稿しよう！"
          />
          <button type="submit" className="commentButton">
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
