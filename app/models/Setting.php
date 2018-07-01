<?php

namespace app\models;

use Psr\SimpleCache\InvalidArgumentException;
use Yii;

/**
 * This is the model class for table "setting".
 *
 * @property int $id
 * @property string $key
 * @property array $value
 */
class Setting extends \yii\db\ActiveRecord
{
    public static $cachedValues = [];
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%setting}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['key'], 'required'],
            [['value'], 'safe'],
            [['key'], 'string', 'max' => 255],
            [['key'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'key' => Yii::t('app', 'Key'),
            'value' => Yii::t('app', 'Value'),
        ];
    }

    /**
     * {@inheritdoc}
     * @return SettingQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new SettingQuery(get_called_class());
    }

    /**
     * @param string $key
     * @return mixed
     */
    public static function get(string $key)
    {
        if (array_key_exists($key, static::$cachedValues)) {
            return static::$cachedValues[$key];
        }

        $value = Yii::$app->cache->getOrSet(static::cacheKey($key), function() use($key) {
//            $model = static::find()->where(['key' => $key])->select(['value'])->one();
//
//            return $model === null ? null : $model->value;

            $value = static::getDb()->createCommand(
                "select `value` from {{%setting}} where `key` = :key",
                [
                    ':key' => $key
                ]
            )->queryScalar();
            if (\is_string($value) === false) {
                return null;
            }

            return json_decode($value, true);
        });
        if ($value !== null) {
            static::$cachedValues[$key] = $value;
        }

        return $value;
    }

    /**
     * @param string $key
     * @return string
     */
    protected static function cacheKey(string $key): string
    {
        return "Setting:$key";
    }

    /**
     * @param bool $insert
     * @return bool
     */
    public function beforeSave($insert)
    {
        try {
            Yii::$app->cache->delete(static::cacheKey($this->key));

            if (array_key_exists('key', $this->oldAttributes) && $this->oldAttributes['key'] !== $this->key) {
                Yii::$app->cache->delete(static::cacheKey($this->oldAttributes['key']));
            }
        } catch (InvalidArgumentException $e) {
            Yii::log('error', Yii::t('app', 'Unable to clear cache for setting'));
            return false;
        }
        return parent::beforeSave($insert);
    }

    /**
     * @return bool
     */
    public function beforeDelete()
    {
        try {
            Yii::$app->cache->delete(static::cacheKey($this->key));
        } catch (InvalidArgumentException $e) {
            Yii::log('error', Yii::t('app', 'Unable to clear cache for setting'));
            return false;
        }
        return parent::beforeDelete();
    }
}
