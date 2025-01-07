import CommentList from "./component/CommentList";
import ThreadHeader from "./component/ThreadHeader";
import Comment from "./component/Comment";

const Threads = () => {
  return (
    <div>
      <ThreadHeader />
      <div>
        <CommentList />
        <Comment />
      </div>
    </div>
  );
};

export default Threads;
