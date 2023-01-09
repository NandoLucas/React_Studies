import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itens: [], text: "" };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const item = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      itens: state.itens.concat(item),
      text: "",
    }));
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>Tarefas</h3>
        <TodoList itens={this.state.itens} />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Inserir</button>
        </form>
      </div>
    );
  }
}

export default App;
