import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import ApiHook from "./api.hook";

function App() {
  return (
    <>
      <section className="toDoListSection">
        <div className="toDoList">
          <div className="header d-flex flex-row justify-content-between align-items-center">
            <h2>
              Todo list
            </h2>
            <button type="button">
              Add
            </button>
          </div>
          <div className="toDos">
            <ApiHook></ApiHook>
          </div>
        </div>
      </section>
      <footer className="footer">
        © 2021 Vladimir Yankin
      </footer>
    </>);
}

export default App;
