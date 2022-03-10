import React from 'react'

let id = 0

const getId = () => ++id

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos,
    showCompleteds: true,
    input: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.setState({
      ...this.state,
      input: '',
      todos: this.state.todos.concat({
        id: getId(),
        name: this.state.input,
        completed: false,
      }),
    })
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      input: value,
    })
  }

  toggleShouldShow = () => {
    this.setState({
      ...this.state,
      showCompleteds: !this.state.showCompleteds,
    })
  }

  toggleCompleted = id => () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        return td.id == id
          ? { ...td, completed: !td.completed }
          : td
      })
    })
  }

  render() {
    return (
      <div>
        <div id="todoList">
          <h2 data-testid='todoListHeading'>Todos:</h2>
          {
            this.state.todos.reduce((acc, td) => {
              if (this.state.showCompleteds || !td.completed) return acc.concat(
                <div key={td.id} onClick={this.toggleCompleted(td.id)} className="todo">
                  {td.name}{td.completed ? ' ✔️' : ''}
                </div>
              )
              return acc
            }, [])
          }
        </div>
        <form id="todoForm" onSubmit={this.onSubmit}>
          <input
            value={this.state.input}
            onChange={this.onChange}
            placeholder="Type todo"
            type="text"
          />
          <button id="submitTodo" disabled={!this.state.input}>Submit Todo</button>
        </form>

        <button id="toggleVisibility" onClick={this.toggleShouldShow}>
          {this.state.showCompleteds ? 'Hide' : 'Show'} Completed
        </button>
      </div>
    )
  }
}
