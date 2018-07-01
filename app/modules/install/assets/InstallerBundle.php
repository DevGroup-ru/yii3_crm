<?php

namespace app\modules\install\assets;


use yii\web\AssetBundle;

class InstallerBundle extends AssetBundle
{
    public function init()
    {
        $this->sourcePath = __DIR__ . '/bundle' . (YII_ENV_DEV ? '/dist-dev' : '/dist');
        $this->css = YII_ENV_DEV ? ['install.bundle.css'] : ['install.bundle.min.css'];
        $this->js = YII_ENV_DEV
            ? [
                'install.bundle.js',
            ]
            : [
                'install.bundle.min.js',
            ];
        parent::init();
    }
}