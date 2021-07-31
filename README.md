运行案例语句：`npm start`
# 一、最终效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/d07102b30f6d49e08d2faab0b02462d2.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xhZHJlYW0=,size_16,color_FFFFFF,t_70)
# 二、实现功能
 - 添加 toddo
 - 删除 todo
 - 全选/取消全选 todo
 - 清除所有已完成 todo
# 三、通过学习到的知识
### 1.	拆分组件、实现静态组件。注意 ==class 与 style 的写法==

```javascript
 className="todo-wrap"
 style={{ backgroundColor: mouse ? '#ddd' : 'white' }
```
### 2.	动态初始化列表,如何确定将数据放在哪个组件的 state中?
--- 某个组件使用:放在其自身的 state中
--- 某些组件使川:放在他们共同的父组件 state中(官方称此操作为**状态提升**
### 3.**关于父子之间通**
 --- 【父组件】给【子组件】传通数据:通过 props传递
 --- 【子组件】给【父组件】传数据:通过 props传递,要求父提前给子传递一个函数
```javascript
// 【父组件】给【子组件】传递数据
<Header addTodo={this.addTodo} />

//【子组件】给【父组件】传递数据
//子组件内写：
  handleClearDone = () => {
    this.props.clearAllDone()
  }
//父组件内定义函数
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }
```
### 4.	注意 defaultchecked和 checked的区别,类似的还有: defaultvalue和 value
defaultchecked：只在第一次渲染有作用，后续checked值改变，其样式不会发生对应改变

checked：react 中使用 checked 必须和 onChange 事件配合使用，否则会有警告
### 5.**状态在哪里,操作状态的方法就在哪里**
