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
<section class="section_study_galery">
		<div class="container">
				<span class="section_study_galery_title">Галерея 2</span>
		</div>
		<div class="swiper studyGalery swiper-initialized swiper-horizontal swiper-backface-hidden">
				<div class="swiper-wrapper study-galery-wrapper" id="swiper-wrapper-357820e84b86f1e3" aria-live="polite">
					<?if($arParams["DISPLAY_TOP_PAGER"]):?>
						<?=$arResult["NAV_STRING"]?><br />
					<?endif;?>
					<?foreach($arResult["ITEMS"] as $arItem):?>
					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					?>
							<div class="swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
								<a href="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>">
									<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?echo $arItem["NAME"]?>">
								</a>
							</div>
					<?endforeach;?>
				</div>
				<div class="container swiper_buttons_galery">
						<div class="swiper-button-next-gala" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-357820e84b86f1e3" aria-disabled="false">
								<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
						</div>
						<div class="swiper-button-prev-gala swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-357820e84b86f1e3" aria-disabled="true">
								<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
						</div>
				</div>
				<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
		</div>
</section>