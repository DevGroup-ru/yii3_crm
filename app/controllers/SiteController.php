<?php

namespace app\controllers;


use yii\web\Controller;
use yii\web\ErrorAction;

class SiteController extends Controller
{
    public function actions()
    {
        return [
            'error' => [
                '__class' => ErrorAction::class,
            ],
        ];
    }
}