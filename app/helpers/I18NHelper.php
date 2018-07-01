<?php

namespace app\helpers;


use Yii;
use yii\helpers\ArrayHelper;
use yii\helpers\FileHelper;
use yii\i18n\PhpMessageSource;

class I18NHelper
{
    public static function getAvailableFrontendLocales()
    {

        $translation = Yii::$app->i18n->getMessageSource('frontend');

        $locales = [];

        if ($translation instanceof PhpMessageSource) {
            $locales = ArrayHelper::merge(
                [Yii::$app->sourceLanguage],
                array_map(
                    function ($item) {
                        return basename($item);
                    },
                    FileHelper::findDirectories(
                        Yii::getAlias($translation->basePath),
                        ['recursive' => false]
                    )
                )
            );
        }

        return $locales;
    }
}