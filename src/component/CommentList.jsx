import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/CommentList.css";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { thread_id } = useParams(); // URL から id を取得

  useEffect(() => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=0`
    )
      .then((res) => res.json())
      .then((result) => {
        setComments(result.posts);
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  });

  return (
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
  );
};

export default CommentList;
