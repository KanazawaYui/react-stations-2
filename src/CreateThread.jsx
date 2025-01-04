import "./assets/css/CreateThread.css";

function CreateThread() {
  return (
    <div className="create">
      <p className="subTitle">スレッド新規作成</p>
      <input className="createTitle" placeholder="スレッドタイトル"></input>
      <div className="createButtonSet">
        <a className="toTop" href="/">
          Topに戻る
        </a>
        <button className="createButton">作成</button>
      </div>
    </div>
  );
}

export default CreateThread;
