import ThreadHeader from "./component/ThreadHeader";
import Thread from "./component/Thread";
import "./assets/css/ThreadList.css";

const ThreadList = () => {
  return (
    <div>
      <ThreadHeader />
      <div className="threadTable">
        <Thread />
      </div>
    </div>
  );
};

export default ThreadList;
