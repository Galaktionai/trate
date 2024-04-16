<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;
use Bitrix\Catalog\ProductTable;
function is_image($filename) {
    $allowed_extensions = array('jpg', 'jpeg', 'png', 'gif');
    $extension = pathinfo($filename, PATHINFO_EXTENSION);
    return in_array($extension, $allowed_extensions);
}

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 *
 *  _________________________________________________________________________
 * |    Attention!
 * |    The following comments are for system use
 * |    and are required for the component to work correctly in ajax mode:
 * |    <!-- items-container -->
 * |    <!-- pagination-container -->
 * |    <!-- component-end -->
 */


$this->setFrameMode(true);
$this->addExternalCss('/bitrix/css/main/bootstrap.css');

if (!empty($arResult['NAV_RESULT'])) {
    $navParams = array(
        'NavPageCount' => $arResult['NAV_RESULT']->NavPageCount,
        'NavPageNomer' => $arResult['NAV_RESULT']->NavPageNomer,
        'NavNum' => $arResult['NAV_RESULT']->NavNum
    );
} else {
    $navParams = array(
        'NavPageCount' => 1,
        'NavPageNomer' => 1,
        'NavNum' => $this->randString()
    );
}

$showTopPager = false;
$showBottomPager = false;
$showLazyLoad = false;

if ($arParams['PAGE_ELEMENT_COUNT'] > 0 && $navParams['NavPageCount'] > 1) {
    $showTopPager = $arParams['DISPLAY_TOP_PAGER'];
    $showBottomPager = $arParams['DISPLAY_BOTTOM_PAGER'];
    $showLazyLoad = $arParams['LAZY_LOAD'] === 'Y' && $navParams['NavPageNomer'] != $navParams['NavPageCount'];
}

$templateLibrary = array('popup', 'ajax', 'fx');
$currencyList = '';

if (!empty($arResult['CURRENCIES'])) {
    $templateLibrary[] = 'currency';
    $currencyList = CUtil::PhpToJSObject($arResult['CURRENCIES'], false, true, true);
}

$templateData = array(
    'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
    'TEMPLATE_LIBRARY' => $templateLibrary,
    'CURRENCIES' => $currencyList,
    'USE_PAGINATION_CONTAINER' => $showTopPager || $showBottomPager,
);
unset($currencyList, $templateLibrary);

$elementEdit = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_EDIT');
$elementDelete = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_DELETE');
$elementDeleteParams = array('CONFIRM' => GetMessage('CT_BCS_TPL_ELEMENT_DELETE_CONFIRM'));

$positionClassMap = array(
    'left' => 'product-item-label-left',
    'center' => 'product-item-label-center',
    'right' => 'product-item-label-right',
    'bottom' => 'product-item-label-bottom',
    'middle' => 'product-item-label-middle',
    'top' => 'product-item-label-top'
);

$discountPositionClass = '';
if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y' && !empty($arParams['DISCOUNT_PERCENT_POSITION'])) {
    foreach (explode('-', $arParams['DISCOUNT_PERCENT_POSITION']) as $pos) {
        $discountPositionClass .= isset($positionClassMap[$pos]) ? ' ' . $positionClassMap[$pos] : '';
    }
}

$labelPositionClass = '';
if (!empty($arParams['LABEL_PROP_POSITION'])) {
    foreach (explode('-', $arParams['LABEL_PROP_POSITION']) as $pos) {
        $labelPositionClass .= isset($positionClassMap[$pos]) ? ' ' . $positionClassMap[$pos] : '';
    }
}

$arParams['~MESS_BTN_BUY'] = ($arParams['~MESS_BTN_BUY'] ?? '') ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_BUY');
$arParams['~MESS_BTN_DETAIL'] = ($arParams['~MESS_BTN_DETAIL'] ?? '') ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_DETAIL');
$arParams['~MESS_BTN_COMPARE'] = ($arParams['~MESS_BTN_COMPARE'] ?? '') ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_COMPARE');
$arParams['~MESS_BTN_SUBSCRIBE'] = ($arParams['~MESS_BTN_SUBSCRIBE'] ?? '') ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_SUBSCRIBE');
$arParams['~MESS_BTN_ADD_TO_BASKET'] = ($arParams['~MESS_BTN_ADD_TO_BASKET'] ?? '') ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_ADD_TO_BASKET');
$arParams['~MESS_NOT_AVAILABLE'] = ($arParams['~MESS_NOT_AVAILABLE'] ?? '') ?: Loc::getMessage('CT_BCS_TPL_MESS_PRODUCT_NOT_AVAILABLE');
$arParams['~MESS_NOT_AVAILABLE_SERVICE'] = ($arParams['~MESS_NOT_AVAILABLE_SERVICE'] ?? '') ?: Loc::getMessage('CP_BCS_TPL_MESS_PRODUCT_NOT_AVAILABLE_SERVICE');
$arParams['~MESS_SHOW_MAX_QUANTITY'] = ($arParams['~MESS_SHOW_MAX_QUANTITY'] ?? '') ?: Loc::getMessage('CT_BCS_CATALOG_SHOW_MAX_QUANTITY');
$arParams['~MESS_RELATIVE_QUANTITY_MANY'] = ($arParams['~MESS_RELATIVE_QUANTITY_MANY'] ?? '') ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_MANY');
$arParams['MESS_RELATIVE_QUANTITY_MANY'] = ($arParams['MESS_RELATIVE_QUANTITY_MANY'] ?? '') ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_MANY');
$arParams['~MESS_RELATIVE_QUANTITY_FEW'] = ($arParams['~MESS_RELATIVE_QUANTITY_FEW'] ?? '') ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_FEW');
$arParams['MESS_RELATIVE_QUANTITY_FEW'] = ($arParams['MESS_RELATIVE_QUANTITY_FEW'] ?? '') ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_FEW');

$arParams['MESS_BTN_LAZY_LOAD'] = $arParams['MESS_BTN_LAZY_LOAD'] ?: Loc::getMessage('CT_BCS_CATALOG_MESS_BTN_LAZY_LOAD');

$obName = 'ob' . preg_replace('/[^a-zA-Z0-9_]/', 'x', $this->GetEditAreaId($navParams['NavNum']));
$containerName = 'container-' . $navParams['NavNum'];

if ($showTopPager) {
    ?>
    <div data-pagination-num="<?= $navParams['NavNum'] ?>">
        <!-- pagination-container -->
        <?= $arResult['NAV_STRING'] ?>
        <!-- pagination-container -->
    </div>
    <?
}

?>
<div class="three-body_wrap">
    <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
    </div>
</div>

<div class="catalog-section bx-<?= $arParams['TEMPLATE_THEME'] ?>" data-entity="<?= $containerName ?>">
    <?
    if (!empty($arResult['ITEMS']) && !empty($arResult['ITEM_ROWS'])) {
        $generalParams = [
            'SHOW_DISCOUNT_PERCENT' => $arParams['SHOW_DISCOUNT_PERCENT'],
            'PRODUCT_DISPLAY_MODE' => $arParams['PRODUCT_DISPLAY_MODE'],
            'SHOW_MAX_QUANTITY' => $arParams['SHOW_MAX_QUANTITY'],
            'RELATIVE_QUANTITY_FACTOR' => $arParams['RELATIVE_QUANTITY_FACTOR'],
            'MESS_SHOW_MAX_QUANTITY' => $arParams['~MESS_SHOW_MAX_QUANTITY'],
            'MESS_RELATIVE_QUANTITY_MANY' => $arParams['~MESS_RELATIVE_QUANTITY_MANY'],
            'MESS_RELATIVE_QUANTITY_FEW' => $arParams['~MESS_RELATIVE_QUANTITY_FEW'],
            'SHOW_OLD_PRICE' => $arParams['SHOW_OLD_PRICE'],
            'USE_PRODUCT_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
            'PRODUCT_QUANTITY_VARIABLE' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
            'ADD_TO_BASKET_ACTION' => $arParams['ADD_TO_BASKET_ACTION'],
            'ADD_PROPERTIES_TO_BASKET' => $arParams['ADD_PROPERTIES_TO_BASKET'],
            'PRODUCT_PROPS_VARIABLE' => $arParams['PRODUCT_PROPS_VARIABLE'],
            'SHOW_CLOSE_POPUP' => $arParams['SHOW_CLOSE_POPUP'],
            'DISPLAY_COMPARE' => $arParams['DISPLAY_COMPARE'],
            'COMPARE_PATH' => $arParams['COMPARE_PATH'],
            'COMPARE_NAME' => $arParams['COMPARE_NAME'],
            'PRODUCT_SUBSCRIPTION' => $arParams['PRODUCT_SUBSCRIPTION'],
            'PRODUCT_BLOCKS_ORDER' => $arParams['PRODUCT_BLOCKS_ORDER'],
            'LABEL_POSITION_CLASS' => $labelPositionClass,
            'DISCOUNT_POSITION_CLASS' => $discountPositionClass,
            'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
            'SLIDER_PROGRESS' => $arParams['SLIDER_PROGRESS'],
            '~BASKET_URL' => $arParams['~BASKET_URL'],
            '~ADD_URL_TEMPLATE' => $arResult['~ADD_URL_TEMPLATE'],
            '~BUY_URL_TEMPLATE' => $arResult['~BUY_URL_TEMPLATE'],
            '~COMPARE_URL_TEMPLATE' => $arResult['~COMPARE_URL_TEMPLATE'],
            '~COMPARE_DELETE_URL_TEMPLATE' => $arResult['~COMPARE_DELETE_URL_TEMPLATE'],
            'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
            'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
            'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
            'BRAND_PROPERTY' => $arParams['BRAND_PROPERTY'],
            'MESS_BTN_BUY' => $arParams['~MESS_BTN_BUY'],
            'MESS_BTN_DETAIL' => $arParams['~MESS_BTN_DETAIL'],
            'MESS_BTN_COMPARE' => $arParams['~MESS_BTN_COMPARE'],
            'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
            'MESS_BTN_ADD_TO_BASKET' => $arParams['~MESS_BTN_ADD_TO_BASKET'],
        ];

        $areaIds = [];
        $itemParameters = [];

        foreach ($arResult['ITEMS'] as $item) {
            $uniqueId = $item['ID'] . '_' . md5($this->randString() . $component->getAction());
            $areaIds[$item['ID']] = $this->GetEditAreaId($uniqueId);
            $this->AddEditAction($uniqueId, $item['EDIT_LINK'], $elementEdit);
            $this->AddDeleteAction($uniqueId, $item['DELETE_LINK'], $elementDelete, $elementDeleteParams);

            $itemParameters[$item['ID']] = [
                'SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']],
                'MESS_NOT_AVAILABLE' => ($arResult['MODULES']['catalog'] && $item['PRODUCT']['TYPE'] === ProductTable::TYPE_SERVICE
                    ? $arParams['~MESS_NOT_AVAILABLE_SERVICE']
                    : $arParams['~MESS_NOT_AVAILABLE']
                ),
            ];
        }
        ?>
        <!-- items-container -->
        <?
        unset($rowItems);

        unset($itemParameters);
        unset($areaIds);

        unset($generalParams);
        ?>
        <!-- items-container -->
        <?
    } else {
        // load css for bigData/deferred load
        $APPLICATION->IncludeComponent(
            'bitrix:catalog.item',
            '',
            array(),
            $component,
            array('HIDE_ICONS' => 'Y')
        );
    }
    ?>
</div>
<?
if ($showLazyLoad) {
    ?>
    <div class="row bx-<?= $arParams['TEMPLATE_THEME'] ?>">
        <div class="btn btn-default btn-lg center-block" style="margin: 15px;"
             data-use="show-more-<?= $navParams['NavNum'] ?>">
            <?= $arParams['MESS_BTN_LAZY_LOAD'] ?>
        </div>
    </div>
    <?
}

if ($showBottomPager) {
    ?>
    <div data-pagination-num="<?= $navParams['NavNum'] ?>">
        <!-- pagination-container -->
        <?= $arResult['NAV_STRING'] ?>
        <!-- pagination-container -->
    </div>
    <?
}

$signer = new \Bitrix\Main\Security\Sign\Signer;
$signedTemplate = $signer->sign($templateName, 'catalog.section');
$signedParams = $signer->sign(base64_encode(serialize($arResult['ORIGINAL_PARAMETERS'])), 'catalog.section');
?>
<script>
    BX.message({
        BTN_MESSAGE_BASKET_REDIRECT: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_BASKET_REDIRECT')?>',
        BASKET_URL: '<?=$arParams['BASKET_URL']?>',
        ADD_TO_BASKET_OK: '<?=GetMessageJS('ADD_TO_BASKET_OK')?>',
        TITLE_ERROR: '<?=GetMessageJS('CT_BCS_CATALOG_TITLE_ERROR')?>',
        TITLE_BASKET_PROPS: '<?=GetMessageJS('CT_BCS_CATALOG_TITLE_BASKET_PROPS')?>',
        TITLE_SUCCESSFUL: '<?=GetMessageJS('ADD_TO_BASKET_OK')?>',
        BASKET_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCS_CATALOG_BASKET_UNKNOWN_ERROR')?>',
        BTN_MESSAGE_SEND_PROPS: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_SEND_PROPS')?>',
        BTN_MESSAGE_CLOSE: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_CLOSE')?>',
        BTN_MESSAGE_CLOSE_POPUP: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_CLOSE_POPUP')?>',
        COMPARE_MESSAGE_OK: '<?=GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_OK')?>',
        COMPARE_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_UNKNOWN_ERROR')?>',
        COMPARE_TITLE: '<?=GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_TITLE')?>',
        PRICE_TOTAL_PREFIX: '<?=GetMessageJS('CT_BCS_CATALOG_PRICE_TOTAL_PREFIX')?>',
        RELATIVE_QUANTITY_MANY: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY'])?>',
        RELATIVE_QUANTITY_FEW: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW'])?>',
        BTN_MESSAGE_COMPARE_REDIRECT: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT')?>',
        BTN_MESSAGE_LAZY_LOAD: '<?=CUtil::JSEscape($arParams['MESS_BTN_LAZY_LOAD'])?>',
        BTN_MESSAGE_LAZY_LOAD_WAITER: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_LAZY_LOAD_WAITER')?>',
        SITE_ID: '<?=CUtil::JSEscape($component->getSiteId())?>'
    });
    var <?=$obName?> = new JCCatalogSectionComponent({
        siteId: '<?=CUtil::JSEscape($component->getSiteId())?>',
        componentPath: '<?=CUtil::JSEscape($componentPath)?>',
        navParams: <?=CUtil::PhpToJSObject($navParams)?>,
        deferredLoad: false, // enable it for deferred load
        initiallyShowHeader: '<?=!empty($arResult['ITEM_ROWS'])?>',
        bigData: <?=CUtil::PhpToJSObject($arResult['BIG_DATA'])?>,
        lazyLoad: !!'<?=$showLazyLoad?>',
        loadOnScroll: !!'<?=($arParams['LOAD_ON_SCROLL'] === 'Y')?>',
        template: '<?=CUtil::JSEscape($signedTemplate)?>',
        ajaxId: '<?=CUtil::JSEscape($arParams['AJAX_ID'] ?? '')?>',
        parameters: '<?=CUtil::JSEscape($signedParams)?>',
        container: '<?=$containerName?>'
    });
</script>
<!-- component-end -->
<?$APPLICATION->IncludeComponent(
    "bitrix:menu",
    "trate-catalog-menu",
    array(
        "ALLOW_MULTI_SELECT" => "N",
        "CHILD_MENU_TYPE" => "left",
        "DELAY" => "N",
        "MAX_LEVEL" => "1",
        "MENU_CACHE_GET_VARS" => array(
        ),
        "MENU_CACHE_TIME" => "3600",
        "MENU_CACHE_TYPE" => "N",
        "MENU_CACHE_USE_GROUPS" => "Y",
        "ROOT_MENU_TYPE" => "left",
        "USE_EXT" => "N",
        "COMPONENT_TEMPLATE" => "trate-catalog-menu"
    ),
    false
);?>
<?
//echo "<pre>";
//echo print_r($arResult);
//echo "</pre>";


if ($arResult["DEPTH_LEVEL"] > 1): ?>
    <div class="brix---hero-bg-image-dark">
        <div class="brix---container-default-3 w-container">
            <div class="w-layout-grid brix---grid-2-col---1-col-t">
                <div id="w-node-_74c47ccc-8f10-86ea-9e04-7ebac3c8af9e-11bd7221"
                     data-w-id="74c47ccc-8f10-86ea-9e04-7ebac3c8af9e" class="div-block">

                    <img src="<?= CFile::GetPath($arResult["PARENT"]["DETAIL_PICTURE"]) ?>" loading="lazy" alt=""
                         class="img-1">
                    <div class="brix---color-neutral-100">
                        <div class="trns">
                            <img src="<?= CFile::GetPath($arResult["PARENT"]["UF_MAIN_PICTURE_MOBILE"]) ?>"
                                 loading="lazy"
                                 alt="" height="600" class="image-4">
                        </div>
                        <h1 class="brix---heading-h1-size"><?= $arResult["PARENT"]["UF_HEADER"] ?></h1>
                    </div>
                    <div class="brix---mg-bottom-40px-2">
                        <div class="brix---color-neutral-100">
                            <p class="brix---paragraph-default-2"><?= $arResult["PARENT"]["DESCRIPTION"] ?></p>
                        </div>
                    </div>
                    <div class="brix---buttons-row"><a href="<?= $arResult['PARENT']['SECTION_PAGE_URL'] ?>"
                                                       class="brix---btn-primary-small-inh w-button">Подробнее</a>
                    </div>
                </div>
                <img class="image-3" src="<?= CFile::GetPath($arResult["UF_MAIN_PICTURE"]) ?>" alt=""
                     sizes="(max-width: 1439px) 100vw, 1414.0078125px" data-w-id="375e2d52-2b97-e06d-ae88-8f3e8cf551e0"
                     id="w-node-_375e2d52-2b97-e06d-ae88-8f3e8cf551e0-11bd7221"
                     loading="lazy"
                     srcset="
                 <?= CFile::GetPath($arResult['PARENT']["UF_MAIN_PICTURE"]) ?> 500w,
                 <?= CFile::GetPath($arResult['PARENT']["UF_MAIN_PICTURE"]) ?> 800w,
                 <?= CFile::GetPath($arResult['PARENT']["UF_MAIN_PICTURE"]) ?> 1080w,
                 <?= CFile::GetPath($arResult['PARENT']["UF_MAIN_PICTURE"]) ?> 1414w">
            </div>
        </div>
    </div>


    <section id="catalog" class="catalog-selection">
        <div class="container-main-cat">
            <div class="gallery-wrapper">

                <div id="w-node-c08204ea-56a2-aaa7-3212-f03f9838a943-11bd7221" class="gallery-block">
                    <div class="catalog__filter__top">
                        <div class="flex">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/66041dd969a5d9c159f93534_SlidersHorizontal.svg"
                                 alt="">
                            <span>Фильтр</span>
                        </div>
                        <a href="#" class="filter-btn-news-exit" id="filter-btn-news-exit">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/66040d32b39cfc5e29a1cbb7_clolse-mob.svg"
                                 alt="close">
                        </a>
                    </div>
                    <h3 class="heading-1"><?= $arResult["PARENT"]["NAME"] ?></h3>
                    <? if ($arResult["DEPTH_LEVEL"] > 1): ?>
                        <div class="cat-lt">
                            <?= $arResult["NAME"] ?>
                        </div>
                    <? endif; ?>
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:catalog.filter",
                        "catalog-filter",
                        array(
                            "CACHE_GROUPS" => "Y",
                            "CACHE_TIME" => "36000000",
                            "CACHE_TYPE" => "A",
                            "FIELD_CODE" => array("", ""),
                            "FILTER_NAME" => "arrFilter",
                            "IBLOCK_ID" => "4",
                            "IBLOCK_TYPE" => "catalog",
                            "LIST_HEIGHT" => "5",
                            "NUMBER_WIDTH" => "5",
                            "PAGER_PARAMS_NAME" => "arrPager",
                            "PREFILTER_NAME" => "preFilter",
                            "PRICE_CODE" => array(),
                            "PROPERTY_CODE" => array("DIAMETER", "LENGTH", ""),
                            "SAVE_IN_SESSION" => "N",
                            "TEXT_WIDTH" => "20"
                        )
                    ); ?>

                </div>
                <div id="w-node-c08204ea-56a2-aaa7-3212-f03f9838a955-11bd7221" class="gallery-grid">
                    <div class="cat-1">
                        <a href="#" id="filter-btn" class="filters w-inline-block">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/66041dd969a5d9c159f93534_SlidersHorizontal.svg"
                                 loading="lazy" alt=""
                                 class="image-6">
                        </a>
                        <? foreach ($arResult['SIBLINGS'] as $arSection): ?>
                            <a href="<?= $arSection["SECTION_PAGE_URL"] ?>"
                               class="<?= $arSection['CODE'] === $arResult['CODE'] ? 'brix---btn-cat' : 'brix---btn-cat-normal' ?> w-button"><?= $arSection['NAME'] ?></a>
                        <? endforeach; ?>
                    </div>
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:news.list",
                        "catalog-product-list",
                        array(
                            "ACTIVE_DATE_FORMAT" => "d.m.Y",
                            "ADD_SECTIONS_CHAIN" => "Y",
                            "AJAX_MODE" => "N",
                            "AJAX_OPTION_ADDITIONAL" => "",
                            "AJAX_OPTION_HISTORY" => "N",
                            "AJAX_OPTION_JUMP" => "N",
                            "AJAX_OPTION_STYLE" => "Y",
                            "CACHE_FILTER" => "N",
                            "CACHE_GROUPS" => "Y",
                            "CACHE_TIME" => "36000000",
                            "CACHE_TYPE" => "A",
                            "CHECK_DATES" => "Y",
                            "DETAIL_URL" => "",
                            "DISPLAY_BOTTOM_PAGER" => "Y",
                            "DISPLAY_DATE" => "Y",
                            "DISPLAY_NAME" => "Y",
                            "DISPLAY_PICTURE" => "Y",
                            "DISPLAY_PREVIEW_TEXT" => "Y",
                            "DISPLAY_TOP_PAGER" => "N",
                            "FIELD_CODE" => array("XML_ID", ""),
                            "FILTER_NAME" => "arrFilter",
                            "HIDE_LINK_WHEN_NO_DETAIL" => "N",
                            "IBLOCK_ID" => "4",
                            "IBLOCK_TYPE" => "catalog",
                            "INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
                            "INCLUDE_SUBSECTIONS" => "Y",
                            "MESSAGE_404" => "",
                            "NEWS_COUNT" => "20",
                            "PAGER_BASE_LINK_ENABLE" => "N",
                            "PAGER_DESC_NUMBERING" => "N",
                            "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                            "PAGER_SHOW_ALL" => "N",
                            "PAGER_SHOW_ALWAYS" => "N",
                            "PAGER_TEMPLATE" => ".default",
                            "PAGER_TITLE" => "Новости",
                            "PARENT_SECTION" => $arResult["ID"],
                            "PARENT_SECTION_CODE" => $arResult["CODE"],
                            "PREVIEW_TRUNCATE_LEN" => "",
                            "PROPERTY_CODE" => array("DIAMETER", "LENGTH", ""),
                            "SET_BROWSER_TITLE" => "Y",
                            "SET_LAST_MODIFIED" => "N",
                            "SET_META_DESCRIPTION" => "Y",
                            "SET_META_KEYWORDS" => "Y",
                            "SET_STATUS_404" => "N",
                            "SET_TITLE" => "Y",
                            "SHOW_404" => "N",
                            "SORT_BY1" => "ACTIVE_FROM",
                            "SORT_BY2" => "SORT",
                            "SORT_ORDER1" => "DESC",
                            "SORT_ORDER2" => "ASC",
                            "STRICT_SECTION_CHECK" => "N"
                        )
                    ); ?>
                </div>
            </div>
        </div>
    </section>
    <script>
        var breadcrumbs = document.querySelector(".dir-main");
        var place = document.querySelector(".container-main-cat");
        place.insertAdjacentElement('afterbegin', breadcrumbs);
        var placefirstchild = document.querySelector(".implant_details__title");


    </script>
<? endif; ?>

<?

if ($arResult["DEPTH_LEVEL"] == 1): ?>

<div class="brix---hero-bg-image-dark">
    <div class="brix---container-default-3 w-container">
        <div class="w-layout-grid brix---grid-2-col---1-col-t">
            <div id="w-node-_3f505e56-111c-7a55-18df-11f4157495d3-11bd7221" class="div-block">
                <img src="<?= $arResult['DETAIL_PICTURE']["SRC"] ?>" loading="lazy" alt="" class="img-1">
                <div class="brix---color-neutral-100">
                    <div class="trns">
                        <img src="<?= CFile::GetPath($arResult['BANNER']['BACKGROUND_MOBILE']) ?>" loading="lazy"
                             alt="" height="600" class="image-4">
                    </div>
                    <h1 class="brix---heading-h1-size none-ewgweg">
                        <?= $arResult["BANNER"]["HEADER"] ?>
                    </h1>
                </div>
                <div class="brix---mg-bottom-40px-2">
                    <div class="brix---color-neutral-100">
                        <p class="brix---paragraph-default-2 fz21">
                            <?= $arResult['BANNER']['TEXT'] ?>
                        </p>
                    </div>
                </div>
                <div class="brix---buttons-row">
                    <a href="<?= $arResult['BANNER']['LINK'] ?>" class="btn-main-g w-button izm">Каталог</a>
                    <a href="<?= CFile::GetPath($arResult['BANNER']['DOC']) ?>" class="btn-main-t w-button izm">Скачать
                        PDF</a>
                </div>
            </div>
            <img src="<?= CFile::GetPath($arResult['BANNER']['BACKGROUND']) ?>" loading="lazy"
                 id="w-node-_3f505e56-111c-7a55-18df-11f4157495e1-11bd7221"
                 sizes="(max-width: 1439px) 100vw, 1414.0078125px" alt=""
                 srcset="<?= CFile::GetPath($arResult['BANNER']['BACKGROUND']) ?> 500w,
                            <?= CFile::GetPath($arResult['BANNER']['BACKGROUND']) ?> 800w,
                            <?= CFile::GetPath($arResult['BANNER']['BACKGROUND']) ?> 1080w,
                            <?= CFile::GetPath($arResult['BANNER']['BACKGROUND']) ?> 1414w"
                 class="image-3"></div>
    </div>
</div>

<section class="implant_details">
    <div class="container">

        <h5 class="implant_details__title">
            <?= $arResult["SECTION1"]['HEADER'] ?>
        </h5>
        <p class="implant_details__p">
            <?= $arResult['SECTION1']['TEXT'] ?>
        </p>
    </div>
</section>

<section class="implant_details_info">
    <div class="container">

        <!--            <div class="implant_details_info__grid">-->
        <!--                <div class="implant_details_info__grid__img">-->
        <!--                    <div class="implant_details_info__grid__img__div">-->
        <!--                        --><?php //foreach ($arResult['SECTION2'][0]['PICTURES'] as $index => $picture): ?>
        <!--                            <img class="implant_details_info__grid__img__replace-->
        <?php //if ($index === 0) echo ' active'; ?><!--"-->
        <!--                                 src="--><?php //= CFile::GetPath($picture) ?><!--"-->
        <!--                                 alt="">-->
        <!--                        --><?php //endforeach; ?>
        <!--                    </div>-->
        <!--                    <img src="-->
        <?php //= CFile::GetPath($arResult['SECTION2'][0]['BACKGROUND']) ?><!--" alt="">-->
        <!--                </div>-->
        <!--                <div class="implant_details_info__grid__txt">-->
        <!--                    <span class="implant_details_info__grid__pre">-->
        <!--                        --><?php //= $arResult['SECTION2'][0]['PREHEADER'] ?>
        <!--                    </span>-->
        <!--                    <h5 class="implant_details_info__grid__title">-->
        <!--                        --><?php //= $arResult['SECTION2'][0]['HEADER'] ?>
        <!--                    </h5>-->
        <!--                    <span class="implant_details_info__grid__pre2">-->
        <!--                        --><?php //= $arResult['SECTION2'][0]['UNDERHEADER'] ?>
        <!--                    </span>-->
        <!--                    <ul class="implant_details_info__grid__txt__ul">-->
        <!--                        --><?php //foreach ($arResult['SECTION2'][0]['ADVANCES'] as $index => $advance): ?>
        <!--                            <li class="implant_details_info__grid__txt__li -->
        <?php //if ($index === 0) echo ' active'; ?><!--">-->
        <!--                                --><?php //= $advance ?>
        <!--                            </li>-->
        <!--                        --><?php //endforeach; ?>
        <!--                    </ul>-->
        <!--                    <a class="implant_details_info__grid__txt__btn" href="-->
        <?php //=$arResult['']?><!--">-->
        <!--                        В каталог-->
        <!--                    </a>-->
        <!--                </div>-->
        <!--            </div>-->

<!--        --><?// foreach ($arResult['SECTION2'] as $key => $section): ?>
<!--            <div class="implant_details_info__grid">-->
<!--                <div class="implant_details_info__grid__img">-->
<!--                    <div class="implant_details_info__grid__img__div">-->
<!--                        --><?php //foreach ($section['PICTURES'] as $index => $picture): ?>
<!--                            <video class="implant_details_info__grid__img__replace--><?php //if ($index === 0) echo ' active'; ?><!--"-->
<!--                                   loop="loop">-->
<!--                                <source src="--><?php //= CFile::GetPath($picture) ?><!--" type="video/mp4">-->
<!--                                Your browser does not support the video tag.-->
<!--                            </video>-->
<!--                        --><?php //endforeach; ?>
<!--                    </div>-->
<!--                    <img src="--><?php //= CFile::GetPath($section['BACKGROUND']) ?><!--" alt="">-->
<!--                </div>-->
<!--                <div class="implant_details_info__grid__txt">-->
<!--            <span class="implant_details_info__grid__pre">-->
<!--                --><?php //= $section['PREHEADER'] ?>
<!--            </span>-->
<!--                    <h5 class="implant_details_info__grid__title">-->
<!--                        --><?php //= $section['HEADER'] ?>
<!--                    </h5>-->
<!--                    <span class="implant_details_info__grid__pre2">-->
<!--                --><?php //= $section['UNDERHEADER'] ?>
<!--            </span>-->
<!--                    <ul class="implant_details_info__grid__txt__ul">-->
<!--                        --><?php //foreach ($section['ADVANCES'] as $index => $advance): ?>
<!--                            <li class="implant_details_info__grid__txt__li --><?php //if ($index === 0) echo ' active'; ?><!--">-->
<!--                                --><?php //= $advance ?>
<!--                            </li>-->
<!--                        --><?php //endforeach; ?>
<!--                    </ul>-->
<!--                    <a class="implant_details_info__grid__txt__btn" href="--><?php //= $section['LINK'] ?><!--">-->
<!--                        В каталог-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--        --><?// endforeach; ?>
        <? foreach ($arResult['SECTION2'] as $key => $section): ?>
            <? if ($key % 2 === 0): ?>
                <div class="implant_details_info__grid">
                    <div class="implant_details_info__grid__img">
                        <div class="implant_details_info__grid__img__div">
                            <?php foreach ($section['PICTURES'] as $index => $picture): ?>
                                <?if(is_image(CFile::GetPath($picture))):?>
                                    <img class="implant_details_info__grid__img__replace<?php if ($index === 0) echo ' active'; ?>" src="<?= CFile::GetPath($picture) ?>" alt="">
                                <?else:?>
                                    <video class="implant_details_info__grid__img__replace<?php if ($index === 0) echo ' active'; ?>" loop="loop" autoplay muted playsinline>
                                        <source src="<?= CFile::GetPath($picture) ?>" type="video/mp4; codecs=hevc,mp4a.40.2" />
                                        <source src="<?= CFile::GetPath($picture) ?>" type="video/mp4; codecs=av01.0.05M.08,opus" />
                                        <source src="<?= CFile::GetPath($picture) ?>" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" />
                                    </video>
                                <?endif;?>
                            <?php endforeach; ?>
                        </div>
                        <img src="<?= CFile::GetPath($section['BACKGROUND']) ?>" alt="">
                    </div>
                    <div class="implant_details_info__grid__txt">
                            <span class="implant_details_info__grid__pre">
                                <?= $section['PREHEADER'] ?>
                            </span>
                        <h5 class="implant_details_info__grid__title">
                            <?= $section['HEADER'] ?>
                        </h5>
                        <span class="implant_details_info__grid__pre2">
                                <?= $section['UNDERHEADER'] ?>
                            </span>
                        <ul class="implant_details_info__grid__txt__ul">
                            <?php foreach ($section['ADVANCES'] as $index => $advance): ?>
                                <li class="implant_details_info__grid__txt__li <?php if ($index === 0) echo ' active'; ?>">
                                    <?= $advance ?>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                        <a class="implant_details_info__grid__txt__btn" href="<?= $section['LINK'] ?>">
                            В каталог
                        </a>
                    </div>
                </div>
            <? else: ?>
                <div class="implant_details_info__grid">
                    <div class="implant_details_info__grid__txt">
                                            <span class="implant_details_info__grid__pre">
                                                <?= $section['PREHEADER'] ?>
                                            </span>
                        <h5 class="implant_details_info__grid__title">
                            <?= $section['HEADER'] ?>
                        </h5>
                        <span class="implant_details_info__grid__pre2">
                                                <?= $section['UNDERHEADER'] ?>
                                            </span>
                        <ul class="implant_details_info__grid__txt__ul">
                            <?php foreach ($section['ADVANCES'] as $index => $advance): ?>
                                <li class="implant_details_info__grid__txt__li <?php if ($index === 0) echo ' active'; ?>">
                                    <?= $advance ?>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                        <a class="implant_details_info__grid__txt__btn" href="#">
                            В каталог
                        </a>
                    </div>
                    <div class="implant_details_info__grid__img">
                        <div class="implant_details_info__grid__img__div">
                            <?php foreach ($section['PICTURES'] as $index => $picture): ?>
                                <?if(is_image(CFile::GetPath($picture))):?>
                                    <img class="implant_details_info__grid__img__replace<?php if ($index === 0) echo ' active'; ?>" src="<?= CFile::GetPath($picture) ?>" alt="">
                                <?else:?>
                                    <video class="implant_details_info__grid__img__replace<?php if ($index === 0) echo ' active'; ?>" loop="loop" autoplay playsinline muted>
                                        <source src="<?= CFile::GetPath($picture) ?>" type="video/mp4; codecs=hevc,mp4a.40.2" />
                                        <source src="<?= CFile::GetPath($picture) ?>" type="video/mp4; codecs=av01.0.05M.08,opus" />
                                        <source src="<?= CFile::GetPath($picture) ?>" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" />
                                    </video>
                                <?endif;?>
                            <?php endforeach; ?>
                        </div>
                        <img src="<?= CFile::GetPath($section['BACKGROUND']) ?>" alt="">
                    </div>
                </div>
            <? endif; ?>
        <? endforeach; ?>

        <!--            <div class="implant_details_info__grid">-->
        <!--                <div class="implant_details_info__grid__txt">-->
        <!--                    <span class="implant_details_info__grid__pre">-->
        <!--                        PRE HEADER-->
        <!--                    </span>-->
        <!--                    <h5 class="implant_details_info__grid__title">-->
        <!--                        Двухсоставной имплантат с комбинированной резьбой-->
        <!--                    </h5>-->
        <!--                    <span class="implant_details_info__grid__pre2">-->
        <!--                        на двухсоставных имплантатах-->
        <!--                    </span>-->
        <!--                    <ul class="implant_details_info__grid__txt__ul">-->
        <!--                        <li class="implant_details_info__grid__txt__li active">-->
        <!--                            Высокая первичная стабильность у всех типов костей-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Активная самонарезающая резьба-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Надежное соединение имплантат-абатмент-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Cтабильное и безопасное соединение-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Изготовлены из Ti6Al4V-->
        <!--                        </li>-->
        <!--                    </ul>-->
        <!--                    <a class="implant_details_info__grid__txt__btn" href="#">-->
        <!--                        В каталог-->
        <!--                    </a>-->
        <!--                </div>-->
        <!--                <div class="implant_details_info__grid__img">-->
        <!--                    <img src="assets/img/11.png" alt="">-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="implant_details_info__grid">-->
        <!--                <div class="implant_details_info__grid__img">-->
        <!--                    <img src="assets/img/11.png" alt="">-->
        <!--                </div>-->
        <!--                <div class="implant_details_info__grid__txt">-->
        <!--                    <span class="implant_details_info__grid__pre">-->
        <!--                        PRE HEADER-->
        <!--                    </span>-->
        <!--                    <h5 class="implant_details_info__grid__title">-->
        <!--                        Двухсоставной имплантат с комбинированной резьбой-->
        <!--                    </h5>-->
        <!--                    <span class="implant_details_info__grid__pre2">-->
        <!--                        на двухсоставных имплантатах-->
        <!--                    </span>-->
        <!--                    <ul class="implant_details_info__grid__txt__ul">-->
        <!--                        <li class="implant_details_info__grid__txt__li active">-->
        <!--                            Высокая первичная стабильность у всех типов костей-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Активная самонарезающая резьба-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Надежное соединение имплантат-абатмент-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Cтабильное и безопасное соединение-->
        <!--                        </li>-->
        <!--                        <li class="implant_details_info__grid__txt__li">-->
        <!--                            Изготовлены из Ti6Al4V-->
        <!--                        </li>-->
        <!--                    </ul>-->
        <!--                    <a class="implant_details_info__grid__txt__btn" href="#">-->
        <!--                        В каталог-->
        <!--                    </a>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--       -->

    </div>
</section>

<section class="s-wt">
    <div class="container">
        <div class="frame-1332">
            <div class="frame-1543">
                <?= $arResult['SECTION3']['TEXT'] ?>
                <!--                    <div class="frame-1544">-->
                <!--                        <div class="text-15">pre header</div>-->
                <!--                        <div class="text-16">Характеристики компрессионных имплантов Trate AG</div>-->
                <!--                    </div>-->
                <!--                    <div class="frame-1545">-->
                <!--                        <div class="text-17">Импланты компрессионного типа минимизируют риск периимплантита в том числе-->
                <!--                            у курильщиков. Это связано с тем, что рабочая зона однофазных имплантатов, в которой-->
                <!--                            происходит остеоинтеграция имплантата и кости, лежит глубоко в базальной-->
                <!--                            кости. То есть далеко от поверхности слизистой оболочки, с которой начинается бактериальная-->
                <!--                            колонизация поверхности имплантата.-->
                <!--                        </div>-->
                <!--                        <div class="text-17">Имплантаты для компрессионной имплантации имеют длинную полированную шейку,-->
                <!--                            которая препятствует постепенному прилипанию и росту бактерий. Благодаря такой конструкции,-->
                <!--                            компрессионные имплантаты являются наилучшим вариантом для-->
                <!--                            состояний, которые способствуют развитию периимплантиту:-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                    <div class="frame-1546">-->
                <!--                        <div class="frame-1547">-->
                <!--                            <ul role="list" class="list-2">-->
                <!--                                <li>-->
                <!--                                    <div class="text-18">Курение</div>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                        <div class="frame-1547">-->
                <!--                            <ul role="list" class="list-2">-->
                <!--                                <li>-->
                <!--                                    <div class="text-18">Нерегулярная чистка зубов</div>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                        <div class="frame-1547">-->
                <!--                            <ul role="list" class="list-2">-->
                <!--                                <li>-->
                <!--                                    <div class="text-18">Ротовое дыхание</div>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                        <div class="frame-1547">-->
                <!--                            <ul role="list" class="list-2">-->
                <!--                                <li>-->
                <!--                                    <div class="text-18">Хроническая сухость слизистой оболочки полости рта</div>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                        <div class="frame-1547">-->
                <!--                            <ul role="list" class="list-2">-->
                <!--                                <li>-->
                <!--                                    <div class="text-18">Хроническая инфекция в ротовой полости (при гингивите,-->
                <!--                                        тонзиллите)-->
                <!--                                    </div>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                        <div class="frame-1547">-->
                <!--                            <ul role="list" class="list-2">-->
                <!--                                <li>-->
                <!--                                    <div class="text-18">Тонкая десна (толщиной менее 2 мм).</div>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                    <div class="text-17">COMPRESSIVE MS могут устанавливаться при узком альвеолярном гребне.-->
                <!--                        Рекомендовано использовать для множественных реставраций во фронтальной области.-->
                <!--                    </div>-->
                <div class="brix---buttons-row"><a href="#" class="btn-main-gs w-button">В каталог</a><a href="#"
                                                                                                         class="btn-main-ts w-button">Скачать
                        PDF</a></div>
            </div>
        </div>
    </div>
</section>
<section class="implant_details_center">
    <div class="container">
        <div class="implant_details_center__wrap">
            <?= $arResult['SECTION4']['TEXT'] ?>
        </div>
    </div>
</section>
<section class="s-li">
    <? foreach ($arResult["SECTION5"] as $key => $item): ?>
        <div class="<?= ($key % 2 === 0) ? 'frame-1336' : 'frame-1336-w' ?>">
            <div class="frame-1548">
                <div class="frame-1497">
                    <img src="<?= CFile::GetPath($item['ICON']) ?>" loading="lazy"
                         width="195" height="310" alt="" class="roott-b-1">
                    <img src="<?= CFile::GetPath($item['NAME_ICON']) ?>" loading="lazy" width="157"
                         height="32" alt="" class="roott-r-17"></div>
                <div class="frame-1337">
                    <div class="frame-1338">
                        <div class="basal">
                            <div class="basal basal"><span class="basal-0"><?= $item['HEADER'] ?></span><span
                                        class="basal-1"> </span></div>
                        </div>
                        <div class="text-22">
                            <?= $item['TEXT'] ?>
                        </div>
                    </div>
                    <a href="<?= $item['LINK'] ?>" class="btn-more-b w-inline-block">
                        <div>Подробнее</div>
                    </a>
                </div>
            </div>
        </div>
    <? endforeach; ?>

    <section class="s-wl">
        <div class="container">
            <div class="frame-1335">
                <div class="text-21">
                    <?= $arResult['SECTION6']['TEXT'] ?>
                </div>
                <a href="#" class="btn-main-g w-button">Скачать PDF</a>
            </div>
        </div>
    </section>

    <?$APPLICATION->IncludeComponent(
        "gala:main.feedback",
        "",
        Array(
            "EMAIL_TO" => "galaktion.tatarinow@yandex.ru",
            "EVENT_MESSAGE_ID" => array(0=>"7",),
            "OK_TEXT" => "Спасибо, ваше сообщение принято.",
            "REQUIRED_FIELDS" => array(0=>"NAME",1=>"PHONE",3=>"MESSAGE",4=>"LETTER_SUBJECT",),
            "USE_CAPTCHA" => "N"
        )
    );?>
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
                <p class="call__wrap__form__p">
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
    <style>
        .three-body {
 --uib-size: 35px;
 --uib-speed: 0.8s;
 --uib-color: #ADD15A;
 position: relative;
 display: inline-block;
 height: var(--uib-size);
 width: var(--uib-size);
 animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
 position: absolute;
 height: 100%;
 width: 30%;
}

.three-body__dot:after {
 content: '';
 position: absolute;
 height: 0%;
 width: 100%;
 padding-bottom: 100%;
 background-color: var(--uib-color);
 border-radius: 50%;
}

.three-body__dot:nth-child(1) {
 bottom: 5%;
 left: 0;
 transform: rotate(60deg);
 transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
 bottom: 0;
 left: 0;
 animation: wobble1 var(--uib-speed) infinite ease-in-out;
 animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
 bottom: 5%;
 right: 0;
 transform: rotate(-60deg);
 transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
 bottom: 0;
 left: 0;
 animation: wobble1 var(--uib-speed) infinite
    calc(var(--uib-speed) * -0.15) ease-in-out;
}

.three-body__dot:nth-child(3) {
 bottom: -5%;
 left: 0;
 transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
 top: 0;
 left: 0;
 animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
 0% {
  transform: rotate(0deg);
 }

 100% {
  transform: rotate(360deg);
 }
}

@keyframes wobble1 {
 0%,
  100% {
  transform: translateY(0%) scale(1);
  opacity: 1;
 }

 50% {
  transform: translateY(-66%) scale(0.65);
  opacity: 0.8;
 }
}

@keyframes wobble2 {
 0%,
  100% {
  transform: translateY(0%) scale(1);
  opacity: 1;
 }

 50% {
  transform: translateY(66%) scale(0.65);
  opacity: 0.8;
 }
}

.three-body_wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

    </style>
    <script src="/local/templates/trate/assets/js/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script>

        var breadcrumbs = document.querySelector('.dir-main');
        var destination = document.querySelector('.implant_details__title');

        if (breadcrumbs && destination) {
            destination.parentNode.insertBefore(breadcrumbs, destination);
        }

        // function autoplayVideos() {
        //     console.log("Autoplay function called"); // Проверяем, вызывается ли функция
        //     var gridContainers = document.querySelectorAll('.implant_details_info__grid');
        //
        //     gridContainers.forEach(function(container) {
        //         console.log("Grid container found"); // Проверяем, находятся ли контейнеры с классом implant_details_info__grid
        //         var liElements = container.querySelectorAll('.implant_details_info__grid__txt__li');
        //         var videoElements = container.querySelectorAll('.implant_details_info__grid__img__replace');
        //
        //         liElements.forEach(function(li, index) {
        //             console.log("Looping through li elements"); // Проверяем, проходится ли цикл по элементам li
        //             videoElements[index].play();
        //             li.addEventListener('click', function() {
        //                 liElements.forEach(function (li) {
        //                     li.classList.remove('active');
        //                 });
        //
        //                 videoElements.forEach(function (video) {
        //                     video.pause();
        //                 });
        //
        //                 this.classList.add('active');
        //
        //                 videoElements[index].play();
        //
        //                 videoElements.forEach(function (img) {
        //                     img.classList.remove('active');
        //                 });
        //
        //                 videoElements[index].classList.add('active');
        //             });
        //         });
        //     });
        // }

        // Запускаем функцию как при загрузке страницы, так и при обновлении
        document.addEventListener("DOMContentLoaded", function() {
            var gridContainers = document.querySelectorAll('.implant_details_info__grid');

            gridContainers.forEach(function(container) {
                var liElements = container.querySelectorAll('.implant_details_info__grid__txt__li');
                var replaceElements = container.querySelectorAll('.implant_details_info__grid__img__replace');

                liElements.forEach(function(li, index) {
                    li.addEventListener('click', function() {
                        // Remove 'active' class from all li elements
                        liElements.forEach(function (li) {
                            li.classList.remove('active');
                        });
                        // Add 'active' class to the clicked li element
                        this.classList.add('active');

                        // Pause all videos and remove 'active' class from all replace elements
                        replaceElements.forEach(function (element) {
                            if (element.tagName === 'VIDEO') {
                                element.pause();
                            }
                            element.classList.remove('active');
                        });

                        // Play the corresponding video or show the corresponding image
                        var replaceElement = replaceElements[index];
                        if (replaceElement.tagName === 'VIDEO') {
                            replaceElement.play();
                        }
                        replaceElement.classList.add('active');
                    });
                });
            });
        });



        // Для обновления страницы
        // window.onload = function() {
        //     console.log("Window onload event fired"); // Проверяем, срабатывает ли событие загрузки страницы
        //     autoplayVideos();
        // };
        $('body').addClass('dont-scroll');
        $(window).on('load', function () {
            $preloader = $('.three-body_wrap'),
            $loader = $preloader.find('.three-body__dot');
            $('body').removeClass('dont-scroll');
            $loader.fadeOut();
            $preloader.delay(350).fadeOut('slow');
        });


    </script>
    <? endif; ?>
