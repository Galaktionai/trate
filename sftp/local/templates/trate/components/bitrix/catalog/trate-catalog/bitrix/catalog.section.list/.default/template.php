<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

$arViewModeList = $arResult['VIEW_MODE_LIST'];

$arViewStyles = array(
    'LIST' => array(
        'CONT' => 'bx_sitemap',
        'TITLE' => 'bx_sitemap_title',
        'LIST' => 'bx_sitemap_ul',
    ),
    'LINE' => array(
        'CONT' => 'bx_catalog_line',
        'TITLE' => 'bx_catalog_line_category_title',
        'LIST' => 'bx_catalog_line_ul',
        'EMPTY_IMG' => $this->GetFolder() . '/images/line-empty.png'
    ),
    'TEXT' => array(
        'CONT' => 'bx_catalog_text',
        'TITLE' => 'bx_catalog_text_category_title',
        'LIST' => 'bx_catalog_text_ul'
    ),
    'TILE' => array(
        'CONT' => 'bx_catalog_tile',
        'TITLE' => 'bx_catalog_tile_category_title',
        'LIST' => 'bx_catalog_tile_ul',
        'EMPTY_IMG' => $this->GetFolder() . '/images/tile-empty.png'
    )
);
$arCurView = $arViewStyles[$arParams['VIEW_MODE']];

$strSectionEdit = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_EDIT");
$strSectionDelete = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_DELETE");
$arSectionDeleteParams = array("CONFIRM" => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));

?>
<!--<div class="--><? // // echo $arCurView['CONT']; ?><!--">--><? // //
//    if ('Y' == $arParams['SHOW_PARENT_NAME'] && 0 < $arResult['SECTION']['ID']) {
//        $this->AddEditAction($arResult['SECTION']['ID'], $arResult['SECTION']['EDIT_LINK'], $strSectionEdit);
//        $this->AddDeleteAction($arResult['SECTION']['ID'], $arResult['SECTION']['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
//
//        ?><!--<h1-->
<!--        class="--><? // echo $arCurView['TITLE']; ?><!--"-->
<!--        id="--><? // echo $this->GetEditAreaId($arResult['SECTION']['ID']); ?><!--"-->
<!--        ><a href="--><? // echo $arResult['SECTION']['SECTION_PAGE_URL']; ?><!--">--><? // //
//            echo(
//            isset($arResult['SECTION']["IPROPERTY_VALUES"]["SECTION_PAGE_TITLE"]) && $arResult['SECTION']["IPROPERTY_VALUES"]["SECTION_PAGE_TITLE"] != ""
//                ? $arResult['SECTION']["IPROPERTY_VALUES"]["SECTION_PAGE_TITLE"]
//                : $arResult['SECTION']['NAME']
//            );
//            ?><!--</a></h1>--><? // //
//    }
//    if (0 < $arResult["SECTIONS_COUNT"]) {
//        ?>
<!--        <ul class="--><? // // echo $arCurView['LIST']; ?><!--">-->
<!--            --><? // //
//            $intCurrentDepth = 1;
//            $boolFirst = true;
//            foreach ($arResult['SECTIONS'] as &$arSection)
//            {
//            $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
//            $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
//
//            if ($intCurrentDepth < $arSection['RELATIVE_DEPTH_LEVEL']) {
//                if (0 < $intCurrentDepth)
//                    echo "\n", str_repeat("\t", $arSection['RELATIVE_DEPTH_LEVEL']), 'asd<ul>';
//            } elseif ($intCurrentDepth == $arSection['RELATIVE_DEPTH_LEVEL']) {
//                if (!$boolFirst)
//                    echo '</li>';
//            } else {
//                while ($intCurrentDepth > $arSection['RELATIVE_DEPTH_LEVEL']) {
//                    echo '</li>', "\n", str_repeat("\t", $intCurrentDepth), '</ul>', "\n", str_repeat("\t", $intCurrentDepth - 1);
//                    $intCurrentDepth--;
//                }
//                echo str_repeat("\t", $intCurrentDepth - 1), '</li>';
//            }
//
//            echo(!$boolFirst ? "\n" : ''), str_repeat("\t", $arSection['RELATIVE_DEPTH_LEVEL']);
//            ?><!--asdasd-->
<!--            <li id="--><?php //= $this->GetEditAreaId($arSection['ID']); ?><!--"><h2 class="bx_sitemap_li_title"><a-->
<!--                            href="--><? // // echo $arSection["SECTION_PAGE_URL"];
//                            ?><!--">--><? // // echo $arSection["NAME"];
//                        ?><!----><? // //
//                        if ($arParams["COUNT_ELEMENTS"] && $arSection['ELEMENT_CNT'] !== null) {
//                            ?><!-- <span>(--><? // // echo $arSection["ELEMENT_CNT"]; ?><!--)</span>--><? // //
//                        }
//                        ?><!--</a></h2>--><? // //
//
//                $intCurrentDepth = $arSection['RELATIVE_DEPTH_LEVEL'];
//                $boolFirst = false;
//                }
//                unset($arSection);
//                while ($intCurrentDepth > 1) {
//                    echo '</li>', "\n", str_repeat("\t", $intCurrentDepth), '</ul>', "\n", str_repeat("\t", $intCurrentDepth - 1);
//                    $intCurrentDepth--;
//                }
//                if ($intCurrentDepth > 0) {
//                    echo '</li>', "\n";
//                }
//
//                ?>
<!--        </ul>-->
<!--        --><? // //
//        echo('LINE' != $arParams['VIEW_MODE'] ? '<div style="clear: both;"></div>' : '');
//    }
//    ?><!--</div>-->

<? $APPLICATION->IncludeComponent(
    "bitrix:catalog.section.list",
    "trate-head-sections",
    array(
        "COMPONENT_TEMPLATE" => "trate-head-sections",
        "IBLOCK_TYPE" => "catalog",
        "IBLOCK_ID" => "4",
        "SECTION_ID" => $_REQUEST["SECTION_ID"],
        "SECTION_CODE" => "",
        "COUNT_ELEMENTS" => "Y",
        "COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
        "ADDITIONAL_COUNT_ELEMENTS_FILTER" => "additionalCountFilter",
        "HIDE_SECTIONS_WITH_ZERO_COUNT_ELEMENTS" => "N",
        "TOP_DEPTH" => "1",
        "SECTION_FIELDS" => array(
            0 => "",
            1 => "",
        ),
        "SECTION_USER_FIELDS" => array(
            0 => "UF_MAIN_PICTURE",
            1 => "",
        ),
        "FILTER_NAME" => "sectionsFilter",
        "VIEW_MODE" => "LIST",
        "SHOW_PARENT_NAME" => "Y",
        "SECTION_URL" => "/catalog/#SECTION_CODE#/",
        "CACHE_TYPE" => "N",
        "CACHE_TIME" => "36000000",
        "CACHE_GROUPS" => "Y",
        "CACHE_FILTER" => "N",
        "ADD_SECTIONS_CHAIN" => "Y"
    ),
    false
); ?>

<?php

//echo "<pre>";
//echo print_r($arResult);
//echo "</pre>";

?>
<!--<div class="brix---hero-bg-image-dark">-->
<!--    <div class="brix---container-default-3 w-container">-->
<!--        <div class="w-layout-grid brix---grid-2-col---1-col-t">-->
<!--            <div id="w-node-_74c47ccc-8f10-86ea-9e04-7ebac3c8af9e-11bd7221"-->
<!--                 data-w-id="74c47ccc-8f10-86ea-9e04-7ebac3c8af9e" class="div-block">-->
<!---->
<!--                <img src="--><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["DETAIL_PICTURE"]) ?><!--" loading="lazy" alt=""-->
<!--                     class="img-1">-->
<!--                <div class="brix---color-neutral-100">-->
<!--                    <div class="trns">-->
<!--                        <img src="--><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["UF_MAIN_PICTURE_MOBILE"]) ?><!--"-->
<!--                             loading="lazy"-->
<!--                             alt="" height="600" class="image-4">-->
<!--                    </div>-->
<!--                    <h1 class="brix---heading-h1-size">--><?php //= $arResult["HEADER_SECTION"]["UF_HEADER"] ?><!--</h1>-->
<!--                </div>-->
<!--                <div class="brix---mg-bottom-40px-2">-->
<!--                    <div class="brix---color-neutral-100">-->
<!--                        <p class="brix---paragraph-default-2">--><?php //= $arResult["HEADER_SECTION"]["DESCRIPTION"] ?><!--</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="brix---buttons-row"><a href="#" class="brix---btn-primary-small-inh w-button">Подробнее</a>-->
<!--                </div>-->
<!--            </div>-->
<!--            <img class="image-3" src="--><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["UF_MAIN_PICTURE"]) ?><!--" alt=""-->
<!--                 sizes="(max-width: 1439px) 100vw, 1414.0078125px" data-w-id="375e2d52-2b97-e06d-ae88-8f3e8cf551e0"-->
<!--                 id="w-node-_375e2d52-2b97-e06d-ae88-8f3e8cf551e0-11bd7221"-->
<!--                 loading="lazy"-->
<!--                 srcset="-->
<!--                 --><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["UF_MAIN_PICTURE"]) ?><!-- 500w,-->
<!--                 --><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["UF_MAIN_PICTURE"]) ?><!-- 800w,-->
<!--                 --><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["UF_MAIN_PICTURE"]) ?><!-- 1080w,-->
<!--                 --><?php //= CFile::GetPath($arResult["HEADER_SECTION"]["UF_MAIN_PICTURE"]) ?><!-- 1414w">-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<!---->
<!---->
<!--<section class="catalog-selection">-->
<!--    <div class="container-main-cat">-->
<!--        <div class="dir-main">-->
<!--            <a href="#" class="link-t w-inline-block">-->
<!--                <div class="link-t">Главная</div>-->
<!--            </a>-->
<!--            <div class="dot link-t">•</div>-->
<!--            <a href="#" class="link-t w-inline-block">-->
<!--                <div class="link-t">Главная</div>-->
<!--            </a>-->
<!--            <div class="dot link-t">•</div>-->
<!--            <a href="#" class="link-t w-inline-block">-->
<!--                <div class="link-t">Главная</div>-->
<!--            </a>-->
<!--        </div>-->
<!--        <div class="gallery-wrapper">-->
<!--            <div id="w-node-c08204ea-56a2-aaa7-3212-f03f9838a943-11bd7221" class="gallery-block">-->
<!--                <div class="catalog__filter__top">-->
<!--                    <div class="flex">-->
<!--                        <img src="assets/img/66041dd969a5d9c159f93534_SlidersHorizontal.svg" alt="">-->
<!--                        <span>Фильтр</span>-->
<!--                    </div>-->
<!--                    <a href="#" class="filter-btn-news-exit" id="filter-btn-news-exit">-->
<!--                        <img src="assets/img/66040d32b39cfc5e29a1cbb7_clolse-mob.svg" alt="close">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <h3 class="heading-1">ROOTT R</h3>-->
<!--                <div class="cat-lt">Имплантаты</div>-->
<!--                <div class="gallery-features-block">-->
<!--                    <ul role="list" class="gallery-list w-list-unstyled">-->
<!--                        <li class="ls">-->
<!--                            <div class="prod-brs"></div>-->
<!--                            <div data-w-id="f45e5769-3338-56f7-4886-4a784e0536ee" class="brix---accordion-item">-->
<!--                                <div class="brix---accordion-content-wrapper">-->
<!--                                    <div class="brix---accordion-header">-->
<!--                                        <div class="brix---color-neutral-802">-->
<!--                                            <div class="cat-lt-1">Диметр</div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div style="opacity: 0; transform: translate3d(0px, 20px, 0px) scale3d(0.96, 0.96, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; width: 182px; height: 0px;"-->
<!--                                         class="brix---acordion-body">-->
<!--                                        <div class="brix---accordion-spacer"></div>-->
<!--                                        <div class="brix---color-neutral-801">-->
<!--                                            <div class="brix---paragraph-default-3">-->
<!--                                                <div class="w-form">-->
<!--                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65fea9e02989eb1e11bd7221" data-wf-element-id="f45e5769-3338-56f7-4886-4a784e0536f9"><label class="w-checkbox cbxf"><div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-7" id="checkbox-7" data-name="Checkbox 7" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-7">3 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-6" id="checkbox-6" data-name="Checkbox 6" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-6">3.5 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-5" id="checkbox-5" data-name="Checkbox 5" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-5">3.8 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-4" id="checkbox-4" data-name="Checkbox 4" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-4">4.2 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-3" id="checkbox-3" data-name="Checkbox 3" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label"-->
<!--                                                                                                                                                                                                                                                                            for="checkbox-3">4.8 mm</span></label><label class="w-checkbox cbxf"><div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-2" id="checkbox-2" data-name="Checkbox 2" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-2">5.5 mm</span></label></form>-->
<!--                                                    <div class="w-form-done">-->
<!--                                                        <div>Thank you! Your submission has been received!</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="w-form-fail">-->
<!--                                                        <div>Oops! Something went wrong while submitting the form.</div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="brix---accordion-icon-wrapper"><img src="assets/img/65fef570f0517f7d1de731a6_CaretRight.svg" alt="" class="brix---accordion-arrow-icon"></div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="ls">-->
<!--                            <div class="prod-brs"></div>-->
<!--                            <div data-w-id="60b18b7b-c91a-2951-b123-eeb972390c22" class="brix---accordion-item">-->
<!--                                <div class="brix---accordion-content-wrapper">-->
<!--                                    <div class="brix---accordion-header">-->
<!--                                        <div class="brix---color-neutral-802">-->
<!--                                            <div class="cat-lt-1">Длинна</div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div style="height:0px;-webkit-transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"-->
<!--                                         class="brix---acordion-body">-->
<!--                                        <div class="brix---accordion-spacer"></div>-->
<!--                                        <div class="brix---color-neutral-801">-->
<!--                                            <div class="brix---paragraph-default-3">-->
<!--                                                <div class="w-form">-->
<!--                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65fea9e02989eb1e11bd7221" data-wf-element-id="60b18b7b-c91a-2951-b123-eeb972390c2d"><label class="w-checkbox cbxf"><div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-7" id="checkbox-7" data-name="Checkbox 7" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-7">0.6 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-6" id="checkbox-6" data-name="Checkbox 6" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-6">0.8 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-5" id="checkbox-5" data-name="Checkbox 5" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-5">10 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-4" id="checkbox-4" data-name="Checkbox 4" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-4">12 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-3" id="checkbox-3" data-name="Checkbox 3" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-3">14 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-2" id="checkbox-2" data-name="Checkbox 2" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-2">16 mm</span></label>-->
<!--                                                    </form>-->
<!--                                                    <div class="w-form-done">-->
<!--                                                        <div>Thank you! Your submission has been received!</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="w-form-fail">-->
<!--                                                        <div>Oops! Something went wrong while submitting the form.</div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="brix---accordion-icon-wrapper"><img src="assets/img/65fef570f0517f7d1de731a6_CaretRight.svg" alt="" class="brix---accordion-arrow-icon"></div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="ls">-->
<!--                            <div class="prod-brs"></div>-->
<!--                            <div data-w-id="60b18b7b-c91a-2951-b123-eeb972390c22" class="brix---accordion-item">-->
<!--                                <div class="brix---accordion-content-wrapper">-->
<!--                                    <div class="brix---accordion-header">-->
<!--                                        <div class="brix---color-neutral-802">-->
<!--                                            <div class="cat-lt-1">Длинна</div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div style="height:0px;-webkit-transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"-->
<!--                                         class="brix---acordion-body">-->
<!--                                        <div class="brix---accordion-spacer"></div>-->
<!--                                        <div class="brix---color-neutral-801">-->
<!--                                            <div class="brix---paragraph-default-3">-->
<!--                                                <div class="w-form">-->
<!--                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65fea9e02989eb1e11bd7221" data-wf-element-id="60b18b7b-c91a-2951-b123-eeb972390c2d"><label class="w-checkbox cbxf"><div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-7" id="checkbox-7" data-name="Checkbox 7" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-7">0.6 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-6" id="checkbox-6" data-name="Checkbox 6" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-6">0.8 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-5" id="checkbox-5" data-name="Checkbox 5" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-5">10 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-4" id="checkbox-4" data-name="Checkbox 4" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-4">12 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-3" id="checkbox-3" data-name="Checkbox 3" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-3">14 mm</span></label>-->
<!--                                                        <label class="w-checkbox cbxf">-->
<!--                                                            <div class="w-checkbox-input w-checkbox-input--inputType-custom chb"></div><input type="checkbox" name="checkbox-2" id="checkbox-2" data-name="Checkbox 2" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-2">16 mm</span></label>-->
<!--                                                    </form>-->
<!--                                                    <div class="w-form-done">-->
<!--                                                        <div>Thank you! Your submission has been received!</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="w-form-fail">-->
<!--                                                        <div>Oops! Something went wrong while submitting the form.</div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="brix---accordion-icon-wrapper"><img src="assets/img/65fef570f0517f7d1de731a6_CaretRight.svg" alt="" class="brix---accordion-arrow-icon"></div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="ls">-->
<!--                            <div class="prod-brs"></div>-->
<!--                            <a href="#" class="btn-filter-b w-inline-block">-->
<!--                                <div>Сбросить фильтры</div><img src="assets/img/65fee42161e9120bf596793b_X.svg" loading="lazy" alt=""></a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div id="w-node-c08204ea-56a2-aaa7-3212-f03f9838a955-11bd7221" class="gallery-grid">-->
<!--                <div class="cat-1">-->
<!--                    <a href="#" id="filter-btn" class="filters w-inline-block">-->
<!--                        <img src="--><?php //= SITE_TEMPLATE_PATH ?><!--/assets/img/66041dd969a5d9c159f93534_SlidersHorizontal.svg"-->
<!--                             loading="lazy" alt=""-->
<!--                             class="image-6">-->
<!--                    </a>-->
<!--                    --><?// foreach ($arResult['SECTIONS'] as $arSection): ?>
<!--                        --><?//
//                        $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
//                        $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
//                        ?>
                        <!--                        <a href="#" class="brix---btn-cat w-button">Имплантаты</a>-->
<!--                        <a id="--><?php //= $this->GetEditAreaId($arSection['ID']); ?><!--"-->
<!--                           href="--><?php //= $arSection["SECTION_PAGE_URL"] ?><!--"-->
<!--                           class="brix---btn-cat-normal w-button">--><?php //= $arSection['NAME'] ?><!--</a>-->
<!--                    --><?// endforeach; ?>
<!--                </div>-->
<!---->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->