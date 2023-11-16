<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductSaleController;
use App\Http\Controllers\Api\ProductStoreController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderdetailController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\ConfigController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('brand')->group(function(){
    Route::get('index/{status?}',[BrandController::class,'index']);
    Route::get('brand_all',[BrandController::class,'getBrandAll']);
    Route::get('show/{id}',[BrandController::class,'show']);
    Route::post('store',[BrandController::class,'store']);
    Route::post('update/{id}',[BrandController::class,'update']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);

    Route::get('trash/{id}',[BrandController::class,'trash']);
    Route::get('rescover_trash/{id}',[BrandController::class,'RescoverTrash']);
    Route::get('trash',[BrandController::class,'getTrashAll']);


});

Route::prefix('category')->group(function(){
    Route::get('index',[CategoryController::class,'index']);
    Route::get('getCategory',[CategoryController::class,'getCategory']);
    Route::get('show/{id}',[CategoryController::class,'show']);
    Route::post('store',[CategoryController::class,'store']);
    Route::post('update/{id}',[CategoryController::class,'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);

    Route::get('category_list/{parent_id?}/{limit?}', [CategoryController::class, 'category_list']);
    Route::get('trash/{id}',[CategoryController::class,'trash']);
    Route::get('rescover_trash/{id}',[CategoryController::class,'RescoverTrash']);
    Route::get('trash',[CategoryController::class,'getTrashAll']);


});

Route::prefix('product')->group(function(){
    Route::get('index/{limit?}/{page?}',[ProductController::class,'index']);
    Route::get('ProductNew/{limit}',[ProductController::class,'ProductNew']);
    Route::get('getBestProSaler',[ProductController::class,'getBestSaler']);
    Route::get('show/{id}',[ProductController::class,'show']);
    Route::post('store',[ProductController::class,'store']);
    Route::post('update/{id}',[ProductController::class,'update']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);

    Route::post('product_brand/{brand_id}/{limit}/{page?}/{filter?}', [ProductController::class, 'product_brand']);
    Route::post('product_category/{category_id}/{limit}/{page?}/{filter?}',[ProductController::class,'product_category']);
    Route::get('product_home/{category_id?}/{limit?}/{orderby?}', [ProductController::class, 'product_home']);
    Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
    Route::get('search_product/{key}/{limit}/{page?}', [ProductController::class, 'search_product']);
    Route::post('product_all/{limit}/{page?}/{filter?}', [ProductController::class, 'getProductAll']);

    Route::get('trash/{id}',[ProductController::class,'trash']);
    Route::get('rescover_trash/{id}',[ProductController::class,'RecoverTrash']);
    Route::get('trash',[ProductController::class,'getTrashAll']);

    Route::get('getProStoreImport',[ProductStoreController::class,'index']);
    Route::get('getImport/{page}/{name?}',[ProductController::class,'getImportName']);
    Route::get('getImportCatId/{catid}/{page?}',[ProductController::class,'getImportCatId']);
    Route::get('getImportBrandId/{brand_id}/{page?}',[ProductController::class,'getImportBrandId']);
    Route::post('addImportPro',[ProductStoreController::class,'addImportPro']);
    Route::get('deleteTrashImport/{id}',[ProductStoreController::class,'Trash']);
});


Route::prefix('product_sale')->group(function(){
    // Route::get('product/sale', [ProductSaleController::class, 'index']);
    Route::get('index/{limit}', [ProductSaleController::class, 'ProductSale']);
    Route::get('getSaleAll/{limit}/{page?}', [ProductSaleController::class, 'getProductSaleAll']);

    Route::get('trash/{idsale}/{id}',[ProductSaleController::class,'trash']);
    Route::get('rescover_trash/{id}',[ProductSaleController::class,'RecoverTrash']);
    Route::get('trash',[ProductSaleController::class,'getTrashAll']);
    Route::get('show/{id}',[ProductSaleController::class,'show']);
    Route::post('update/{id}',[ProductSaleController::class,'update']);
    Route::delete('destroy/{id}', [ProductSaleController::class, 'destroy']);
    Route::post('store', [ProductSaleController::class, 'store']);

});

Route::prefix('contact')->group(function(){
    Route::get('index',[ContactController::class,'index']);
    Route::get('show/{id}',[ContactController::class,'show']);
    Route::post('store',[ContactController::class,'store']);
    Route::post('addcontact',[ContactController::class,'addcontact']);
    Route::post('update/{id}',[ContactController::class,'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);

    // 
    Route::get('trash/{id}',[ContactController::class,'trash']);
    Route::get('rescover_trash/{id}',[ContactController::class,'RescoverTrash']);
    Route::get('trash',[ContactController::class,'getTrashAll']);

});

Route::prefix('menu')->group(function(){
    Route::get('index',[MenuController::class,'index']);
    Route::get('show/{id}',[MenuController::class,'show']);
    Route::post('store',[MenuController::class,'store']);
    Route::post('update/{id}',[MenuController::class,'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
    Route::get('getByParentId/{position}/{parent_id}', [MenuController::class, 'getByParentId']);
    Route::get('getMenuFooter/{type}/{position}', [MenuController::class, 'getCS_Footer']);

    Route::get('trash/{id}',[MenuController::class,'trash']);
    Route::get('rescover_trash/{id}',[MenuController::class,'RescoverTrash']);
    Route::get('trash',[MenuController::class,'getTrashAll']);


});

Route::prefix('order')->group(function(){
    Route::get('index/{page}',[OrderController::class,'index']);
    Route::get('show/{id}',[OrderController::class,'show']);
    Route::post('store',[OrderController::class,'store']);
    Route::post('update/{id}',[OrderController::class,'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
    Route::get('trash/{id}',[OrderController::class,'trash']);
    Route::get('rescover_trash/{id}',[OrderController::class,'RescoverTrash']);
    Route::get('getTrash/{page}',[OrderController::class,'getTrashAll']);

});

Route::prefix('post')->group(function(){
    Route::get('index/{type}',[PostController::class,'index']);
    Route::get('show/{id}',[PostController::class,'show']);
    Route::post('store',[PostController::class,'store']);

    Route::post('update/{id}',[PostController::class,'update']);

    Route::delete('destroy/{id}', [PostController::class, 'destroy']);

    Route::get('trash/{id}',[PostController::class,'trash']);
    Route::get('rescover_trash/{id}',[PostController::class,'RescoverTrash']);
    Route::get('getTrash/{type}',[PostController::class,'getTrashAll']);

    // frontend
    Route::get('post_all_fe/{limit}/{page?}',[PostController::class,'getPostFE']);
    Route::get('post_detail/{slug}',[PostController::class,'post_detail']);
    Route::get('post_topic/{topicid}/{limit}/{page?}',[PostController::class,'post_topic']);
    Route::get('post_new/{type}/{limit}',[PostController::class,'Post_New']);
    Route::get('post_all',[PostController::class,'getPostAll']);


});


Route::prefix('slider')->group(function(){
    Route::get('index',[SliderController::class,'index']);
    Route::get('getSliderMain/{position}',[SliderController::class,'getSliderMain']);
    Route::get('show/{id}',[SliderController::class,'show']);
    Route::post('store',[SliderController::class,'store']);
    Route::post('update/{id}',[SliderController::class,'update']);
    Route::delete('destroy/{id}', [SliderController::class, 'destroy']);
    Route::get('slider_list/{position}', [SliderController::class, 'slider_list']);

    Route::get('trash/{id}',[SliderController::class,'trash']);
    Route::get('rescover_trash/{id}',[SliderController::class,'RescoverTrash']);
    Route::get('trash',[SliderController::class,'getTrashAll']);

});

Route::prefix('topic')->group(function(){
    Route::get('index',[TopicController::class,'index']);
    Route::get('show/{id}',[TopicController::class,'show']);
    Route::post('store',[TopicController::class,'store']);
    Route::post('update/{id}',[TopicController::class,'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);

    Route::get('list_topic/{parent_id}', [TopicController::class, 'list_topic']);

    Route::get('trash/{id}',[TopicController::class,'trash']);
    Route::get('rescover_trash/{id}',[TopicController::class,'RescoverTrash']);
    Route::get('trash',[TopicController::class,'getTrashAll']);


});



Route::prefix('user')->group(function(){
    Route::get('index/{roles}',[UserController::class,'index']);
    Route::get('show/{id}',[UserController::class,'show']);
    Route::post('store',[UserController::class,'store']);
    Route::post('update/{id}',[UserController::class,'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);

    Route::post('adduser', [UserController::class, 'AddUser']);
    Route::post('login', [UserController::class, 'Login']);
    Route::get('getUserId/{id?}', [UserController::class, 'getUser']);



    // 
    Route::get('trash/{id}',[UserController::class,'trash']);
    Route::get('rescover_trash/{id}',[UserController::class,'RescoverTrash']);
    Route::get('getTrash/{relos}',[UserController::class,'getTrashAll']);

});


Route::prefix('member')->group(function(){
    Route::get('list',[UserController::class,'getMemberAll']);
    Route::post('store',[UserController::class,'store']);
    Route::post('update/{id}',[UserController::class,'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);
});

Route::prefix('rating')->group(function(){
    Route::post('store',[RatingController::class,'store']);
    Route::get('number_start/product_id/user_id',[RatingController::class,'getRating']);

});

Route::prefix('page')->group(function(){
    Route::get('getPageAll',[PostController::class,'getPageAll']);
    Route::get('showPage/{id}',[PostController::class,'getPageById']);
    Route::post('store',[PostController::class,'store']);
    Route::post('update/{id}',[PostController::class,'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);

    Route::get('trash/{id}',[PostController::class,'trash']);
    Route::get('rescover_trash/{id}',[PostController::class,'RescoverTrash']);
    Route::get('getTrash',[PostController::class,'getTrashPageAll']);
    
    // 
    Route::get('getPageFE/{slug}',[PostController::class,'getPageFE']);

});

Route::prefix('config')->group(function(){
    Route::get('getConfig',[ConfigController::class,'getConfigFooter']);
    Route::get('getConfigAll',[ConfigController::class,'getConfig']);
    Route::post('update/{id}',[ConfigController::class,'updateConfig']);
});


Route::prefix('import')->group(function(){
    Route::get('index',[ProductStoreController::class,'index']);
});