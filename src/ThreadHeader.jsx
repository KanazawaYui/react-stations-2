import "./assets/css/ThreadHeader.css";

function ThreadHeader() {
  return (
    <header className="threadHeader">
      <p className="title">掲示板</p>
      <a className="createThread" href="/threads/new">
        スレッドを立てる
      </a>
    </header>
  );
}

export default ThreadHeader;
