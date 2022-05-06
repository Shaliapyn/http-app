import "./App.css";
import DeleteExample from "./components/DeleteExample";
import GetExample from "./components/GetExample";
import PatchExample from "./components/PatchExample";
import PostExample from "./components/PostExample";
import PutExample from "./components/PutExample";

function App() {

    return (
      <div className="App">
        <GetExample />
        <PostExample />
        <PutExample />
        <DeleteExample />
        <PatchExample />
      </div>
    );
  }
  


export default App;
