<?php

namespace app\tests;


use tests\TestCase;

abstract class AppTestCase extends TestCase
{
    protected function setUp()
    {
        parent::setUp();
        $this->mockApplication();
    }
}