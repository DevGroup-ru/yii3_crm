<?php

$dbConfig = [
    '__class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=yii3_crm',
    'username' => 'root',
    'password' => '123456',
    'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];


$localDbConfig = file_exists(__DIR__ . '/db-local.php') ? include __DIR__ . '/db-local.php' : [];

return \yii\helpers\ArrayHelper::merge($dbConfig, $localDbConfig);
