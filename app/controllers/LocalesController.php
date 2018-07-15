<?php

namespace app\controllers;

use app\components\FrontendPhpMessageSource;
use Yii;
use yii\base\InvalidConfigException;
use yii\i18n\PhpMessageSource;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\Response;

class LocalesController extends Controller
{
    public function actionIndex($language, $namespace)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        Yii::$app->language = $language;
        if ($language === 'ru') {
            $language = 'ru-RU';
        }
        try {
            $messageSource = Yii::$app->i18n->getMessageSource($namespace);
            if ($messageSource instanceof FrontendPhpMessageSource) {
                $messages = $messageSource->loadMessages($namespace, $language);
                if (count($messages) === 0) {
                    throw new NotFoundHttpException();
                }
                return $messages;
            }
            throw new BadRequestHttpException();

        } catch (InvalidConfigException $e) {
            throw new NotFoundHttpException();
        }
    }
}