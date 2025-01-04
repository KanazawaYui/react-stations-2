import CreateThread from "./CreateThread";
import ThreadHeader from "./ThreadHeader";
import "./assets/css/ThreadNew.css";

function ThreadNew() {
  return (
    <div>
      <ThreadHeader />
      <div className="createThreadSet">
        <CreateThread />
      </div>
    </div>
  );
}

export default ThreadNew;
