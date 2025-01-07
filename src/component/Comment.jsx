import "../assets/css/Comment.css";

const Comment = () => {
  const postComment = () => {};
  return (
    <div className="createComment">
      <input className="inputComment" placeholder="投稿しよう！"></input>
      <button className="commentButton">投稿</button>
    </div>
  );
};

export default Comment;
