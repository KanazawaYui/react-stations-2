import ThreadHeader from "./component/ThreadHeader";
import Comment from "./component/Comment";
import { useParams } from "react-router-dom";

const Threads = () => {
  const { thread_id } = useParams(); // URL から id を取得

  return (
    <div>
      <ThreadHeader />
      <Comment thread_id={thread_id} />
    </div>
  );
};

export default Threads;
