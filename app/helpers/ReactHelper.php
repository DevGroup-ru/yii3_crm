<?php

namespace app\helpers;


use app\models\AppModule;
use Yii;
use yii\web\View;

/**
 * Class ReactHelper
 */
class ReactHelper
{
    /**
     * @param View $view
     */
    public static function defineModules(View $view)
    {
        $availableModule = json_encode(AppModule::availableModules());
        $js = <<<js
window.Yii3CRM__availableModules = $availableModule;
js;

        $view->registerJs($js, View::POS_HEAD);
    }

    /**
     * @param View $view
     * @return string
     */
    public static function initReact(View $view): string
    {
        static::defineModules($view);
        static::defineLocales($view);
        return '<div id="CRM__root"></div>';
    }

    /**
     * @param View $view
     */
    public static function defineLocales(View $view)
    {
        $availableLocales = json_encode(I18NHelper::getAvailableFrontendLocales());
        $fallback = json_encode(Yii::$app->sourceLanguage);
        $js = <<<js
window.Yii3CRM__availableLocales = $availableLocales;
window.Yii3CRM__defaultLanguage = $fallback;
js;
        $view->registerJs($js, View::POS_HEAD);

    }
}