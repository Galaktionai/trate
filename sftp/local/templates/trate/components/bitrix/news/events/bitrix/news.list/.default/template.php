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

<?
	// echo '<pre>';
	// print_r($arResult);
	// echo '</pre>';
?>

<span class="events__pre_header">
		pre header
</span>
<h4 class="events__title">
		Меропрития
</h4>
<p class="events__p">
		<?=$arResult["DESCRIPTION"]?>
</p>

<div class="events__grid">
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
		<div class="events__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
			<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" style="display: block">
					<img class="events__item_img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="">
				</a>
				<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" style="text-decoration: none;">
					<h6 class="events__item__title">
							<?echo $arItem["NAME"]?>
					</h6>
				</a>
				<div class="events__item__flex">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/calendar.svg" alt="">
						<span><?echo $arItem["PROPERTIES"]["DATE"]["VALUE"]?></span>
				</div>
				<div class="events__item__flex">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/gps.svg" alt="">
						<span><?echo $arItem["PROPERTIES"]["LOCATION"]["VALUE"]?></span>
				</div>
				<a class="events__item__a" href="<?=$arItem["DETAIL_PAGE_URL"]?>">
						Подробнее
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/arow-right-green.svg" alt="">
				</a>
		</div>
		<?endforeach;?>
</div>

<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
	<div id="pag">
    <?=$arResult["NAV_STRING"]?>
	</div>
<?endif;?>