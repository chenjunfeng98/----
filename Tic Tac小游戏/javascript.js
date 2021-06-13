var items = document.querySelectorAll('.btn');
var start = document.querySelector('.start')
var list = document.querySelector('ol')
var player = document.querySelector('.player');
///设置重置键，清除各自内容和恢复disabled属性
start.addEventListener('click', function(){
    for(var i=0;i<items.length;i++){
        items[i].innerHTML='';
        items[i].disabled='';
        final_X=[];
        final_O=[];
        flag=0;
        player.innerHTML='Next Player：X';
    };
})


for(var i=0;i<items.length;i++){
    var flag = 0;
    var final_X = [];///X玩家点击位置
    var final_O = [];///O玩家点击位置
    var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    items[i].onclick = function (){
        ///判断玩家如果为奇数则为X玩家,否则为O玩家
        if (flag%2!==1){
        ///点击格子显示内容
        var num = flag;
        ///console.log(num);输出步数
        this.innerHTML = 'X';
        player.innerHTML='Next Player：O';
        this.setAttribute('flag',flag);
        
        ///设置每个格子只能点击一次
        this.setAttribute('disabled',false)
        var rec = document.createElement('li');
        var btn = document.createElement('button');
        ///创建步骤<li>
        btn.innerHTML='Go to move #'+flag;
        
        ///绑定<li>点击事件
        /*btn.addEventListener('click',function(){
            items[num].innerHTML='';}
            )*/
        ///添加<li>标签
        rec.appendChild(btn);
        list.appendChild(rec);
        flag++;
        ///获取步骤的格子位置(index属性)
        var k =this.getAttribute('index');
        final_X.push(k);
        ///获胜逻辑
        Win_X();
        console.log(final_X);
        
        
        }
         else{
            var num = flag;
            ///console.log(flag);输出步数
            this.innerHTML = 'O';
            player.innerHTML='Next Player：X';
            this.setAttribute('flag',flag);
            this.setAttribute('disabled',false);

            var rec = document.createElement('li');
            var btn = document.createElement('button');
            
            ///创建步骤<li>
            btn.innerHTML='Go to move #'+flag;
            
            ///绑定<li>点击事件
            /*btn.addEventListener('click',function(){
                items[num].innerHTML='';
                })*/
            ///添加<li>标签
            rec.appendChild(btn);
            list.appendChild(rec);
            flag++;
            
            var k =this.getAttribute('index');
            final_O.push(k);
            Win_O();
            console.log(final_O);

         }
    }
    
    }

///获胜规则

function Win_X(){
for(var i=0;i<win.length;i++){
    var a = 0;
    for(var k=0;k<final_X.length;k++){
      if(win[i].includes(Number(final_X[k]))){
        a++;
        if(a==3){
          player.innerHTML='Winner X';
          for(var i=0;i<items.length;i++){
              items[i].disabled = 'false'
          };
        };
      };
    }; 
  };
};

function Win_O(){
    for(var i=0;i<win.length;i++){
        var a = 0;       
        for(var k=0;k<final_O.length;k++){
          if(win[i].includes(Number(final_O[k]))){
            a++;
            if(a==3){
              player.innerHTML='Winner O';
              for(var i=0;i<items.length;i++){
                items[i].disabled = 'false'
            };
            };
          };
        }; 
      };
    };