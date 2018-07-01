<?php

namespace app\models;

/**
 * This is the ActiveQuery class for [[AppModule]].
 *
 * @see AppModule
 */
class AppModuleQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * @return AppModuleQuery
     */
    public function sortAsc()
    {
        return $this->orderBy(['sort' => SORT_ASC]);
    }

    /**
     * {@inheritdoc}
     * @return AppModule[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return AppModule|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
