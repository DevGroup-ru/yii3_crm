<?php

use yii\helpers\ArrayHelper;

$consoleConfig = [];
$commonConfig = include __DIR__ . '/common.php';
$localConsoleConfig = file_exists(__DIR__ . '/console-local.php') ? include __DIR__ . '/console-local.php' : [];

return ArrayHelper::merge(
    $commonConfig,
    $consoleConfig,
    $localConsoleConfig
);