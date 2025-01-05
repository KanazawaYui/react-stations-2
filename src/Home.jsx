import ThreadHeader from "./component/ThreadHeader";
import ThreadList from "./component/ThreadList";
import "./assets/css/ThreadList.css";

const Home = () => {
  return (
    <div>
      <ThreadHeader />
      <div className="threadTable">
        <ThreadList />
      </div>
    </div>
  );
};

export default Home;
