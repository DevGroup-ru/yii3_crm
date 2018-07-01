<?php

use app\components\Migration;

/**
 * Class m180701_104326_settings
 */
class m180701_104326_settings extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%setting}}', [
            'id' => $this->primaryKey()->unsigned(),
            'key' => $this->string()->notNull()->unique(),
            'value' => $this->json(),
        ], $this->tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%setting}}');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180701_104326_settings cannot be reverted.\n";

        return false;
    }
    */
}
