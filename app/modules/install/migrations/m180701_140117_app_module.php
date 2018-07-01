<?php

use app\models\AppModule;
use yii\db\Migration;

/**
 * Class m180701_140117_app_module
 */
class m180701_140117_app_module extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->insert(AppModule::tableName(), [
            'system_name' => 'Installer',
            'class_name' => \app\modules\install\Module::class,
            'sort' => 0,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->delete(AppModule::tableName(), [
            'system_name' => 'Installer',
        ]);
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180701_140117_app_module cannot be reverted.\n";

        return false;
    }
    */
}
