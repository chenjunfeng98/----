///初始化
var flag = 1;
var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var gameHistory = [];
var items = document.querySelectorAll('.btn');
var start = document.querySelector('.start')
var list = document.querySelector('ol')
var players = document.querySelector('.players');

///设置重置键，清除各自内容和恢复disabled属性
const restart = ()=>{
start.addEventListener('click', function(){
    for(let i=0;i<items.length;i++){
        items[i].innerHTML='';
        items[i].disabled='';///有待商榷
        items[i].addEventListener('click',Click);
        flag=1;
        gameHistory=[];
        players.innerHTML='Next Player：X';
    };
    ///清空li标签
    const historyli = document.querySelectorAll('ol li');
    let index=0;
    for(let li of historyli){
      if(index>0){
        list.removeChild(li)
      };
      index++;
    }
})};



    ///注册事件
    function Click() {
      ///判断玩家
      const player = flag %2 ? 'X':'O';
      const nextplayer = flag %2 ? 'O':'X';
      const num = flag;//点击事件需要
      this.innerHTML = `${player}`;
      ///下个玩家
      players.innerHTML = `Next Player：${nextplayer}`;
      const step = this.getAttribute('id');
      ///记录数据
      gameHistory.push({id:step,content:player})
      console.log(gameHistory);
      console.log(`步数${flag}`);
      ///创建li标签
      const rec = document.createElement('li');
      const btn = document.createElement('button');
      btn.innerHTML='Go to move #'+flag;
      rec.appendChild(btn);
      list.appendChild(rec);
      ///缺少按钮事件
      
      btn.onclick = function(){
      
         const index = num;
         const his = gameHistory.slice(0, Number(index) );
         recoverFromHistory(his);

      }
      ///去除点击事件
      this.removeEventListener('click',Click);
      Winner(player);
      flag++;
      }


///点击按钮事件函数
const recoverFromHistory = (his) => {
  for (let item of items) {
    const id = item.getAttribute('id')
    const h = his.find(item => Number(item.id) === Number(id));
    console.log(h);
    ///const his = his.find((his) => his.id === Number(index));
    if (!h) {//(三元表达式)
      item.innerHTML = '';
    } else {
      item.innerHTML = h.content;
    }
  };
};


///获胜规则(some/every)获胜即可弹出return
function Winner(player){
  if(gameHistory.length>4){
  win.forEach(function(item){
    var a = 0;
    for(let step of gameHistory ){
      if(step.content===player){
          if(item.includes(Number(step.id))){
            a++;
            if(a===3){ //
              players.innerHTML=`Winner：${player}`

            };
          };
        };  
      };
    })
  }}

///游戏执行函数
  const game=() => {
    for(let i=0;i<items.length;i++){ //&& ||
      items[i].addEventListener('click',Click);
      }};

      
 const main =()=>{
  restart();
  game();
 }

 main();

