function Accumulator(num) {
    this.num = num;

    this.increment = function() {
        this.num++;
        console.log(this.num);
    }
    
    this.decrement = function() {
        this.num--;
        console.log(this.num);
    }


    
}

function CancelableAccumulator(num) {
    Accumulator.call(this, num);
    this.clear = function() {
        this.num = num;
        console.log(this.num);
    };
}

CancelableAccumulator.prototype = Object.create(Accumulator);

let accumulator = new CancelableAccumulator(1);
accumulator.increment();
accumulator.increment();
accumulator.increment();
accumulator.decrement();
accumulator.increment();

accumulator.clear();
accumulator.increment();
accumulator.increment();
accumulator.decrement();
