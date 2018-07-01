<?php

use app\modules\install\behavior\InstallationBehavior;
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
            'cookieValidationKey' => ';u32hgoruifgbas',
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
    ],
    'modules' => [
        'install' => [
            '__class' => \app\modules\install\Module::class,
        ],
    ],
    'as installer' => [
        '__class' => InstallationBehavior::class,
    ],
];

if (YII_ENV_DEV) {

    $webConfig['bootstrap'][] = 'debug';
    $webConfig['modules']['debug'] = [
        '__class' => yii\debug\Module::class,
        // uncomment the following to add your IP if you are not connecting from localhost.
        'allowedIPs' => ['*'],
    ];

}

$commonConfig = include __DIR__ . '/common.php';
$localWebConfig = file_exists(__DIR__ . '/web-local.php') ? include __DIR__ . '/web-local.php' : [];

return ArrayHelper::merge(
    $commonConfig,
    $webConfig,
    $localWebConfig
);