import React, { Component } from 'react'
// 生成全球唯一的id
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    // 解构赋值
    const { keyCode, target } = event

    // 判断是否是回车按键
    if (keyCode !== 13) return

    // 添加的 todo 名字不能为空
    if (target.value === '') return

    // 准备好一个todo对象
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }

    // 将 todoObj 传递给 App
    this.props.addTodo(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>

    )
  }
}
