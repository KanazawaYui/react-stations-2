import CreateThread from "./component/CreateThread";
import ThreadHeader from "./component/ThreadHeader";
import "./assets/css/ThreadNew.css";

const ThreadNew = () => {
  return (
    <div>
      <ThreadHeader />
      <div className="createThreadSet">
        <CreateThread />
      </div>
    </div>
  );
};

export default ThreadNew;
