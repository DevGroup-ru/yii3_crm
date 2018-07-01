<?php

use app\components\Migration;


/**
 * Class m180701_135207_modules
 */
class m180701_135207_modules extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable(
            '{{%app_module}}',
            [
                'id' => $this->primaryKey(),
                'system_name' => $this->string()->notNull(),
                'class_name' => $this->string()->notNull(),
                'sort' => $this->integer()->notNull()->defaultValue(0),
            ],
            $this->tableOptions
        );
        $this->createIndex('bySort', '{{%app_module}}', ['sort']);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('{{%app_module}}');

    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180701_135207_modules cannot be reverted.\n";

        return false;
    }
    */
}
