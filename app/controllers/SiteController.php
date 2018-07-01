<?php

namespace app\controllers;


use yii\web\Controller;
use yii\web\ErrorAction;

/**
 * Class SiteController
 */
class SiteController extends Controller
{
    /**
     * @return array
     */
    public function actions()
    {
        return [
            'error' => [
                '__class' => ErrorAction::class,
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }
}