const PENGDING = 'PENGDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

class MyPromise {
    constructor(executor){
        this.status = PENGDING;
        this.value = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectCallbacks = [];

        const resolve = (value)=>{
            if(this.status === 'PENGDING'){
                this.status = FULFILLED;
                this.value = value;
                setTimeout(()=>{
                    try {
                        this.onFulfilledCallbacks.forEach(fn=>fn(this.value))
                    } catch (error) {
                        this.onRejectCallbacks.forEach(fn=>fn(error))
                    }
                })
            }
        };
        const reject = (value)=>{
            if(this.status === 'PENGDING'){
                this.status = REJECTED;
                this.value = value;
                setTimeout(()=>{
                    this.onRejectCallbacks.forEach(fn=>fn(this.value))
                })
            }
        };
        try {
            executor(resolve,reject);
        } 
        catch (error) {
            reject(error)
        } 
    }
    ///let promise...
    then(ONFULFILLED,ONREJECTED){
        if(typeof ONFULFILLED !=='function' ){
            ONFULFILLED=()=>this.value
        }
        if(typeof ONREJECTED !=='function' ){
            ONREJECTED=()=>{throw this.value}
        }
        return new MyPromise((resolve,reject)=>{
            if(this.status === 'FULFILLED'){
                setTimeout(()=>{
                    try {
                        let result = ONFULFILLED(this.value);
                        if(result instanceof MyPromise){
                            result.then(resolve,reject)///下个then的onfulfilled/onrejected
                        }else{
                            resolve(result)
                        }
                    } catch (error) {
                        reject(error)
                    }
                    
                })
            }
            if(this.status === 'REJECTED'){
                    setTimeout(()=>{
                        try {
                            let result = ONREJECTED(this.value);
                            if(result instanceof Mypromise){
                                result.then(resolve,reject)
                            }else{
                                resolve(result)
                            }
                        } catch (error) {
                            reject(error)
                        }
                        
                    })
            }
            if(this.status === 'PENGDING'){
                 this.onFulfilledCallbacks.push(
                    (value)=>{let result = ONFULFILLED(value) ;
                                resolve(result)});

                this.onRejectCallbacks.push(
                    (value)=>{let result = ONREJECTED(value) ;
                                resolve(result)});
                
            }
        })

    }
    
}

let mypromise = new MyPromise((resolve,reject)=>{
    // setTimeout(()=>{
    //     // reject('error');
    //     // throw new Error('newerror')
    //     console.log('test')
    //     reject('error')
        
    // })
    // reject('error');
    resolve('success!!!')
    // console.log(sad)
})

mypromise
// .then()
.then((value)=>{ return new MyPromise((resolve,reject)=>{resolve(value+'123')})},(reason)=>{console.log('reject'+reason)})
.then(value=>console.log('promise2',value),reason=>{console.log('reject2'+reason)})
// .then(value=>console.log(value))
// console.log(mypromise)
// function test(reason){
//     console.log(reason)
// }

// let o = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     // resolve('success')//setTimeout
//     // console.log('test')
//     // },2000)
//     reject('success')
//     // console.log(222)
//     })

// o.then().then(value=>console.log(value),reason=>console.log('reject'+reason));
// console.log('test1111')

// static reject(){
//     return new MyPromise(resolve,reject){
//         reject(reason)
//     }
// }