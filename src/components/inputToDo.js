import React, { Component } from 'react';

class InputToDo extends Component {
    state = {
      title: '',
    }

    onChange = (e) => {
      this.setState({
        title: e.target.value,
      });
    }

    submitHandler = (e) => {
      e.preventDefault();
      this.props.addToDoItemProps(this.state.title);
      this.setState({
        title: '',
      });
    }

    render() {
      return (
      <form onSubmit={this.submitHandler}>
         <input type = 'text'
                value = {this.state.title}
                name = 'title'
                placeholder = 'Type task...'
                onChange = {this.onChange}
         />
         <button type='submit'>add</button>
      </form>
      );
    }
}

export default InputToDo;