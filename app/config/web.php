<?php

use yii\helpers\ArrayHelper;

$webConfig = [

    'components' => [
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        'request' => [
            '__class' => \yii\web\Request::class,
            'baseUrl' => '/',
            'cookieValidationKey' => ';u32hgoruifgbas',
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
    ],
    'modules' => [

    ],
];
$commonConfig = include __DIR__ . '/common.php';
$localWebConfig = file_exists(__DIR__ . '/web-local.php') ? include __DIR__ . '/web-local.php' : [];

return ArrayHelper::merge(
    $commonConfig,
    $webConfig,
    $localWebConfig
);