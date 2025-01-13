import "../assets/css/Comment.css";
import { useEffect, useState } from "react";

const Comment = ({ threadId }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComment();
  }, [threadId]);

  const getComment = () => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts?offset=0`
    )
      .then((res) => res.json())
      .then((result) => {
        setComments(result.posts.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  };

  const postComment = async (e) => {
    e.preventDefault(); // ページリロードを防ぐ

    // 空欄でpostされることを防ぐ
    if (newComment.trim() === "") {
      alert("コメントを入力してください。");
      return;
    }

    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
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
        alert("コメント作成に失敗しました。もう一度行なってください。");
      }
    } catch {
      console.error("Error:", error);
      alert("コメント作成に失敗しました。もう一度行なってください。");
    }
  };

  return (
    <div>
      <div className="commentList">
        {comments.length === 0 ? (
          <p className="noComment">コメントはありません</p>
        ) : (
          comments.map((comment) => {
            return (
              <p key={comment.id} className="comment">
                {comment.post}
              </p>
            );
          })
        )}
      </div>
      <div className="createComment">
        <form onSubmit={postComment}>
          <input
            className="inputComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="投稿しよう！"
          />
          <button
            type="submit"
            className="commentButton"
            onClick={(e) => e.target.blur()}
          >
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
