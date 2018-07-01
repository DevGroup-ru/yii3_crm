<?php

namespace app\tests;


use tests\TestCase;

abstract class WebAppTestCase extends TestCase
{
    protected function setUp()
    {
        parent::setUp();
        $this->mockWebApplication();
    }
}