# 学习总结
1. API：被封装的具备方法的实例，可供外部使用；<br>
2. DOM：整个页面的实例(HTML、CSS、JS)；<br>
3. 页面执行顺序：HTML -> CSS -> JS;<br>
4. var / const / let
    var 可以重复声明名称相同的变量，let则不支持;<br>
    var受变量提升影响,let则不受变量提升影响;<br>
    var在全局作用域中声明会变量会成为window对象的属性；let不会；<br>
    声明风格及最佳实践：首先const、此之let，不使用var;
5. 变量提升：函数/var 变量;
6. 字符串的方法
    1. 检索特定索引的字符串字符(a[0]);
    2. a.indexOf('abc'):获取子字符串的索引；<br>
    当在主字符串中找不到子字符串（在本例中为“vanilla”）时将返回 **-1**。
    3. 提取字符串：a.slice(0,3)//第一个参数是开始提取的字符位置，第二个参数是提取的最后一个字符的后一个位置;若只有一个参数，则从参数开始索引的位置提取剩余字符(python a[0,3])<br>
    4. 替换字符串某部分：a.replace('旧字符','新字符');<br>




语法
prompt：类似python input
document.querySelector（'button'）：选择某个标签 