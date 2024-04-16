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
<div class="frame-1426">
<?if($arParams["DISPLAY_TOP_PAGER"]):?>
	<?=$arResult["NAV_STRING"]?><br />
<?endif;?>
<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
	<a href="#" class="serimg w-inline-block" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
			<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?echo $arItem["NAME"]?>" class="serimg">
	</a>
<?endforeach;?>
</div>

<!-- <div class="events__grid">
		<?if($arParams["DISPLAY_TOP_PAGER"]):?>
			<?=$arResult["NAV_STRING"]?><br />
		<?endif;?>
		<?foreach($arResult["ITEMS"] as $arItem):?>
		<div class="events__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<img class="events__item_img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?echo $arItem["NAME"]?>">
				<h6 class="events__item__title">
						<?echo $arItem["NAME"]?>
				</h6>
				<div class="events__item__flex">
						<img src="assets/img/calendar.svg" alt="">
						<span>6 февраля - 8 февраля</span>
				</div>
				<div class="events__item__flex">
						<img src="assets/img/gps.svg" alt="">
						<span>6 февраля - 8 февраля</span>
				</div>
				<a class="events__item__a" href="#">
						Подробнее
						<img src="assets/img/arow-right-green.svg" alt="">
				</a>
		</div>
		<?endforeach;?>
</div> -->