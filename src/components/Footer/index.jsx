import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选 checkbox 的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  // 清楚所有已完成的回调
  handleClearDone = () => {
    this.props.clearAllDone()
  }


  render() {
    const { todos } = this.props
    // 已完成个数
    const doneCount = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0)
    }, 0)
    // 全部个数
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
      </div>

    )
  }
}
