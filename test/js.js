var that
class Tab {
    constructor(id){
        that = this;
        this.main = document.querySelector(id);
        this.content = this.main.querySelector('.content');
        this.btn = this.main.querySelector('.title button');
        this.list = this.main.querySelector('.title ul');
        this.init();
    }
    //绑定事件
    init() {
        this.updateNode();
        for(let i=0;i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.icon[i].onclick = this.removeTab;
        };
            this.btn.onclick = this.add;
    }
    //重新获取li、section数量
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.icon = this.main.querySelectorAll('.icon');
    }

    clearicon(){

        for(let i=0;i<this.lis.length;i++){
            this.lis[i].className = '';
            this.sections[i].className='';
        }
    }
    //1. 切换功能
    toggleTab() {
            that.clearicon();
            this.className = 'click';
            that.sections[this.index].className = 'appear';        
    }
    //2. 添加功能
    add() {
        that.clearicon();
        let li = "<li class='click'><span>test</span><span class='icon'>x</span></li>";
        let sce = "<section class='appear'>content</section>";
        that.list.insertAdjacentHTML('beforeend',li);
        that.content.insertAdjacentHTML('beforeend',sce);
        that.init();
    }

    //3. 删除功能
    removeTab(e){
        e.stopPropagation();
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if(document.querySelector('.click')) return
        index--;
        that.lis[index] &&that.lis[index].click();
    }

    
}



new Tab('#tab')