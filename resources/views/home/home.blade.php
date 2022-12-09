@extends('welcome')
@section('content')
    <main class="main">
        <div class="intro-slider-container mb-5">
            <div class="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl"
                 data-owl-options='{
                    "dots": true,
                    "nav": false,
                    "responsive": {
                        "1200": {
                            "nav": true,
                            "dots": false
                        }
                    }
                }'>
                <div class="intro-slide" style="background-image: url(assets/images/demos/demo-4/slider/slide-1.png);">
                    <div class="container intro-content">
                        <div class="row justify-content-end">
                            <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                                <h3 class="intro-subtitle text-third">Deals and Promotions</h3><!-- End .h3 intro-subtitle -->
                                <h1 class="intro-title">Beats by</h1>
                                <h1 class="intro-title">Dre Studio 3</h1><!-- End .intro-title -->

                                <div class="intro-price">
                                    <sup class="intro-old-price">$349,95</sup>
                                    <span class="text-third">
                                        $279<sup>.99</sup>
                                    </span>
                                </div><!-- End .intro-price -->

                                <a href="category.html" class="btn btn-primary btn-round">
                                    <span>Shop More</span>
                                    <i class="icon-long-arrow-right"></i>
                                </a>
                            </div><!-- End .col-lg-11 offset-lg-1 -->
                        </div><!-- End .row -->
                    </div><!-- End .intro-content -->
                </div><!-- End .intro-slide -->

                <div class="intro-slide" style="background-image: url(assets/images/demos/demo-4/slider/slide-2.png);">
                    <div class="container intro-content">
                        <div class="row justify-content-end">
                            <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                                <h3 class="intro-subtitle text-primary">New Arrival</h3><!-- End .h3 intro-subtitle -->
                                <h1 class="intro-title">Apple iPad Pro <br>12.9 Inch, 64GB </h1><!-- End .intro-title -->

                                <div class="intro-price">
                                    <sup>Today:</sup>
                                    <span class="text-primary">
                                        $999<sup>.99</sup>
                                    </span>
                                </div><!-- End .intro-price -->

                                <a href="category.html" class="btn btn-primary btn-round">
                                    <span>Shop More</span>
                                    <i class="icon-long-arrow-right"></i>
                                </a>
                            </div><!-- End .col-md-6 offset-md-6 -->
                        </div><!-- End .row -->
                    </div><!-- End .intro-content -->
                </div><!-- End .intro-slide -->
            </div><!-- End .intro-slider owl-carousel owl-simple -->

            <span class="slider-loader"></span><!-- End .slider-loader -->
        </div><!-- End .intro-slider-container -->

        <div class="mb-4"></div><!-- End .mb-2 -->

        <div class="container">
            <h2 class="title text-center mb-2">Explore Popular Categories</h2><!-- End .title -->
            <div class="cat-blocks-container">
                <div class="row">
                    @foreach ($categories as $category)
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" class="cat-block">
                                <figure>
                                    <span>
                                        <img src="{{ asset("storage/categories/{$category->image}") }}" alt="Category image">
                                    </span>
                                </figure>
                                <h3 class="cat-block-title">{{ $category->name }}</h3>
                            </a>
                        </div>
                    @endforeach
                </div><!-- End .row -->
            </div><!-- End .cat-blocks-container -->
        </div><!-- End .container -->

        <div class="mb-2"></div><!-- End .mb-2 -->

        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="banner banner-overlay">
                        <a href="#">
                            <img src="assets/images/demos/demo-13/banners/banner-1.jpg" alt="Banner">
                        </a>
                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white"><a href="#">Weekend Sale</a></h4><!-- End .banner-subtitle -->
                            <h3 class="banner-title text-white"><a href="#">Lighting <br>& Accessories <br><span>25% off</span></a></h3><!-- End .banner-title -->
                            <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
                        </div><!-- End .banner-content -->
                    </div><!-- End .banner -->
                </div><!-- End .col-lg-3 -->

                <div class="col-sm-6 col-lg-3 order-lg-last">
                    <div class="banner banner-overlay">
                        <a href="#">
                            <img src="assets/images/demos/demo-13/banners/banner-3.jpg" alt="Banner">
                        </a>
                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white"><a href="#">Smart Offer</a></h4><!-- End .banner-subtitle -->
                            <h3 class="banner-title text-white"><a href="#">Anniversary <br>Special <br><span>15% off</span></a></h3><!-- End .banner-title -->
                            <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
                        </div><!-- End .banner-content -->
                    </div><!-- End .banner -->
                </div><!-- End .col-lg-3 -->

                <div class="col-lg-6">
                    <div class="banner banner-overlay">
                        <a href="#">
                            <img src="assets/images/demos/demo-13/banners/banner-2.jpg" alt="Banner">
                        </a>
                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white d-none d-sm-block"><a href="#">Amazing Value</a></h4><!-- End .banner-subtitle -->
                            <h3 class="banner-title text-white"><a href="#">Clothes Trending <br>Spring Collection 2019 <br><span>from $12,99</span></a></h3><!-- End .banner-title -->
                            <a href="#" class="banner-link">Discover Now <i class="icon-long-arrow-right"></i></a>
                        </div><!-- End .banner-content -->
                    </div><!-- End .banner -->
                </div><!-- End .col-lg-6 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
        <div class="mb-3"></div><!-- End .mb-3 -->

        <div class="bg-light pt-3 pb-5">
            <div class="container">
                <div class="heading heading-flex heading-border mb-3">
                    <div class="heading-left">
                        <h2 class="title">Hot Deals Products</h2><!-- End .title -->
                    </div><!-- End .heading-left -->

                    <div class="heading-right">
                        <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="hot-all-link" data-toggle="tab" href="#hot-all-tab" role="tab" aria-controls="hot-all-tab" aria-selected="true">All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="hot-elec-link" data-toggle="tab" href="#hot-elec-tab" role="tab" aria-controls="hot-elec-tab" aria-selected="false">Electronics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="hot-furn-link" data-toggle="tab" href="#hot-furn-tab" role="tab" aria-controls="hot-furn-tab" aria-selected="false">Furniture</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="hot-clot-link" data-toggle="tab" href="#hot-clot-tab" role="tab" aria-controls="hot-clot-tab" aria-selected="false">Clothes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="hot-acc-link" data-toggle="tab" href="#hot-acc-tab" role="tab" aria-controls="hot-acc-tab" aria-selected="false">Accessories</a>
                            </li>
                        </ul>
                    </div><!-- End .heading-right -->
                </div><!-- End .heading -->

                <div class="tab-content tab-content-carousel">
                    <div class="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-all-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                             data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1280": {
                                    "items":5,
                                    "nav": true
                                }
                            }
                        }'>
                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Butler Stool Ladder</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$251.99</span>
                                        <span class="old-price">Was $290.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 2 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$179.99</span>
                                        <span class="old-price">Was $199.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #69b4ff;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #ff887f;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame charcoal</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$3.050.00</span>
                                        <span class="old-price">Was $3.200.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 6 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Clothes</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Tan suede biker jacket</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$240.00</span>
                                        <span class="old-price">Was $310.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Sony - lass LED 2160p Smart 4K Ultra HD</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$1699.99</span>
                                        <span class="old-price">Was $1999.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 10 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Appliances</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Neato Robotics</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        $399.00
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 12 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->
                        </div><!-- End .owl-carousel -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="hot-elec-tab" role="tabpanel" aria-labelledby="hot-elec-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                             data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1280": {
                                    "items":5,
                                    "nav": true
                                }
                            }
                        }'>
                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Clothes</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Tan suede biker jacket</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$240.00</span>
                                        <span class="old-price">Was $310.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Butler Stool Ladder</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$251.99</span>
                                        <span class="old-price">Was $290.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 2 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$179.99</span>
                                        <span class="old-price">Was $199.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #69b4ff;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #ff887f;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame charcoal</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$3.050.00</span>
                                        <span class="old-price">Was $3.200.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 6 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Sony - lass LED 2160p Smart 4K Ultra HD</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$1699.99</span>
                                        <span class="old-price">Was $1999.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 10 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->
                        </div><!-- End .owl-carousel -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="hot-furn-tab" role="tabpanel" aria-labelledby="hot-furn-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                             data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1280": {
                                    "items":5,
                                    "nav": true
                                }
                            }
                        }'>
                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame charcoal</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$3.050.00</span>
                                        <span class="old-price">Was $3.200.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 6 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Sony - lass LED 2160p Smart 4K Ultra HD</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$1699.99</span>
                                        <span class="old-price">Was $1999.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 10 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Appliances</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Neato Robotics</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        $399.00
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 12 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Clothes</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Tan suede biker jacket</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$240.00</span>
                                        <span class="old-price">Was $310.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Butler Stool Ladder</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$251.99</span>
                                        <span class="old-price">Was $290.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 2 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$179.99</span>
                                        <span class="old-price">Was $199.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #69b4ff;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #ff887f;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->
                        </div><!-- End .owl-carousel -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="hot-clot-tab" role="tabpanel" aria-labelledby="hot-clot-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                             data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1280": {
                                    "items":5,
                                    "nav": true
                                }
                            }
                        }'>
                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Butler Stool Ladder</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$251.99</span>
                                        <span class="old-price">Was $290.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 2 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame charcoal</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$3.050.00</span>
                                        <span class="old-price">Was $3.200.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 6 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Clothes</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Tan suede biker jacket</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$240.00</span>
                                        <span class="old-price">Was $310.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$179.99</span>
                                        <span class="old-price">Was $199.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #69b4ff;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #ff887f;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->
                        </div><!-- End .owl-carousel -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="hot-acc-tab" role="tabpanel" aria-labelledby="hot-acc-link">
                        <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                             data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1280": {
                                    "items":5,
                                    "nav": true
                                }
                            }
                        }'>
                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Appliances</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Neato Robotics</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        $399.00
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 12 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Butler Stool Ladder</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$251.99</span>
                                        <span class="old-price">Was $290.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 2 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-top">Top</span>
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Electronics</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Sony - ass LED 2160p Smart 4K Ultra HD</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$1699.99</span>
                                        <span class="old-price">Was $1999.99</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 10 Reviews )</span>
                                    </div><!-- End .rating-container -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Furniture</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame charcoal</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$3.050.00</span>
                                        <span class="old-price">Was $3.200.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 6 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->

                            <div class="product">
                                <figure class="product-media">
                                    <span class="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" class="product-image">
                                    </a>

                                    <div class="product-action-vertical">
                                        <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div><!-- End .product-action-vertical -->

                                    <div class="product-action">
                                        <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div><!-- End .product-action -->
                                </figure><!-- End .product-media -->

                                <div class="product-body">
                                    <div class="product-cat">
                                        <a href="#">Clothes</a>
                                    </div><!-- End .product-cat -->
                                    <h3 class="product-title"><a href="product.html">Tan suede biker jacket</a></h3><!-- End .product-title -->
                                    <div class="product-price">
                                        <span class="new-price">$240.00</span>
                                        <span class="old-price">Was $310.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div><!-- End .rating-container -->

                                    <div class="product-nav product-nav-dots">
                                        <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                        <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                    </div><!-- End .product-nav -->
                                </div><!-- End .product-body -->
                            </div><!-- End .product -->
                        </div><!-- End .owl-carousel -->
                    </div><!-- .End .tab-pane -->
                </div><!-- End .tab-content -->
            </div><!-- End .container -->
        </div><!-- End .bg-light pt-5 pb-5 -->

        <div class="mb-3"></div><!-- End .mb-3 -->

        @foreach ($categories as $category)
            @if ($category->products->count())
                <div class="container electronics">
                    <div class="heading heading-flex heading-border mb-3">
                        <div class="heading-left">
                            <h2 class="title">{{ $category->name }}</h2>
                        </div>
                        <div class="heading-right">
                            <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="elec-new-link" data-toggle="tab" href="#elec-new-tab" role="tab" aria-controls="elec-new-tab" aria-selected="true">New</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="elec-featured-link" data-toggle="tab" href="#elec-featured-tab" role="tab" aria-controls="elec-featured-tab" aria-selected="false">Featured</a>
                                </li>
                            </ul>
                        </div><!-- End .heading-right -->
                    </div><!-- End .heading -->

                    <div class="tab-content tab-content-carousel">
                        <div class="tab-pane p-0 fade show active" id="elec-new-tab" role="tabpanel" aria-labelledby="elec-new-link">
                            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">
                                @foreach ($category->products as $product)
                                    <div class="product">
                                        <figure class="product-media">
                                            <span class="product-label label-new">New</span>
                                            <a href="{{ route('product-details', ['slug' => $product->slug, 'custom' => $product->custom]) }}">
                                                <img src="{{ asset("storage/products/{$product->image}") }}" alt="Product image" class="product-image">
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div><!-- End .product-action-vertical -->
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div><!-- End .product-action -->
                                        </figure><!-- End .product-media -->
                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">{{ $category->name }}</a>
                                            </div>
                                            <h3 class="product-title"><a href="{{ route('product-details', ['slug' => $product->slug, 'custom' => $product->custom]) }}">{{ $product->name }}</a></h3>
                                            <div class="product-price">৳{{ $product->sell_price }}</div>
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 12 Reviews )</span>
                                            </div><!-- End .rating-container -->
                                        </div><!-- End .product-body -->
                                    </div><!-- End .product -->
                                @endforeach
                            </div><!-- End .owl-carousel -->
                        </div><!-- .End .tab-pane -->
                        <div class="tab-pane p-0 fade" id="elec-featured-tab" role="tabpanel" aria-labelledby="elec-featured-link">
                            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">
                                <div class="product">
                                    <figure class="product-media">
                                        <span class="product-label label-new">New</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" class="product-image">
                                        </a>
                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                            <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                        </div><!-- End .product-action-vertical -->

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        </div><!-- End .product-action -->
                                    </figure><!-- End .product-media -->

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Tablets</a>
                                        </div><!-- End .product-cat -->
                                        <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a></h3><!-- End .product-title -->
                                        <div class="product-price">
                                            $899.99
                                        </div><!-- End .product-price -->
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                            </div><!-- End .ratings -->
                                            <span class="ratings-text">( 4 Reviews )</span>
                                        </div><!-- End .rating-container -->
                                    </div><!-- End .product-body -->
                                </div><!-- End .product -->
                            </div><!-- End .owl-carousel -->
                        </div><!-- .End .tab-pane -->
                    </div><!-- End .tab-content -->
                </div><!-- End .container -->
            @endif
        @endforeach

        <div class="mb-3"></div><!-- End .mb-3 -->

        <div class="container">
            <h2 class="title title-border mb-5">Shop by Brands</h2><!-- End .title -->
            <div class="owl-carousel mb-5 owl-simple" data-toggle="owl"
                 data-owl-options='{
                "nav": false,
                "dots": true,
                "margin": 30,
                "loop": false,
                "responsive": {
                    "0": {
                        "items":2
                    },
                    "420": {
                        "items":3
                    },
                    "600": {
                        "items":4
                    },
                    "900": {
                        "items":5
                    },
                    "1024": {
                        "items":6
                    },
                    "1280": {
                        "items":6,
                        "nav": true,
                        "dots": false
                    }
                }
            }'>
                <a href="#" class="brand">
                    <img src="assets/images/brands/1.png" alt="Brand Name">
                </a>

                <a href="#" class="brand">
                    <img src="assets/images/brands/2.png" alt="Brand Name">
                </a>

                <a href="#" class="brand">
                    <img src="assets/images/brands/3.png" alt="Brand Name">
                </a>

                <a href="#" class="brand">
                    <img src="assets/images/brands/4.png" alt="Brand Name">
                </a>

                <a href="#" class="brand">
                    <img src="assets/images/brands/5.png" alt="Brand Name">
                </a>

                <a href="#" class="brand">
                    <img src="assets/images/brands/6.png" alt="Brand Name">
                </a>

                <a href="#" class="brand">
                    <img src="assets/images/brands/7.png" alt="Brand Name">
                </a>
            </div><!-- End .owl-carousel -->
        </div><!-- End .container -->

        <div class="cta cta-horizontal cta-horizontal-box bg-primary">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-2xl-5col">
                        <h3 class="cta-title text-white">Join Our Newsletter</h3><!-- End .cta-title -->
                        <p class="cta-desc text-white">Subcribe to get information about products and coupons</p><!-- End .cta-desc -->
                    </div><!-- End .col-lg-5 -->

                    <div class="col-3xl-5col">
                        <form action="#">
                            <div class="input-group">
                                <input type="email" class="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i class="icon-long-arrow-right"></i></button>
                                </div><!-- .End .input-group-append -->
                            </div><!-- .End .input-group -->
                        </form>
                    </div><!-- End .col-lg-7 -->
                </div><!-- End .row -->
            </div><!-- End .container -->
        </div><!-- End .cta -->
        <div class="blog-posts bg-light pt-4 pb-7">
            <div class="container">
                <h2 class="title">From Our Blog</h2><!-- End .title-lg text-center -->
                <div class="owl-carousel owl-simple" data-toggle="owl"
                     data-owl-options='{
                    "nav": false,
                    "dots": true,
                    "items": 3,
                    "margin": 20,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":1
                        },
                        "600": {
                            "items":2
                        },
                        "992": {
                            "items":3
                        },
                        "1280": {
                            "items":4,
                            "nav": true,
                            "dots": false
                        }
                    }
                }'>
                    <article class="entry">
                        <figure class="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-13/blog/post-1.jpg" alt="image desc">
                            </a>
                        </figure><!-- End .entry-media -->

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div><!-- End .entry-meta -->

                            <h3 class="entry-title">
                                <a href="single.html">Sed adipiscing ornare.</a>
                            </h3><!-- End .entry-title -->

                            <div class="entry-content">
                                <p>Lorem ipsum dolor consectetuer adipiscing elit. Phasellus hendrerit. Pelletesque aliquet nibh ...</p>
                                <a href="single.html" class="read-more">Read More</a>
                            </div><!-- End .entry-content -->
                        </div><!-- End .entry-body -->
                    </article><!-- End .entry -->

                    <article class="entry">
                        <figure class="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-13/blog/post-2.jpg" alt="image desc">
                            </a>
                        </figure><!-- End .entry-media -->

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href="#">Dec 12, 2018</a>, 0 Comments
                            </div><!-- End .entry-meta -->

                            <h3 class="entry-title">
                                <a href="single.html">Vivamus vestibulum ntulla.</a>
                            </h3><!-- End .entry-title -->

                            <div class="entry-content">
                                <p>Phasellus hendrerit. Pelletesque aliquet nibh necurna In nisi neque, aliquet vel, dapibus id ... </p>
                                <a href="single.html" class="read-more">Read More</a>
                            </div><!-- End .entry-content -->
                        </div><!-- End .entry-body -->
                    </article><!-- End .entry -->

                    <article class="entry">
                        <figure class="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-13/blog/post-3.jpg" alt="image desc">
                            </a>
                        </figure><!-- End .entry-media -->

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href="#">Dec 19, 2018</a>, 2 Comments
                            </div><!-- End .entry-meta -->

                            <h3 class="entry-title">
                                <a href="single.html">Praesent placerat risus.</a>
                            </h3><!-- End .entry-title -->

                            <div class="entry-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc ...</p>
                                <a href="single.html" class="read-more">Read More</a>
                            </div><!-- End .entry-content -->
                        </div><!-- End .entry-body -->
                    </article><!-- End .entry -->

                    <article class="entry">
                        <figure class="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-13/blog/post-4.jpg" alt="image desc">
                            </a>
                        </figure><!-- End .entry-media -->

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href="#">Dec 19, 2018</a>, 2 Comments
                            </div><!-- End .entry-meta -->

                            <h3 class="entry-title">
                                <a href="single.html">Fusce pellentesque suscipit.</a>
                            </h3><!-- End .entry-title -->

                            <div class="entry-content">
                                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue. </p>
                                <a href="single.html" class="read-more">Read More</a>
                            </div><!-- End .entry-content -->
                        </div><!-- End .entry-body -->
                    </article><!-- End .entry -->

                    <article class="entry">
                        <figure class="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-13/blog/post-1.jpg" alt="image desc">
                            </a>
                        </figure><!-- End .entry-media -->

                        <div class="entry-body">
                            <div class="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div><!-- End .entry-meta -->

                            <h3 class="entry-title">
                                <a href="single.html">Sed adipiscing ornare.</a>
                            </h3><!-- End .entry-title -->

                            <div class="entry-content">
                                <p>Lorem ipsum dolor consectetuer adipiscing elit. Phasellus hendrerit. Pelletesque aliquet nibh ...</p>
                                <a href="single.html" class="read-more">Read More</a>
                            </div><!-- End .entry-content -->
                        </div><!-- End .entry-body -->
                    </article><!-- End .entry -->
                </div><!-- End .owl-carousel -->
            </div><!-- End .container -->
        </div><!-- End .blog-posts -->
    </main><!-- End .main -->
@endsection
