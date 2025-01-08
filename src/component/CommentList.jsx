import { useEffect, useState } from "react";
import "../assets/css/CommentList.css";

const CommentList = (thread_id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=1`
    )
      .then((res) => res.json())
      .then((result) => {
        setComments(result.posts);
      });
  });

  return (
    <div className="commentList">
      {comments.map((comment) => {
        return (
          <p key={comment.id} className="comment">
            {comment.post}
          </p>
        );
      })}
    </div>
  );
};

export default CommentList;
