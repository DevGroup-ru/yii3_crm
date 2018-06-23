<?php

use yii\helpers\ArrayHelper;

$commonConfig = [
    'id' => 'yii3crm',
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'components' => [
        'db' => include __DIR__ . '/db.php',
        'log' => [
            '__class' => yii\log\Logger::class,
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    '__class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
    ],
];
$localCommonConfig = file_exists(__DIR__ . '/common-local.php') ? include __DIR__ . '/common-local.php' : [];

return ArrayHelper::merge($commonConfig, $localCommonConfig);