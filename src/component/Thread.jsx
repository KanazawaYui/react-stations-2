import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Thread = ({ title }) => {
  const [comments, setComments] = useState([]);
  const { thread_id } = useParams(); // URL から id を取得

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
    <div>
      <p>{title}</p>
      {comments.map((comment) => {
        return <p key={comment.id}>{comment.post}</p>;
      })}
    </div>
  );
};

export default Thread;
