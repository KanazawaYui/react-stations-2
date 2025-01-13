import ThreadHeader from "./component/ThreadHeader";
import Comment from "./component/Comment";
import { useParams } from "react-router-dom";

const Threads = () => {
  const { threadId } = useParams(); // URL から id を取得

  return (
    <div>
      <ThreadHeader />
      <Comment threadId={threadId} />
    </div>
  );
};

export default Threads;
