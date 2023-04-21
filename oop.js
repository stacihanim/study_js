Array.prototype.pow = function(n){
    return this.map((x)=>Math.pow(x,n));
 }
console.log([1,2,3].pow(2));


Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };

function a() {
    alert("test");
  }
  
console.log(a.defer(1000)());