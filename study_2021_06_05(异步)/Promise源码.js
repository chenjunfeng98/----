///成功的条件
/// then return 普通的JS value
/// then return 新的promise成功态的结果 value

///失败的条件
///then return 新的promise失败态的结果 reason
///then 抛出了异常 throw new Error()

class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onfulfilledCallback = [];
    this.onrejectedCallback = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onfulfilledCallback.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onrejectedCallback.forEach((fn) => fn());
      }
    };
    executor(resolve, reject);
  }

  then(onfulfilled, onrejected) {
    if (this.status === "fulfilled") {
      onfulfilled(this.value);
    }
    if (this.status === "rejected") {
      onrejected(this.reason);
    }
    if (this.status === "pending") {
      this.onfulfilledCallback.push(() => onfulfilled(this.value));
      this.onrejectedCallback.push(() => onrejected(this.reason));
    }
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
  //                                 resolve('success')
});

promise.then((value) => console.log(value + "1"));

promise.then((value) => console.log(value + "2"));
