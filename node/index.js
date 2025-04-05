class Test {
  count = 1;

  constructor(count = null) {
    if (count) {
      this.count = count;
    }
  }

  increment() {
    ++this.count;
  }

  decrease() {
    --this.count;
  }
}

const test = new Test(2);

test.increment();
test.decrease();
test.increment();

console.log(3 === test.count);
