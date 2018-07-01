<?php

use yii\helpers\ArrayHelper;

$testConfig = [

    'components' => [
        'db' => [
            'dsn' => 'mysql:host=dbtest;dbname=yii3_crm',
            'username' => 'root',
            'password' => 'secret',
        ],
    ],

];

return $testConfig;