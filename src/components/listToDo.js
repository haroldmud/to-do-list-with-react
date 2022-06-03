import React, { Component } from 'react';
import ItemToDo from './itemToDo';

class ListToDo extends Component {
  render() {
    return (
         <ul>
             {this.props.todo.map((myList) => <ItemToDo
                    key={myList.id}
                    todo={myList}
                    changeHandlePropsList = {this.props.changeHandlerProps}
                    deleteListPropsItem = {this.props.deleteListProps}
                />)}
         </ul>
    );
  }
}

export default ListToDo;