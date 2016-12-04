import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addAsyncTodo } from '../actions'
import { fetchPosts } from '../actions/async'

let AddTodo = ({ dispatch, todos }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // dispatch(addTodo(input.value))
        // console.log('todos' , todos);
        dispatch(fetchPosts('reactjs')).then((response) => {
          dispatch(addAsyncTodo(response.posts[0].author));
        });
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos // current state
  };
}
AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
