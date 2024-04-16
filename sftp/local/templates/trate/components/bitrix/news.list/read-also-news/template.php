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
<div class="read_other__grid__news">
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
		<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="news__item keys__news">
				<img class="news__item_img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="">
				<div class="news__item__txt">
						<div class="news__item__flex">
								<span class="news__item__date"><?=$arItem["TIMESTAMP_X"]?></span>
								<span class="news__item__type"><?=$arItem["PROPERTIES"]["TYPE"]["VALUE"]?></span>
						</div>
						<span class="news__item__title">
								<?=$arItem["NAME"]?>
						</span>
				</div>
		</a>
		<?endforeach;?>
</div>