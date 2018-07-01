<?php


namespace app\interfaces;


/**
 * Interface AppModuleInterface
 */
interface AppModuleInterface
{
    /**
     * @return array Returns routes for react-router inside frontend
     */
    public static function frontendRoutes(): array;

    /**
     * @return string Returns the asset bundle class name
     */
    public static function bundle(): string;

    /**
     * @return string Unique module name for use in frontend LoadableModules
     */
    public static function moduleName(): string;
}