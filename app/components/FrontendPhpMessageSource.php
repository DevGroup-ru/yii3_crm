<?php

namespace app\components;


use yii\i18n\PhpMessageSource;

class FrontendPhpMessageSource extends PhpMessageSource
{
    /**
     * @param string $category
     * @param string $language
     * @return array
     */
    public function loadMessages($category, $language)
    {
        return parent::loadMessages($category, $language);
    }
}