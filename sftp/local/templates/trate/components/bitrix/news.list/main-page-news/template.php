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


<div class="div-block-18">
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
		// echo '<pre>';
		?>
		<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="div-block-19" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<?if($arItem["PREVIEW_PICTURE"]["SRC"]):?>
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?echo $arItem["NAME"]?>" class="image-8">
				<?else:?>
					<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/no_photo.png" alt="<?echo $arItem["NAME"]?>" class="image-8">
				<?endif;?>
				<div class="div-block-20">
						<div class="text-block-13">
								<?echo $arItem["NAME"]?>
						</div>
						<?if($arItem["DISPLAY_ACTIVE_FROM"]):?>
						<div class="tdate">
								<?echo $arItem["DISPLAY_ACTIVE_FROM"]?>
						</div>
						<?endif;?>
				</div>
		</a>
		<?endforeach;?>
</div>

