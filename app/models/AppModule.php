<?php

namespace app\models;

use app\interfaces\AppModuleInterface;
use Yii;
use yii\web\AssetBundle;

/**
 * This is the model class for table "app_module".
 *
 * @property int $id
 * @property string $system_name
 * @property string $class_name
 * @property int $sort
 */
class AppModule extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'app_module';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['system_name', 'class_name'], 'required'],
            [['sort'], 'integer'],
            [['system_name', 'class_name'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'system_name' => Yii::t('app', 'System Name'),
            'class_name' => Yii::t('app', 'Class Name'),
            'sort' => Yii::t('app', 'Sort'),
        ];
    }

    /**
     * {@inheritdoc}
     * @return AppModuleQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new AppModuleQuery(get_called_class());
    }

    public static function availableModules()
    {
        return Yii::$app->cache->getOrSet(
            'AppModule:AllAvailableModules',
            function() {
                $modulesDefinitions = static::find()->asArray()->sortAsc()->all();
                $availableModules = [];
                foreach ($modulesDefinitions as $definition) {
                    /** @var AppModuleInterface $className */
                    $className = $definition['class_name'];
                    /** @var AssetBundle $bundle */
                    $bundle = Yii::$app->assetManager->getBundle($className::bundle());
                    $bundle->publish(Yii::$app->assetManager);

                    $availableModules[$className::moduleName()] = [
                        'routes' => $className::frontendRoutes(),
                        'bundle' => [
                            'js' => array_map(
                                function($value) use($bundle) {
                                    return "{$bundle->baseUrl}/$value";
                                },
                                $bundle->js
                            ),
                            'css' => array_map(
                                function($value) use($bundle) {
                                    return "{$bundle->baseUrl}/$value";
                                },
                                $bundle->css
                            ),
                        ],
//                        'menuItems' => $className::menuItems(),
                    ];
                };
                return $availableModules;
            }
        );
    }
}
