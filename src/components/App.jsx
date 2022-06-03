import React, { Component } from 'react';
import Header from './headerToDo';
import ListToDo from './listToDo';
import itemToDo from './itemToDo';
import InputToDo from './inputToDo';

class ToDo extends Component {
  state = { 
    list : [{title: 'Meditation', id : 1, completed: false}, 
            {title: 'Cardio', id : 2, completed: false}, 
            {title: 'Shower', id : 3, completed: false}, 
            {title: 'Breakfasr', id : 4, completed: false},
            {title: 'Hustle', id : 5, completed: false}
          ]
  }

  updateId() {
    this.setState(prevState => ({
      list: prevState.list.map((todo, i) => {
        todo.id = i + 1;
      }),
    }));
  }

  changeHandler = id => {
    this.setState(prevState => ({
      list: prevState.list.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
          completed : ! todo.completed
          }
        }
        return todo;
      }),
    }));
  };

  deleteList = id => {
    this.updateId();
    this.setState({
      list : [
        ...this.state.list.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
    
  }

  addToDoItem = title => {
    console.log('title', this.state.list)
    const newList = {
      title: title,
      id: this.state.list.length + 1,
      completed :false
    }
    this.setState({
      list: [...this.state.list, newList]
    });
  }

  render() { 
    return (
        <div className='theList'>
          <Header />
          <InputToDo
            addToDoItemProps = {this.addToDoItem}
          />
          <ListToDo 
            todo = {this.state.list}
            changeHandlerProps = {this.changeHandler}
            deleteListProps = {this.deleteList}
          />
        </div>
    );
  }

  
}
 
export default ToDo;
