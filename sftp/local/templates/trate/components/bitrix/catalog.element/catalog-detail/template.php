<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;
use Bitrix\Catalog\ProductTable;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

$this->setFrameMode(true);
$this->addExternalCss('/bitrix/css/main/bootstrap.css');
//echo "<pre>";
//echo print_r($arResult);
//echo "</pre>";
?>
    <section class="s-product">
        <div class="container">
            <div class="product-wrapper">
                <div id="w-node-c279a46a-fefe-a632-30b9-ef6943903f33-11bd7221" class="product-details--2">
                    <div id="w-node-_8905b05f-fa21-b3d6-1f8f-53c654d78c3b-11bd7221" class="c1 w-row">
                        <div class="cc1 w-col w-col-6">
                            <h3 class="heading-prod"><?= $arResult["NAME"] ?></h3>
                            <div class="pproduct-lwtx"><?= $arResult["SECTION"]["PATH"][0]["NAME"] ?></div>
                        </div>
                        <div class="cc2 w-col w-col-6">
                            <div class="pproduct-price"><?= $arResult["ITEM_PRICES"][0]['PRINT_BASE_PRICE'] ?></div>
                        </div>
                    </div>
                    <div id="w-node-_14fd2fc4-2f62-8855-e53b-0c1b0e1e2d4d-11bd7221" class="prod-brs"></div>
                    <div class="product-info">
                        <div class="product-info-block">
                            <div id="w-node-_93c9c9c8-0f9e-bfd5-f689-7577c4fca076-11bd7221">Размер:</div>
                            <div class="text-block-3">ø <?= $arResult['PROPERTIES']['DIAMETER']['VALUE'][0] ?> мм ,
                                L <?= $arResult['PROPERTIES']['LENGTH']['VALUE'][0] ?> мм
                            </div>
                        </div>
                        <div class="product-info-block">
                            <div id="w-node-_3dd6f72c-a437-cf4b-78f7-13e4efec19c0-11bd7221" class="text-block-4">Тип:
                            </div>
                            <div class="text-block-3"><?= $arResult['PROPERTIES']['TYPE']['VALUE'] ?></div>
                        </div>
                        <div class="product-info-block">
                            <div id="w-node-be55eba3-8cc5-4f35-cdf5-8363f20f573e-11bd7221">Материал:</div>
                            <div class="text-block-3"><?= $arResult['PROPERTIES']['DIAMETER']['MATERIAL'] ?></div>
                        </div>
                        <div class="product-info-block">
                            <div id="w-node-_06b780c0-175f-9fbd-523a-ef85c96c25e6-11bd7221">Категория:</div>
                            <div class="text-block-3"><?= $arResult['SECTION']['NAME'] ?></div>
                        </div>
                        <div class="product-info-block">
                            <div id="w-node-_69cc7a79-a3ac-9459-3b1d-47778c430f8c-11bd7221">Артикул:</div>
                            <div class="text-block-3"><?= $arResult['PROPERTIES']['VENDOR']['VALUE'] ?></div>
                        </div>
                    </div>
                    <div class="prod-brs"></div>
                    <div class="pproduct-sz">Размеры:</div>
                    <div class="block-sizes">
                        <? foreach ($arResult['PROPERTIES']['SIZES']["VALUE_ENUM"] as $size): ?>
                            <a href="#" class="btn-product w-button"><?= $size ?></a>
                        <? endforeach; ?>
                    </div>
                    <a href="#" class="btn-b w-inline-block">
                        <div class="brix---btn-primary-small-prods">В корзину</div>
                    </a>
                    <div class="du">
                        <div class="brix---accordion-items" id="details">
                            <div class="brix---accordion-content-wrappers">
                                <div class="brix---accordion-headers">
                                    <div class="brix---color-neutral-802">
                                        <div class="cat-lt-1s">Подробнее</div>
                                    </div>
                                </div>
                            </div>
                            <div class="brix---accordion-icon-wrappers"><img
                                        src="<?= SITE_TEMPLATE_PATH ?>/assets/img/65fef570f0517f7d1de731a6_CaretRight.svg"
                                        alt=""
                                        class="brix---accordion-arrow-icon"></div>
                        </div>
                        <div class="prod-brss"></div>
                        <div class="brix---accordion-items" id="upakovka">
                            <div class="brix---accordion-content-wrappers">
                                <div class="brix---accordion-headers">
                                    <div class="brix---color-neutral-802">
                                        <div class="cat-lt-1s">Упаковка и содержание</div>
                                    </div>
                                </div>
                            </div>
                            <div class="brix---accordion-icon-wrappers"><img
                                        src="<?= SITE_TEMPLATE_PATH ?>/assets/img/65fef570f0517f7d1de731a6_CaretRight.svg"
                                        alt=""
                                        class="brix---accordion-arrow-icon"></div>
                        </div>
                        <div class="prod-brss"></div>
                    </div>
                </div>
                <div id="w-node-b49c29bf-c3ae-4c02-f20d-e22621359301-11bd7221" class="product-details">
                    <!-- <div class="wegweg">
                        
                    </div> -->
                    <? if ($arResult["DETAIL_PICTURE"]["SRC"]): ?>
                        <div id="w-node-fda59b21-e20d-36ea-4151-5fae03f17970-11bd7221" class="prod-crd"><img
                                    src="<?= $arResult["DETAIL_PICTURE"]["SRC"] ?>"
                                    alt="" class="prod-iamges"></div>
                    <? else: ?>
                        <div id="w-node-fda59b21-e20d-36ea-4151-5fae03f17970-11bd7221" class="prod-crd"><img
                                    src="<?= SITE_TEMPLATE_PATH ?>/assets/img/no_photo.png" loading="lazy"
                                    sizes="(max-width: 479px) 100vw, 439.9921875px"
                                    srcset="<?= SITE_TEMPLATE_PATH ?>/assets/img/no_photo.png 500w, <?= SITE_TEMPLATE_PATH ?>/assets/img/no_photo.png 744w"
                                    alt="" class="prod-iamges"></div>

                    <? endif; ?>
                </div>
            </div>
        </div>
    </section>


    <div class="modal_detail_info">
        <div class="modal-order-call__bacgroaund">
        </div>
        <div class="modal_detail_info__wrap">
            <a href="#" class="modal_detail__exit details">

            </a>
            <div class="modal_detail_info__txt">
                <span class="modal_detail_info__txt__title">Подробнее <?= $arResult["NAME"] ?></span>
                <p class="modal_detail_info__txt__p">
                    <?= $arResult["DETAIL_TEXT"] ?>
                </p>
            </div>
        </div>
    </div>

    <div class="modal_detail_upakovka">
        <div class="modal-order-call__bacgroaund">
        </div>
        <div class="modal_detail_info__wrap">
            <a href="#" class="modal_detail__exit upakovka">

            </a>
            <div class="modal_detail_info__txt">
                <span class="modal_detail_info__txt__title">Упаковка имплантатов <?= $arResult["NAME"] ?></span>
                <p class="modal_detail_info__txt__p">
                    <?= $arResult["DETAIL_TEXT"] ?>
                </p>
            </div>
        </div>
    </div>

    <div class="modal-order-call">
        <div class="modal-order-call__bacgroaund">
        </div>
        <div class="modal-order-call__wrap">
            <a href="#" class="call__wrap__exit">
            </a>
            <form class="modal-order-call__wrap__form" action="">
                <span class="call__wrap__form__title">
                    Заказать обратный звонок
                </span>
                <p class="call__wrap__form__p izm">
                    Оставьте ваш номер телефона и мы вам перезвооним
                </p>
                <input class="call__wrap__form__input" type="text" placeholder="Ваше Имя">
                <input class="call__wrap__form__input" type="text" placeholder="Телефон">
                <input class="call__wrap__form__submit" type="submit" value="Отправить">
            </form>
        </div>
    </div>
    <div class="modal-order-call-succes">
        <div class="modal-order-call__bacgroaund">
        </div>
        <div class="modal-order-call__wrap">
            <a href="#" class="call__wrap__exit">

            </a>
            <div class="modal-order-call__wrap__form" action="">
                <span class="call__wrap__form__title">
                    Ваша заявка успешно  отправлена
                </span>
                <p class="call__wrap__form__p">
                    Мы свяжемся с вами в самое ближайшее время
                </p>
            </div>
        </div>
    </div>

<script src="<?=SITE_TEMPLATE_PATH?>/assets/js/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<script>
    $('#details, .modal_detail__exit.details').click(function() {
        $('.modal_detail_info').toggleClass('active');
        $("body").toggleClass("dont-scroll");
        
    })
    $('.modal_detail_info .modal-order-call__bacgroaund').click(function() {
        $('.modal_detail_info').toggleClass('active');
        $("body").toggleClass("dont-scroll");
    })

    $('#upakovka, .modal_detail__exit.upakovka').click(function() {
        $('.modal_detail_upakovka').toggleClass('active');
        $("body").toggleClass("dont-scroll");
    })

    console.log($('#upakovka .modal_detail__exit'))
    $('.modal_detail_upakovka .modal-order-call__bacgroaund').click(function() {
        $('.modal_detail_upakovka').toggleClass('active');
        $("body").toggleClass("dont-scroll");
    })
</script>
<script>



        BX.message({
            ECONOMY_INFO_MESSAGE: '<?=GetMessageJS('CT_BCE_CATALOG_ECONOMY_INFO2')?>',
            TITLE_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_TITLE_ERROR')?>',
            TITLE_BASKET_PROPS: '<?=GetMessageJS('CT_BCE_CATALOG_TITLE_BASKET_PROPS')?>',
            BASKET_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_BASKET_UNKNOWN_ERROR')?>',
            BTN_SEND_PROPS: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_SEND_PROPS')?>',
            BTN_MESSAGE_DETAIL_BASKET_REDIRECT: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_BASKET_REDIRECT')?>',
            BTN_MESSAGE_CLOSE: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE')?>',
            BTN_MESSAGE_DETAIL_CLOSE_POPUP: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE_POPUP')?>',
            TITLE_SUCCESSFUL: '<?=GetMessageJS('CT_BCE_CATALOG_ADD_TO_BASKET_OK')?>',
            COMPARE_MESSAGE_OK: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_OK')?>',
            COMPARE_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_UNKNOWN_ERROR')?>',
            COMPARE_TITLE: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_TITLE')?>',
            BTN_MESSAGE_COMPARE_REDIRECT: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT')?>',
            PRODUCT_GIFT_LABEL: '<?=GetMessageJS('CT_BCE_CATALOG_PRODUCT_GIFT_LABEL')?>',
            PRICE_TOTAL_PREFIX: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_PRICE_TOTAL_PREFIX')?>',
            RELATIVE_QUANTITY_MANY: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY'])?>',
            RELATIVE_QUANTITY_FEW: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW'])?>',
            SITE_ID: '<?=CUtil::JSEscape($component->getSiteId())?>'
        });

        var <?=$obName?> = new JCCatalogElement(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
    </script>
<?php
unset($actualItem, $itemIds, $jsParams);
?>

<style>
    .wegweg{
        margin-top: 30px;
        margin-bottom: 20px;
    }

    @media (max-width: 991px) {
        .wegweg{
            display: block;
        }
    }
</style>