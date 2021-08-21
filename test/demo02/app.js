const express = require('express');
const fs = require('fs');
const path = require('path');
const {getId,addId} = require('./module/index');



const dbpath = path.join(__dirname,'./db.json')
const app = express();
///配置解析表单请求体：(数据格式)application / json
//.json()将客户端上传的参数按照就json格式转化成js对象
app.use(express.json())
///配置解析表单请求体：(数据格式)application / x-www-form-urlencoded
app.use(express.urlencoded())

//获取数据
app.get('/todos',async (req,res)=>{
    const tododb = await getId(dbpath)
    res.status(200).json(tododb.todos);  
})

//获取单个数据
app.get('/todos/:id',(req,res)=>{
    fs.readFile('./db.json','utf-8',async (err,data)=>{
        const tododb = await getId(dbpath);
        ///req.params.id获取路径传入参数
        let todoItem = tododb.todos.find(item => item.id === Number(req.params.id));
        if(!todoItem){
            return res.status(404).end()
        }
        res.status(200).json(todoItem);
    })
    
})
app.post('/todos',async (req,res)=>{
    try {
         ///获取客户端请求体信息req.body
        let todoItem = req.body;
        ///数据验证
        if(!todoItem.title){
            res.status(422).json({
                error:'The title is required'
            });
        }
        ///验证数据通过,把数据存入db.json中
        const tododb = await getId(dbpath);       
        let todoItemId = tododb.todos[tododb.todos.length-1];
        todoItem.id = todoItemId? todoItemId.id+1:1;
        tododb.todos.push(todoItem);
        console.log(typeof tododb)///Object 需要转化成json字符串
        await addId(dbpath,tododb);
        //发送响应
        res.status(200).json(todoItem)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.patch('/todos/:id',async (req,res)=>{
    let todoItem = req.body;
    const tododb = await getId(dbpath); 
    todoItem.id = req.params.id;
    let todoItemIndex = tododb.todos.find(item=>item.id === Number(todoItem.id));
    console.log(todoItemIndex,todoItem.id);
    Object.assign(todoItemIndex,todoItem);
    await addId(dbpath,tododb);
    res.status(200).json(tododb)
})

app.delete('/todos/:id',async (req,res)=>{
    let deleteItemId = req.params.id;
    const tododb = await getId(dbpath); 
    let deleteItemIndex = tododb.todos.find(item=>item.id ===Number(deleteItemId));
    tododb.todos.splice(deleteItemId-1,1);
    await addId(dbpath,tododb);
    res.status(200).json(deleteItemIndex)
})

app.listen(3000,()=>{
    console.log('success!!!')
})

