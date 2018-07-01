<?php

use yii\console\controllers\MigrateController;
use yii\helpers\ArrayHelper;

$consoleConfig = [
    'controllerMap' => [
        'migrate' => [
            'class' => MigrateController::class,
            'migrationPath' => [
                '@app/migrations',
                '@app/modules/install/migrations',
                '@yii/rbac/migrations',
            ],
            'migrationNamespaces' => [

            ],
        ],
    ],
];
$commonConfig = include __DIR__ . '/common.php';
$localConsoleConfig = file_exists(__DIR__ . '/console-local.php') ? include __DIR__ . '/console-local.php' : [];

return ArrayHelper::merge(
    $commonConfig,
    $consoleConfig,
    $localConsoleConfig
);