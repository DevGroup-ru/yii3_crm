<?php

namespace app\components;


class Migration extends \yii\db\Migration
{
    /**
     * @var string
     */
    public $tableOptions;

    public function init() {
        parent::init();
        $this->tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $this->tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }
    }
}