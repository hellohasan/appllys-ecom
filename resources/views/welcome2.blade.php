<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ $basic->title }}</title>
    <meta name="keywords" content="HTML5 Template">
    <meta name="description" content="{{ $basic->title }}">
    <meta name="author" content="p-themes">
    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/images/icons/favicon.ico">
    <link rel="stylesheet" href="assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css">
    <!-- Plugins CSS File -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/plugins/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="assets/css/plugins/magnific-popup/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/plugins/jquery.countdown.css">
    <!-- Main CSS File -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/skins/skin-demo-13.css">
    <link rel="stylesheet" href="assets/css/demos/demo-13.css">
</head>

<body>
    <div class="page-wrapper">
        <header class="header header-10 header-intro-clearance">
            <div class="header-top mt-2">
                <div class="container">
                    <div class="header-left">
                        <a href="tel:{{ $basic->phone }}"><i class="icon-phone"></i>Call: {{ $basic->phone }}</a>
                    </div><!-- End .header-left -->
                    <div class="header-right">
                        <ul class="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li class="login">
                                        <a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a>
                                    </li>
                                </ul>
                            </li>
                        </ul><!-- End .top-menu -->
                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-top -->
            <div class="header-middle">
                <div class="container">
                    <div class="header-left">
                        <button class="mobile-menu-toggler">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="icon-bars"></i>
                        </button>
                        <a href="{{ route('home') }}" class="logo">
                            <img src="{{ asset('img/logo.png') }}" alt="Logo" width="105" height="25">
                        </a>
                    </div>
                    <div class="header-center">
                        <div class="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                            <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper search-wrapper-wide">
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="0">All Departments</option>
                                            @foreach ($categories as $category)
                                                <option value="{{ $category->id }}">{{ $category->name }}</option>
                                            @endforeach
                                        </select>
                                    </div><!-- End .select-custom -->
                                    <label for="q" class="sr-only">Search</label>
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Search product ..." required>
                                    <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                                </div><!-- End .header-search-wrapper -->
                            </form>
                        </div><!-- End .header-search -->
                    </div>
                    <div class="header-right">
                        <div class="header-dropdown-link">
                            <div class="dropdown compare-dropdown">
                                <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                                    <i class="icon-random"></i>
                                    <span class="compare-txt">Compare</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <ul class="compare-products">
                                        <li class="compare-product">
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                            <h4 class="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                                        </li>
                                        <li class="compare-product">
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                            <h4 class="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                                        </li>
                                    </ul>

                                    <div class="compare-actions">
                                        <a href="#" class="action-link">Clear All</a>
                                        <a href="#" class="btn btn-outline-primary-2"><span>Compare</span><i class="icon-long-arrow-right"></i></a>
                                    </div>
                                </div><!-- End .dropdown-menu -->
                            </div><!-- End .compare-dropdown -->

                            <a href="wishlist.html" class="wishlist-link">
                                <i class="icon-heart-o"></i>
                                <span class="wishlist-count">3</span>
                                <span class="wishlist-txt">Wishlist</span>
                            </a>

                            <div class="dropdown cart-dropdown">
                                <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i class="icon-shopping-cart"></i>
                                    <span class="cart-count">2</span>
                                    <span class="cart-txt">Cart</span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <div class="dropdown-cart-products">
                                        <div class="product">
                                            <div class="product-cart-details">
                                                <h4 class="product-title">
                                                    <a href="product.html">Beige knitted elastic runner shoes</a>
                                                </h4>

                                                <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $84.00
                                                </span>
                                            </div><!-- End .product-cart-details -->

                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src="assets/images/products/cart/product-1.jpg" alt="product">
                                                </a>
                                            </figure>
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                        </div><!-- End .product -->

                                        <div class="product">
                                            <div class="product-cart-details">
                                                <h4 class="product-title">
                                                    <a href="product.html">Blue utility pinafore denim dress</a>
                                                </h4>

                                                <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $76.00
                                                </span>
                                            </div><!-- End .product-cart-details -->

                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src="assets/images/products/cart/product-2.jpg" alt="product">
                                                </a>
                                            </figure>
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                        </div><!-- End .product -->
                                    </div><!-- End .cart-product -->

                                    <div class="dropdown-cart-total">
                                        <span>Total</span>

                                        <span class="cart-total-price">$160.00</span>
                                    </div><!-- End .dropdown-cart-total -->

                                    <div class="dropdown-cart-action">
                                        <a href="cart.html" class="btn btn-primary">View Cart</a>
                                        <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>
                                    </div><!-- End .dropdown-cart-total -->
                                </div><!-- End .dropdown-menu -->
                            </div><!-- End .cart-dropdown -->
                        </div>
                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-middle -->

            <div class="header-bottom sticky-header">
                <div class="container">
                    <div class="header-left">
                        <div class="dropdown category-dropdown show is-on" data-visible="true">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                                Browse Categories
                            </a>
                            <div class="dropdown-menu show">
                                <nav class="side-nav">
                                    <ul class="menu-vertical sf-arrows">
                                        @foreach ($categories as $category)
                                            <li class="megamenu-container">
                                                <a class="sf-with-ul" href="#">{{ $category->name }}</a>
                                                <div class="megamenu">
                                                    <div class="row no-gutters">
                                                        <div class="col-md-12">
                                                            <div class="menu-col">
                                                                <div class="row">
                                                                    @foreach ($category->subcategories as $subcat)
                                                                        <div class="col-md-4">
                                                                            <div class="menu-title">{{ $subcat->name }}</div>
                                                                            <ul>
                                                                                @foreach ($subcat->childcategories as $childCat)
                                                                                    <li><a href="#">{{ $childCat->name }}</a></li>
                                                                                @endforeach
                                                                            </ul>
                                                                        </div>
                                                                    @endforeach
                                                                </div><!-- End .row -->
                                                            </div><!-- End .menu-col -->
                                                        </div><!-- End .col-md-8 -->
                                                    </div><!-- End .row -->
                                                </div><!-- End .megamenu -->
                                            </li>
                                        @endforeach
                                    </ul><!-- End .menu-vertical -->
                                </nav><!-- End .side-nav -->
                            </div><!-- End .dropdown-menu -->
                        </div><!-- End .category-dropdown -->
                    </div><!-- End .col-lg-3 -->
                    <div class="header-center">
                        <nav class="main-nav">
                            <ul class="menu sf-arrows">
                                <li class="megamenu-container active">
                                    <a href="{{ route('home') }}">Home</a>
                                </li>
                                <li>
                                    <a href="product.html" class="sf-with-ul">Latest Shop</a>
                                    <div class="megamenu megamenu-sm">
                                        <div class="row no-gutters">
                                            <div class="col-md-12">
                                                <div class="menu-col">
                                                    <ul>
                                                        @foreach ($shops as $shop)
                                                            <li><a href="product.html">{{ $shop->name }}</a></li>
                                                        @endforeach
                                                    </ul>
                                                </div><!-- End .menu-col -->
                                            </div>
                                        </div><!-- End .row -->
                                    </div><!-- End .megamenu megamenu-sm -->
                                </li>
                                <li class="megamenu-container">
                                    <a href="{{ route('home') }}">Became a Seller</a>
                                </li>
                                <li class="megamenu-container">
                                    <a href="{{ route('home') }}">Terms and Policy</a>
                                </li>
                            </ul><!-- End .menu -->
                        </nav><!-- End .main-nav -->
                    </div>
                    <div class="header-right">
                        <i class="la la-lightbulb-o"></i>
                        <p>Clearance Up to 30% Off</span></p>
                    </div>
                </div><!-- End .container -->
            </div><!-- End .header-bottom -->
        </header><!-- End .header -->

        <main class="main">
            <div class="intro-slider-container">
                <div class="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options='{
                        "nav": false,
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'>
                    <div class="intro-slide" style="background-image: url(assets/images/demos/demo-13/slider/slide-1.png);">
                        <div class="container intro-content">
                            <div class="row">
                                <div class="col-auto offset-lg-3 intro-col">
                                    <h3 class="intro-subtitle">Trade-In Offer</h3><!-- End .h3 intro-subtitle -->
                                    <h1 class="intro-title">MacBook Air <br>Latest Model
                                        <span>
                                            <sup class="font-weight-light">from</sup>
                                            <span class="text-primary">$999<sup>,99</sup></span>
                                        </span>
                                    </h1><!-- End .intro-title -->

                                    <a href="category.html" class="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div><!-- End .col-auto offset-lg-3 -->
                            </div><!-- End .row -->
                        </div><!-- End .container intro-content -->
                    </div><!-- End .intro-slide -->

                    <div class="intro-slide" style="background-image: url(assets/images/demos/demo-13/slider/slide-2.jpg);">
                        <div class="container intro-content">
                            <div class="row">
                                <div class="col-auto offset-lg-3 intro-col">
                                    <h3 class="intro-subtitle">Trevel & Outdoor</h3><!-- End .h3 intro-subtitle -->
                                    <h1 class="intro-title">Original Outdoor <br>Beanbag
                                        <span>
                                            <sup class="font-weight-light line-through">$89,99</sup>
                                            <span class="text-primary">$29<sup>,99</sup></span>
                                        </span>
                                    </h1><!-- End .intro-title -->

                                    <a href="category.html" class="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div><!-- End .col-auto offset-lg-3 -->
                            </div><!-- End .row -->
                        </div><!-- End .container intro-content -->
                    </div><!-- End .intro-slide -->

                    <div class="intro-slide" style="background-image: url(assets/images/demos/demo-13/slider/slide-3.jpg);">
                        <div class="container intro-content">
                            <div class="row">
                                <div class="col-auto offset-lg-3 intro-col">
                                    <h3 class="intro-subtitle">Fashion Promotions</h3><!-- End .h3 intro-subtitle -->
                                    <h1 class="intro-title">Tan Suede <br>Biker Jacket
                                        <span>
                                            <sup class="font-weight-light line-through">$240,00</sup>
                                            <span class="text-primary">$180<sup>,99</sup></span>
                                        </span>
                                    </h1><!-- End .intro-title -->

                                    <a href="category.html" class="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div><!-- End .col-auto offset-lg-3 -->
                            </div><!-- End .row -->
                        </div><!-- End .container intro-content -->
                    </div><!-- End .intro-slide -->
                </div><!-- End .owl-carousel owl-simple -->

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

        <footer class="footer footer-2">
            <div class="icon-boxes-container">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-rocket"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Free Shipping</h3><!-- End .icon-box-title -->
                                    <p>Orders $50 or more</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-3 -->

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-rotate-left"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Free Returns</h3><!-- End .icon-box-title -->
                                    <p>Within 30 days</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-3 -->

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-info-circle"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Get 20% Off 1 Item</h3><!-- End .icon-box-title -->
                                    <p>When you sign up</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-3 -->

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-life-ring"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">We Support</h3><!-- End .icon-box-title -->
                                    <p>24/7 amazing services</p>
                                </div><!-- End .icon-box-content -->
                            </div><!-- End .icon-box -->
                        </div><!-- End .col-sm-6 col-lg-3 -->
                    </div><!-- End .row -->
                </div><!-- End .container -->
            </div><!-- End .icon-boxes-container -->

            <div class="footer-middle border-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <div class="widget widget-about">
                                <img src="assets/images/demos/demo-13/logo-footer.png" class="footer-logo" alt="Footer Logo" width="105" height="25">
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>

                                <div class="widget-about-info">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-4">
                                            <span class="widget-about-title">Got Question? Call us 24/7</span>
                                            <a href="tel:123456789">+0123 456 789</a>
                                        </div><!-- End .col-sm-6 -->
                                        <div class="col-sm-6 col-md-8">
                                            <span class="widget-about-title">Payment Method</span>
                                            <figure class="footer-payments">
                                                <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20">
                                            </figure><!-- End .footer-payments -->
                                        </div><!-- End .col-sm-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .widget-about-info -->
                            </div><!-- End .widget about-widget -->
                        </div><!-- End .col-sm-12 col-lg-3 -->

                        <div class="col-sm-4 col-lg-2">
                            <div class="widget">
                                <h4 class="widget-title">Information</h4><!-- End .widget-title -->

                                <ul class="widget-list">
                                    <li><a href="about.html">About Molla</a></li>
                                    <li><a href="#">How to shop on Molla</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                    <li><a href="login.html">Log in</a></li>
                                </ul><!-- End .widget-list -->
                            </div><!-- End .widget -->
                        </div><!-- End .col-sm-4 col-lg-3 -->

                        <div class="col-sm-4 col-lg-2">
                            <div class="widget">
                                <h4 class="widget-title">Customer Service</h4><!-- End .widget-title -->

                                <ul class="widget-list">
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Money-back guarantee!</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul><!-- End .widget-list -->
                            </div><!-- End .widget -->
                        </div><!-- End .col-sm-4 col-lg-3 -->

                        <div class="col-sm-4 col-lg-2">
                            <div class="widget">
                                <h4 class="widget-title">My Account</h4><!-- End .widget-title -->

                                <ul class="widget-list">
                                    <li><a href="#">Sign In</a></li>
                                    <li><a href="cart.html">View Cart</a></li>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="#">Help</a></li>
                                </ul><!-- End .widget-list -->
                            </div><!-- End .widget -->
                        </div><!-- End .col-sm-64 col-lg-3 -->
                    </div><!-- End .row -->
                </div><!-- End .container -->
            </div><!-- End .footer-middle -->

            <div class="footer-bottom">
                <div class="container">
                    <p class="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p><!-- End .footer-copyright -->
                    <ul class="footer-menu">
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul><!-- End .footer-menu -->

                    <div class="social-icons social-icons-color">
                        <span class="social-label">Social Media</span>
                        <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                        <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                        <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                        <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
                        <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                    </div><!-- End .soial-icons -->
                </div><!-- End .container -->
            </div><!-- End .footer-bottom -->
        </footer><!-- End .footer -->
    </div><!-- End .page-wrapper -->
    <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>

    <!-- Mobile Menu -->
    <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->
    <div class="mobile-menu-container mobile-menu-light">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="icon-close"></i></span>

            <form action="#" method="get" class="mobile-search">
                <label for="mobile-search" class="sr-only">Search</label>
                <input type="search" class="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required>
                <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
            </form>
            <ul class="nav nav-pills-mobile nav-border-anim" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                    <nav class="mobile-nav">
                        <ul class="mobile-menu">
                            <li class="active">
                                <a href="{{ route('home') }}">Home</a>
                            </li>
                            <li class="active">
                                <a href="{{ route('home') }}">Shops</a>
                            </li>
                            <li class="active">
                                <a href="{{ route('home') }}">Became a seller</a>
                            </li>
                            <li class="">
                                <a href="{{ route('home') }}">Terms & Condition</a>
                            </li>
                            <li class="">
                                <a href="{{ route('home') }}">Privicy Policy</a>
                            </li>
                            <li class="">
                                <a href="{{ route('home') }}">Business Policy</a>
                            </li>
                        </ul>
                    </nav><!-- End .mobile-nav -->
                </div><!-- .End .tab-pane -->
                <div class="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                    <nav class="mobile-cats-nav">
                        <ul class="mobile-cats-menu">
                            @foreach ($categories as $cat)
                                <li><a class="mobile-cats-lead" href="">{{ $cat->name }}</a></li>
                            @endforeach
                        </ul><!-- End .mobile-cats-menu -->
                    </nav><!-- End .mobile-cats-nav -->
                </div><!-- .End .tab-pane -->
            </div><!-- End .tab-content -->

            <div class="social-icons">
                <a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
                <a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
                <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
                <a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
            </div><!-- End .social-icons -->
        </div><!-- End .mobile-menu-wrapper -->
    </div><!-- End .mobile-menu-container -->

    <!-- Sign in / Register Modal -->
    <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="icon-close"></i></span>
                    </button>

                    <div class="form-box">
                        <div class="form-tab">
                            <ul class="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="tab-content-5">
                                <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="singin-email">Username or email address *</label>
                                            <input type="text" class="form-control" id="singin-email" name="singin-email" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="singin-password">Password *</label>
                                            <input type="password" class="form-control" id="singin-password" name="singin-password" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>LOG IN</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="signin-remember">
                                                <label class="custom-control-label" for="signin-remember">Remember Me</label>
                                            </div><!-- End .custom-checkbox -->

                                            <a href="#" class="forgot-link">Forgot Your Password?</a>
                                        </div><!-- End .form-footer -->
                                    </form>
                                    <div class="form-choice">
                                        <p class="text-center">or sign in with</p>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-g">
                                                    <i class="icon-google"></i>
                                                    Login With Google
                                                </a>
                                            </div><!-- End .col-6 -->
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-f">
                                                    <i class="icon-facebook-f"></i>
                                                    Login With Facebook
                                                </a>
                                            </div><!-- End .col-6 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .form-choice -->
                                </div><!-- .End .tab-pane -->
                                <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="register-email">Your email address *</label>
                                            <input type="email" class="form-control" id="register-email" name="register-email" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="register-password">Password *</label>
                                            <input type="password" class="form-control" id="register-password" name="register-password" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>SIGN UP</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="register-policy" required>
                                                <label class="custom-control-label" for="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                            </div><!-- End .custom-checkbox -->
                                        </div><!-- End .form-footer -->
                                    </form>
                                    <div class="form-choice">
                                        <p class="text-center">or sign in with</p>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-g">
                                                    <i class="icon-google"></i>
                                                    Login With Google
                                                </a>
                                            </div><!-- End .col-6 -->
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login  btn-f">
                                                    <i class="icon-facebook-f"></i>
                                                    Login With Facebook
                                                </a>
                                            </div><!-- End .col-6 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .form-choice -->
                                </div><!-- .End .tab-pane -->
                            </div><!-- End .tab-content -->
                        </div><!-- End .form-tab -->
                    </div><!-- End .form-box -->
                </div><!-- End .modal-body -->
            </div><!-- End .modal-content -->
        </div><!-- End .modal-dialog -->
    </div><!-- End .modal -->

    <!-- Plugins JS File -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/jquery.hoverIntent.min.js"></script>
    <script src="assets/js/jquery.waypoints.min.js"></script>
    <script src="assets/js/superfish.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/bootstrap-input-spinner.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/jquery.plugin.min.js"></script>
    <script src="assets/js/jquery.countdown.min.js"></script>

    <!-- Main JS File -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/demos/demo-13.js"></script>
</body>


<!-- molla/index-13.html  22 Nov 2019 09:59:31 GMT -->

</html>
