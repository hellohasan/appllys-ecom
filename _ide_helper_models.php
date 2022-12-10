<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\BasicSetting
 *
 * @property int $id
 * @property string $title
 * @property float $point
 * @property string $phone
 * @property string $email
 * @property string $address
 * @property string $copy_text
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting query()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereCopyText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting wherePoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereUpdatedAt($value)
 */
	class BasicSetting extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Category
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string|null $image
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read int|null $products_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\SubCategory[] $subcategories
 * @property-read int|null $subcategories_count
 * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ChildCategory
 *
 * @property int $id
 * @property int $category_id
 * @property int $subcategory_id
 * @property string $name
 * @property string $slug
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read \App\Models\SubCategory $subcategory
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereSubcategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildCategory whereUpdatedAt($value)
 */
	class ChildCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\MerchantStore
 *
 * @property int $id
 * @property int $merchant_id
 * @property string $name
 * @property string $slug
 * @property string $address
 * @property int $point
 * @property string $logo
 * @property string $banner
 * @property bool $product
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $merchant
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore query()
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereBanner($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereMerchantId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore wherePoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereProduct($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MerchantStore whereUpdatedAt($value)
 */
	class MerchantStore extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PaymentMethod
 *
 * @property int $id
 * @property string $name
 * @property string $image
 * @property string $val1
 * @property string|null $val2
 * @property array|null $val3
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod query()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereVal1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereVal2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereVal3($value)
 */
	class PaymentMethod extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PointRequestLog
 *
 * @property int $id
 * @property string $custom
 * @property int $user_id
 * @property int $merchant_store_id
 * @property int $payment_method_id
 * @property float $point
 * @property float $rate
 * @property float $amount
 * @property string $transaction
 * @property int $status 0=Pending,1=Approve,2=Rejected
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\MerchantStore $merchant
 * @property-read \App\Models\PaymentMethod $method
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog query()
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereMerchantStoreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog wherePaymentMethodId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog wherePoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereTransaction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PointRequestLog whereUserId($value)
 */
	class PointRequestLog extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Product
 *
 * @property int $id
 * @property int $merchant_store_id
 * @property int $category_id
 * @property int $subcategory_id
 * @property int|null $childcategory_id
 * @property string|null $custom
 * @property string $name
 * @property string $slug
 * @property float $buy_price
 * @property float|null $old_sell_price
 * @property float $sell_price
 * @property float $point
 * @property int $stock
 * @property array|null $colors
 * @property array|null $sizes
 * @property string|null $description
 * @property string|null $image
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property mixed $boolean
 * @property-read \App\Models\Category $category
 * @property-read \App\Models\ChildCategory|null $childcategory
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProductImage[] $images
 * @property-read int|null $images_count
 * @property-read \App\Models\MerchantStore $store
 * @property-read \App\Models\SubCategory $subcategory
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereBuyPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereChildcategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereColors($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereMerchantStoreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereOldSellPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSellPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSizes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSubcategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ProductImage
 *
 * @property int $id
 * @property int $product_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductImage whereUpdatedAt($value)
 */
	class ProductImage extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SubCategory
 *
 * @property int $id
 * @property int $category_id
 * @property string $name
 * @property string $slug
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ChildCategory[] $childcategories
 * @property-read int|null $childcategories_count
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SubCategory whereUpdatedAt($value)
 */
	class SubCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $phone
 * @property string|null $photo
 * @property bool $status
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

