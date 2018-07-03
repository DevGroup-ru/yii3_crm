<?php

namespace app\assets;

use yii\web\AssetBundle;


/**
 * Class AppBundle
 */
class AppBundle extends AssetBundle
{
    public function init()
    {
        $this->sourcePath = __DIR__ . '/bundle' . (YII_ENV_DEV ? '/dist-dev' : '/dist');
        $this->css = YII_ENV_DEV ? ['app.bundle.css','0.css'] : ['app.bundle.min.css', '0.min.css'];
        $this->js = YII_ENV_DEV
            ? [
                'vendor.bundle.js',
                'app.bundle.js',
            ]
            : [
                'vendor.bundle.min.js',
                'app.bundle.min.js',
            ];
        parent::init();
    }
}