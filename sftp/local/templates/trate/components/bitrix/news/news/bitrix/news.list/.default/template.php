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
<div>
	<div class="news__grid">
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
			<a class="news__item" href="<?=$arItem["DETAIL_PAGE_URL"]?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<?if($arItem["PREVIEW_PICTURE"]["SRC"]):?>
					<img class="news__item_img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="">
				<?else:?>
					<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/no_photo.png" alt="<?echo $arItem["NAME"]?>" class="news__item_img">
				<?endif;?>
				<div class="news__item__txt">
					<div class="news__item__flex">
						<?if($arItem["DISPLAY_ACTIVE_FROM"]):?>
							<span class="news__item__date"><?echo $arItem["DISPLAY_ACTIVE_FROM"]?></span>
						<?else:?>
							<span class="news__item__date"></span>
						<?endif;?>
						<span class="news__item__type"><?=$arItem["PROPERTIES"]["TYPE"]["VALUE"]?></span>
					</div>
					<span class="news__item__title">
						<?=$arItem["NAME"]?>
					</span>
				</div>
			</a>
		<?endforeach;?>
	</div>
<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
	<div id="pag">
    <?=$arResult["NAV_STRING"]?>
	</div>
<?endif;?>
</div>