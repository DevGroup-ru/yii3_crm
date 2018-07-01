<?php



/* @var $this \yii\web\View */

echo \app\helpers\ReactHelper::initReact($this);

$this->registerJs(<<<js
document.location.hash = '/installer/';
js
, \yii\web\View::POS_HEAD);
?>
