import React, { Component } from 'react';

class ItemToDo extends Component {
  render() {
    return (
            <li >
                <input
                    type='checkbox'
                    checked={this.props.todo.completed}
                    onChange={() => {
                      this.props.changeHandlePropsList(this.props.todo.id);
                    }}
                />
                <span className={`line${this.props.todo.completed}`}>
                    {this.props.todo.title}
                </span>
                <button onClick={() => { this.props.deleteListPropsItem(this.props.todo.id); }}>
                    Delete
                </button>
            </li>
    );
  }
}

export default ItemToDo;