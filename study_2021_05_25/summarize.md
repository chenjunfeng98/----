
# 学习总结

1. 判断语句：<br>
if (条件) {执行代码1}<br>
else if (条件) {执行代码2}<br>
else {执行代码3}<br>

swtich(值){<br>
case 条件1：执行代码1;<br>
case 条件2：执行代码2;<br>
case 条件3：执行代码3;<br>
default : 执行代码4<br>
}<br>

2. 循环语句：<br>
for(var i=0,i<10,i++){执行代码}<br>
var i=0; while(i<10){执行代码}<br>
var i=0; do {执行代码} while(i<10)<br>

3. 匿名函数:
函数表达式：把函数当作值赋值给变量或者元素的事件<br>
例：var a = function() {} /a.onclick = function() {}<br>
匿名函数也称为函数表达式。函数表达式与函数声明有一些区别。函数声明会进行声明提升（declaration hoisting），而函数表达式不会。

4. 事件处理

DOM0级事件处理(默认事件冒泡)：a.onclick = function(){}<br>
DOM2级事件处理(默认事件冒泡)：a.addEventListener('click',function(){},True/False)<br>
事件冒泡：从下到上<br>
事件捕获：从上到下<br>
优先级：事件捕获>事件冒泡<br>

## 每篇一个JS小技巧
1. onchange事件监听器
2. appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。(<‘ul’>末尾添加新标签)
3. setAttribute('class','msgBox') 的DOM方法给panel元素添加了一个值为msgBox 的class 类属性。
4. b.onclick/textContent = function () :表示将函数赋值给变量的一个属性（点击/文本内容）->函数表达式


