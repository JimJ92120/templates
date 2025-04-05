<?php
class Test {
    
    public function __construct(
        private int $_count = 0

    ) {}

    public function increment(): void {
        ++$this->_count;
    }

    public function decrease(): void {
        --$this->_count;
    }

    public function __get($key)
    {
        if ($key == "count") {
            return $this->_count;
        }
    }
}

$test = new Test(2);

$test->increment();
$test->decrease();
$test->increment();

var_dump($test->count);
