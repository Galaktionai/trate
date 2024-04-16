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
<section class="autors">
		<div class="container">
				<div class="swiper autorsSwiper">
						<div class="swiper-wrapper">
								<?if($arParams["DISPLAY_TOP_PAGER"]):?>
									<?=$arResult["NAV_STRING"]?><br />
								<?endif;?>
								<?foreach($arResult["ITEMS"] as $arItem):?>
								<?
								$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
								$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
								?>
										<div class="swiper-slide">
												<div class="autor_item">
														<img class="autor_item__img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arItem['NAME']?>">
														<div class="autor_item__txt">
																<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/zapyat.svg" alt="">
																<p>
																		<?=$arItem['PREVIEW_TEXT']?>
																</p>
																<span>
																		<?=$arItem['NAME']?>
																</span>
														</div>
												</div>
										</div>
								<?endforeach;?>
						</div>
						<div class="container swiper_buttons_autors">
								<div class="swiper-button-next-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
								<div class="swiper-button-prev-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
						</div>
				</div>
		</div>
</section>