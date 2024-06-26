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
?>
<div class="container" style="margin-bottom: 108px">
		<div class="keys__grid">
				<?if($arParams["DISPLAY_TOP_PAGER"]):?>
					<?=$arResult["NAV_STRING"]?><br />
				<?endif;?>
				<?foreach($arResult["ITEMS"] as $arItem):?>
				<?
				$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
				$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
				?>
				<?
				// echo '<pre>';
				// print_r($arItem);
				// echo '</pre>';
				?>
				<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="keys__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
						<img class="keys__item_img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="">
						<span class="keys__item_p">
								<?= $arItem["NAME"]?>
						</span>
						<span class="keys__item_span">Доктор: <?=$arItem["PROPERTIES"]["FIO"]["VALUE"]?></span>
				</a>
				<?endforeach;?>
		</div>
		<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
				<div id="pag">
					<?=$arResult["NAV_STRING"]?>
				</div>
		<?endif;?>
</div>