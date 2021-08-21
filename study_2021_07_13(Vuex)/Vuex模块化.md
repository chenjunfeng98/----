 # vuex模块化+命名空间
 1. 修改store.js
  ```javascript
  import {mapState ...} from 'Vuex';

  const demo01 = {
    namespaced:true,//开启命名空间
    state:{x:1},
    mutations:{...},
    getters:{...},
    actions:{...}
  }

  const demo02 = {
    namespaced:true,//开启命名空间
    state:{...},
    mutations:{...},
    getters:{...},
    actions:{...}
  }

  const store = new Vuex.Store({
    modules:{
      demo1,
      demo2
    }
  })
  ```
  2. 开启命名空间后,组件中获取state数据
  ```javascript
  ///方式一、直接获取
  this.$store.state.demo1.x
  ///方式二、借助mapState方式获取(需开启命名空间后才可以获取数据)
  computed:{
    ...mapState('demo1',{x:z})
    ///x为组件中的数据名称 z为store中的state数据名称;且mapState生成的为**计算属性**

  }
  ```

  3. 开启命名空间后,组件中获取getters数据
  ```javascript
  ///方式一、直接获取
  this.$store.state['demo1/getter名称']
  ///方式二、借助mapGetters方式获取(需开启命名空间后才可以获取数据)
  computed:{
    ...mapState('demo1',{x:x})
  }
  ```

  4. 开启命名空间后,组件中调用commit
  ```javascript
  ///方式一、直接提交
  this.$store.commit('demo1/mutation函数名',value)
  ///方式二、借助mapMutations方式提交(参数需在插值语法中添加:x(value))
  methods:{
    ...mapMutations('demo1',{x:y})
    ///x为组件中的函数名 y为store中的函数名
  }
  ```

  5. 开启命名空间后,组件中调用dispatch
  ```javascript
  ///方式一、直接提交
  this.$store.dispatch('demo1/mutation函数名',value)
  ///方式二、借助mapActions方式提交(参数需在插值语法中添加:x(value))
  methods:{
    ...mapmapActions('demo1',{x:y})
    ///x为组件中的函数名 y为store中的函数名
  }
  ```
