
<?php
/**
 * @return mixed
 */
function getUserFirstRole()
{
    $roles = Auth::user()->roles();
    if ($roles) {
        return $roles->first()->name;
    } else {
        return 'N/A';
    }
}

/**
 * @param $text
 * @param $lang
 * @param $start
 */
function getTranslate($data, $filed, $lang, $start = false)
{
    if ($start) {
        return $data[$lang . '_' . $filed];
    } else {
        return $data[$filed . '_' . $lang];
    }

    return null;
}

/**
 * @param $value
 * @param $length
 * @param $starter
 * @return mixed
 */
function custom($value, $length = 7, $starter = 1)
{
    return $starter . str_pad($value, $length, '0', STR_PAD_LEFT);
}

/**
 * @param $value
 * @param $length
 */
function customRound($value, $length = 2)
{
    return round($value, $length);
}

/**
 * @param $value
 * @param $percent
 * @return mixed
 */
function customPercentage($value, $percent)
{
    return round(($value * ($percent / 100)), 2);
}

/**
 * @param $number
 */
function round_to_2dp($number)
{
    return number_format((float) $number, 2, '.', '');
}

/**
 * @param $start
 * @param $prefix
 * @param $length
 * @return mixed
 */
function customPad($data, $length, $prefix = '')
{
    return $prefix . (str_pad((int) $data, $length, '0', STR_PAD_LEFT));
}
