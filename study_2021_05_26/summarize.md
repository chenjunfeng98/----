# 学习总结


问题：
1. 回调函数是啥
2. Array3=Array1.concat(Array2),如Array1增加一个元素,Array3是否会变 



## 每篇一个JS小技巧
1. forEach 是 ES5 中操作数组的一种方法，主要功能是遍历数组，其实说穿了，就是 for 循环的加强版，该语句需要一个回调函数，作为参数。 ***forEach() 对于空数组是不会执行回调函数的。***

回调函数的形参，依次为，value：遍历的数组内容；index：对应的数组索引，array：数组本身。
例：
var arr = ['a','b','c'];<br>	
	arr.forEach(回调函数->***function(value,index,array***){<br>
		console.log(value);<br>
		console.log(index);<br>
		console.log(array);<br>
		})

回调函数参考链接：https://segmentfault.com/a/1190000012026011
回调函数：类比“钩子”,属于闭包的一部分。可将下一作用域参数以函数的形式返回出来。

2. a.innerHTML属性(效果textContent)
innerHTML主要的作用是在标签中设置新的html标签内容，是有标签效果的。
innerHTML与innerText 的区别：<br>
innerHTML：获取标签中间的所有内容(包括标签下的标签);<br>
innerText：获取标签中间的文本内容,但是标签中如果还有标签,那么最里面的标签的文本内容也能获取；
