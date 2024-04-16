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
<section>
		<div class="swiper main-slider">
				<div class="swiper-wrapper main-slider-wrapper">
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
						<div class="swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
								<div class="main-slider__item">
										<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="">
										<div class="main-slider__item__txt">
												<h5 class="main-slider__item__title"><?echo $arItem["NAME"]?></h5>
												<?if($arItem["PREVIEW_TEXT"]):?>
														<p class="main-slider__item__p">
														<?echo $arItem["PREVIEW_TEXT"]?>
														</p>
												<?endif?>
												<?if($arItem["PROPERTIES"]["URL_BUTTON"]["VALUE"]):?>
														<div class="main-slider__item__btn__wrap">
																<a class="main-slider__item__btn" href="<?echo $arItem["PROPERTIES"]["URL_BUTTON"]["VALUE"]?>">
																		Подробнее
																</a>
														</div>
												<?endif?>
										</div>
								</div>
						</div>
						<?endforeach;?>
				</div>
				<div class="swiper-button-prev-main-slider">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/arrow-icon.svg" alt="">
				</div>
				<div class="swiper-button-next-main-slider">
						<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/arrow-icon.svg" alt="">
				</div>
		</div>
</section>