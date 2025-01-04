import ThreadHeader from "./ThreadHeader";
import Thread from "./Thread";
import "./assets/css/ThreadList.css";

function ThreadList() {
  return (
    <div>
      <ThreadHeader />
      <div className="threadTable">
        <Thread />
      </div>
    </div>
  );
}

export default ThreadList;
