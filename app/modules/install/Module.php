<?php

namespace app\modules\install;


use app\interfaces\AppModuleInterface;
use app\modules\install\assets\InstallerBundle;

/**
 * Class Module
 */
class Module extends \yii\base\Module implements AppModuleInterface
{
    public $defaultRoute = 'install';

    /**
     * @return array Returns routes for react-router inside admin panel
     */
    public static function frontendRoutes(): array
    {
        return [
            [
                'route' => '/installer/',
                'component' => 'Installer',
            ]
        ];
    }

    /**
     * @return string Returns the asset bundle class name
     */
    public static function bundle(): string
    {
        return InstallerBundle::class;
    }

    /**
     * @return string Unique module name for use in Admin Panel LoadableModules
     */
    public static function moduleName(): string
    {
        return 'InstallerModule';
    }
}