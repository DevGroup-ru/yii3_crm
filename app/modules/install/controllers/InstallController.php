<?php

namespace app\modules\install\controllers;


use yii\web\Controller;

class InstallController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }
}