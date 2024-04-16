<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
		'EMPTY_IMG' => $this->GetFolder().'/images/line-empty.png'
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
		'EMPTY_IMG' => $this->GetFolder().'/images/tile-empty.png'
	)
);
$arCurView = $arViewStyles[$arParams['VIEW_MODE']];

$strSectionEdit = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_EDIT");
$strSectionDelete = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_DELETE");
$arSectionDeleteParams = array("CONFIRM" => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));
//echo "<pre>";
//echo print_r($_SERVER['REQUEST_URI']);
//echo "</pre>";
//echo "<pre>";
//echo print_r($arResult['SECTIONS']);
//echo "</pre>";
//if (strpos($_SERVER['REQUEST_URI'], 'roott-r') !== false){
//    echo 'hello';
//}
?>
<section class="s-rootts">
    <div class="container-main">
        <!-- <div class="roott-main">
            <?
            //            $intCurrentDepth = 1;
            //            $boolFirst = true;
            ?>
            <? foreach ($arResult['SECTIONS'] as $arSection): ?>
                <?
                $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
                $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
                ?>
                <? if ($arSection['RELATIVE_DEPTH_LEVEL'] == 1): ?>
                    <a data-w-id="a3a0bf42-62d0-9e00-9208-f005024da465" href="/catalog<?=$arSection["UF_LINK"]?>" class="roott-card w-inline-block">
                    <div id="<?= $this->GetEditAreaId($arSection['ID']); ?>" class="roott-card-inner">
                        <img src="<?=$arSection['PICTURE']['SRC']?>" loading="lazy" alt="" class="roott-image">
                        <div class="div-block-6">
                            <img src="<?=CFile::GetPath($arSection['DETAIL_PICTURE'])?>" alt="">
                        </div>
                    </div>
                    <?php if (strpos($_SERVER['REQUEST_URI'], 'roott-r') !== false): ?>
                        <div style="width:100% <?php if($arSection['SELECTED']): ?>height: 6px<?php endif; ?>" class="roott-select"></div>
                    <?php else: ?>
                        <div style="width:100% <?php if($arSection['SELECTED']): ?>height: 6px<?php endif; ?>" class="roott-select"></div>
                    <?php endif; ?>
                    <?
                    // echo '<pre>';
                    // print_r($arSection);
                    // echo '</pre>';
                    ?>
                <? endif; ?>
                </a>
            <? endforeach; ?>
        </div> -->

        <div class="roott-main">
            <? foreach ($arResult['SECTIONS'] as $arSection): ?>
                <?
                $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
                $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);

                $currentUrl = $APPLICATION->GetCurPage(); // Получение текущего URL без кеширования и удаление последнего слэша
                // Определение URL раздела
                $sectionUrlCache = '/catalog' . $arSection['UF_LINK'] . '?clear_cache=Y';

                $sectionUrl = '/catalog' . $arSection['UF_LINK'];

                // Проверка, является ли текущий раздел выбранным
                $isSelected = ($currentUrl === $sectionUrl || $currentUrl === $sectionUrlCache);

                $searchTerm = $arSection["CODE"] . '/';
                $isRoottR = strpos($currentUrl, $searchTerm) !== false || strpos($currentUrl, $searchTerm) !== false;


                ?>
                
                
                <?
                // echo '<pre>';
                // print_r($sectionUrl);
                // echo '<br>';
                // print_r($sectionUrlCache);
                // echo '<br>';
                // echo '<br>';
                // print_r($currentUrl);
                // echo '<br>';
                // print_r($searchTerm);
                // echo '</pre>';
                ?>
                <? if ($arSection['RELATIVE_DEPTH_LEVEL'] == 1): ?>
                    <?php if($isSelected || $isRoottR): ?>
                    <a data-w-id="a3a0bf42-62d0-9e00-9208-f005024da465" href="/catalog<?= $arSection["UF_LINK"] ?>" style="border-bottom: 5px solid #ADD15A;" class="roott-card w-inline-block">
                    <?php else: ?>
                    <a data-w-id="a3a0bf42-62d0-9e00-9208-f005024da465" href="/catalog<?= $arSection["UF_LINK"] ?>" class="roott-card w-inline-block">
                    <?php endif; ?>
                        <div id="<?= $this->GetEditAreaId($arSection['ID']); ?>" class="roott-card-inner">
                            <img src="<?= $arSection['PICTURE']['SRC'] ?>" loading="lazy" alt="" class="roott-image">
                            <div class="div-block-6">
                                <img src="<?= CFile::GetPath($arSection['DETAIL_PICTURE']) ?>" alt="">
                            </div>
                        </div>
                        <div style="width:100%" class="roott-select"></div>
                    </a>
                <? endif; ?>
            <? endforeach; ?>
        </div>

        
    </div>
</section>

