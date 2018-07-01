<?php

use yii\helpers\ArrayHelper;

$commonConfig = [
    'id' => 'yii3crm',
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'basePath' => dirname(__DIR__),
    'bootstrap' => [],
    'logger' => [
        '__class' => \yii\log\Logger::class,
        'traceLevel' => YII_DEBUG ? 10 : 0,
        'targets' => [
            'file' => [
                '__class' => yii\log\FileTarget::class,
                'levels' => ['error', 'warning'],
            ],
        ],
    ],
    'components' => [
        'authManager' => [
            '__class' => yii\rbac\DbManager::class,
            'cache' => 'cache',
        ],
        'cache' => [
            '__class' => yii\caching\Cache::class,
            'handler' => [
                '__class' => yii\caching\FileCache::class,
            ],
        ],
        'db' => include __DIR__ . '/db.php',

    ],
];

if (YII_ENV_DEV) {
    $commonConfig['bootstrap'][] = 'gii';
    $commonConfig['modules']['gii'] = [
        '__class' => yii\gii\Module::class,
        // uncomment the following to add your IP if you are not connecting from localhost.
        'allowedIPs' => ['*'],
    ];
}
$localCommonConfig = file_exists(__DIR__ . '/common-local.php') ? include __DIR__ . '/common-local.php' : [];

return ArrayHelper::merge($commonConfig, $localCommonConfig);