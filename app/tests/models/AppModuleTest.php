<?php

namespace app\tests\models;


use app\models\AppModule;
use app\modules\install\Module;
use app\tests\WebAppTestCase;

class AppModuleTest extends WebAppTestCase
{
    public function testInstaller()
    {
        $allModules = AppModule::availableModules();
        static::assertArrayHasKey(Module::moduleName(), $allModules);
    }
}