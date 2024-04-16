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
<div class="section_study__items">
		<?if($arParams["DISPLAY_TOP_PAGER"]):?>
			<?=$arResult["NAV_STRING"]?><br />
		<?endif;?>
		<?foreach($arResult["ITEMS"] as $arItem):?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
		<div class="section_study__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<div class="section_study__item__img">
						<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?echo $arItem["NAME"]?>">
				</div>
				<div class="section_study__item__txt">
						<h6 class="section_study__item__title">
								<?echo $arItem["NAME"]?>
						</h6>
						<div class="section_study__item__author">
								<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/dr.jpeg" alt="">
								<div class="section_study__item__author__txt">
										<span><?=$arItem["PROPERTIES"]["DOKTOR"]["VALUE"]?></span>
										<span><?=$arItem["PROPERTIES"]["JOB_DOCKTOR"]["VALUE"]?></span>
								</div>
						</div>
						<div class="section_study__item__date">
								<div class="section_study__item__date__flex">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/calendar.svg" alt="Дата">
										<span><?echo $arItem["PROPERTIES"]["DATE"]["VALUE"]?></span>
								</div>
								<div class="section_study__item__date__flex">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/gps.svg" alt="Дата">
										<span><?echo $arItem["PROPERTIES"]["CITY"]["VALUE"]?></span>
								</div> 
						</div>
						<div class="section_study__item__date__btn">   
								<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="brix---btn-primary-small-inh w-button">
										Подробнее
								</a>
						</div>
				</div>
		</div>
		<?
		// echo '<pre>';
		// print_r($arItem);
		// echo '<pre>';
		?>
		<?endforeach;?>
		<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
				<?=$arResult["NAV_STRING"]?>
		<?endif;?>
</div>