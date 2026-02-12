import JsBasics from "./concepts/01-js-basics";
import ComponentsProps from "./concepts/02-components-props";
import UseStateEvents from "./concepts/03-useState-events";
import ListsConditional from "./concepts/04-lists-conditional";
import TodoApp from "./mini-projects/TodoApp";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Week-1 Fundamentals</h1>

      <JsBasics />
      <hr />

      <ComponentsProps />
      <hr />

      <UseStateEvents />
      <hr />

      <ListsConditional />
      <hr />

      <TodoApp />
    </div>
  );
}
