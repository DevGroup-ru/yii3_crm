<?php

namespace app\controllers;

use yii\web\Controller;

class HelloController extends Controller
{
    public function actionIndex()
    {
        $v = \Yii::$app->db->createCommand('select 123')->queryScalar();

        return $this->renderContent($v);
    }



}