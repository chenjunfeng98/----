# 学习总结




## 每篇一个JS小技巧
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

1. 这两种写法的差别

2. this指向的四种规则：<br>
1、默认绑定规则：函数的独立执行；<br>
2、隐式绑定规则：谁调用就指向谁(隐式丢失、参数赋值);<br>
3、显式绑定：call/apply/bind;<br>
4、new 绑定;<br>
