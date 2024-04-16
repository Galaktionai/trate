<!DOCTYPE html>
<html data-wf-domain="" data-wf-page="65fea9e02989eb1e11bd7221" data-wf-site="65f70bb2b9086115817c1569">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <? $APPLICATION->ShowMeta("robots") ?>
    <? $APPLICATION->ShowMeta("keywords") ?>
    <? $APPLICATION->ShowMeta("description") ?>
    <? $APPLICATION->ShowHead(); ?>
    <title><? $APPLICATION->ShowTitle() ?></title>
    <? IncludeTemplateLangFile(__FILE__); ?>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH ?>/assets/css/style.css">
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH ?>/assets/fonts/opensans.css">
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH ?>/assets/nice-select/css/nice-select.css">
    <script type="text/javascript">
        !function (o, c) {
            var n = c.documentElement,
                t = " w-mod-";
            n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
        }(window, document);
    </script>
</head>
<body class="body">
<div id="panel"><?$APPLICATION->ShowPanel();?></div>
<header>
    <div class="header__top">
        <span>
          Официальныей представитель <span class="header__top__red">TRATE</span> В России
        </span>
    </div>

    <div class="header__bottom">
        <div class="header__container">
            <div class="header__bottom__wrap">
                <div class="header__bottom__wrap__left">
                    <a href="https://trate.green-promo.ru/" class="header__logo">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/65f716197d0abeb5b1192f1e_Logo.svg" alt="logo">
                    </a>
                    <?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"top_menu", 
	array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "subtop",
		"DELAY" => "N",
		"MAX_LEVEL" => "2",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"ROOT_MENU_TYPE" => "top",
		"USE_EXT" => "N",
		"COMPONENT_TEMPLATE" => "top_menu",
		"MENU_THEME" => "site"
	),
	false
);?>
                </div>
                <div class="header__bottom__wrap__center">

                </div>
                <div class="header__bottom__wrap__right">
                    <a class="header__bottom__wrap__center__number" href="tel:+74993224431">+7 (499) 322-44-31</a>
                    <a class="green_btn order-call" href="#">Заказать звонок</a>
                    <a href="#">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/65f716797cf5af735bb3e92b_header-1.svg" alt="">
                    </a>
                    <a href="#">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/65f71679a05c1a6291482a3c_header-2.svg" alt="">
                    </a>
                    <a class="header__bottom__burger__btn_a" href="#">
                        <div class="header__bottom__burger__btn"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="header__adaptiv__wrap">
        <div class="header__adaptiv">
            <div class="header__adaptiv__menu">
                <div class="container">
                    <div class="header__adaptiv__menu__exit_btn">
                        <a class="header__adaptiv__menu__exit_btn__a" href="#">
                            <img src="<?=SITE_TEMPLATE_PATH?>/assets/img/close-btn.svg" alt="">
                        </a>
                    </div>
                    <nav class="header__adaptiv__menu__nav">
                        <ul>
                            <li class="header__adaptiv__menu__nav_li">
                                <a class="header__adaptiv__menu__nav_a" href="#">О компании
                                    <img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon-black.svg" alt="">
                                    <div class="header__adaptiv__menu__nav__2_menu">
                                        <a class="header__adaptiv__menu__nav__2_menu__back" href="#">
                                            <img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon-black.svg" alt="">
                                            О компании
                                        </a>
                                        <ul>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="#">О нас</a>
                                            </li>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="#">Наши преимущества</a>
                                            </li>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="#">Собственная лаборатория</a>
                                            </li>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="https://trate.green-promo.ru/about/certificates/">Сертификаты</a>
                                            </li>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="#">Политика качества</a>
                                            </li>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="#">Гарания и политика возврата</a>
                                            </li>
                                            <li>
                                                <a class="header__adaptiv__menu__nav__2_a" href="https://trate.green-promo.ru/about/news/">Новости</a>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li class="header__adaptiv__menu__nav_li">
                                <a class="header__adaptiv__menu__nav_a" href="#">
                                    Каталог
                                    <img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon-black.svg" alt="">


                                </a>
                                <div class="header__adaptiv__menu__nav__2_menu white-bg">
                                    <a class="header__adaptiv__menu__nav__2_menu__back" href="#">
                                        <img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon-black.svg" alt="">
                                        Каталог
                                    </a>
                                    <div class="header__adaptiv__menu__catalog">
                                        <a href="https://trate.green-promo.ru/catalog/roott-r/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-r/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-r/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-bs/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-bs/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-bs/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-s/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-s/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-s/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-m/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-m/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-m/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-p/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-p/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-p/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-c/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-c/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-c/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-cs/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-cs/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-cs/menu-name.png" alt="">
                                        </a>
                                        <a href="https://trate.green-promo.ru/catalog/roott-b/" class="header__adaptiv__menu__catalog__item">
                                            <img class="header__adaptiv__menu__catalog__item__img" src="/upload/catalog-icons/roott-b/menu-icon.png" alt="">
                                            <img class="header__adaptiv__menu__catalog__item__txt" src="/upload/catalog-icons/roott-b/menu-name.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="header__adaptiv__menu__nav_li">
                                <a class="header__adaptiv__menu__nav_a" href="#">Специалисту</a>
                            </li>
                            <li class="header__adaptiv__menu__nav_li">
                                <a class="header__adaptiv__menu__nav_a" href="https://trate.green-promo.ru/events/">Мероприятия</a>
                            </li>
                            <li class="header__adaptiv__menu__nav_li">
                                <a class="header__adaptiv__menu__nav_a" href="#">Где купить</a>
                            </li>
                            <li class="header__adaptiv__menu__nav_li">
                                <a class="header__adaptiv__menu__nav_a" href="https://trate.green-promo.ru/contacts/">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="header__adaptiv__green">
                <div>
                    <a class="header__adaptiv__green_tel" href="tel:74993224431">+7 (499) 322-44-31</a>
                    <a class="header__adaptiv__green_btn" href="#">Заказать звонок</a>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="fake_header"></div>


