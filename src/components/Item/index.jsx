import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  // 标识鼠标移入移出
  state = {
    mouse: false
  }

  // 鼠标移入移出的回调
  handMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 多选框选中、未选中的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除todo
  handleDelete = (id) => {
    // 必须要加 window
    if (window.confirm('确定删除吗?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handMouse(true)}
        onMouseLeave={this.handMouse(false)}>
        <label>
          <input type="checkbox" onChange={this.handleCheck(id)} checked={done} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
