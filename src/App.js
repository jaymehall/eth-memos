import "./App.css";
import EditMemoField from "./components/EditMemoField/EditMemoField";
import Memos from "./components/Memos/Memos";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const memos = [
    { title: "one", date: "6/1/2022" },
    { title: "two", date: "5/31/2022" }
  ];
  return (
    <div className="App bg-dark">
      <NavBar />
      <div style={{ display: "flex" }}>
        <Memos memos={memos} />
        <EditMemoField />
      </div>
    </div>
  );
}

export default App;
