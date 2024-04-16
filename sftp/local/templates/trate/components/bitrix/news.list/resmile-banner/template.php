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

<?if($arParams["DISPLAY_TOP_PAGER"]):?>
	<?=$arResult["NAV_STRING"]?><br />
<?endif;?>
<?foreach($arResult["ITEMS"] as $arItem):?>
<?
$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
?>
<section class="s-wwww" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<div class="s-wwww__background"></div>
		<div class="container">
				<div class="frame-1550">
						<div class="frame-1388">
								<div class="frame-1502">
										<div class="frame-1502"><img src="<?echo $arItem["DISPLAY_PROPERTIES"]["LOGO"]["FILE_VALUE"]["SRC"]?>" alt="<?echo $arItem["NAME"]?>" class="image-11">
												<div class="text-24"><?echo $arItem["NAME"]?></div>
										</div>
										<div class="frame-1502">
												<div class="text-25 izm"><?echo $arItem["PROPERTIES"]["TEXT"]["VALUE"]?></div>
												<div class="div-block-26">
													<?foreach($arItem["PROPERTIES"]["TEXTS"]["VALUE"] as $texts):?>
														<div class="div-block-27">
																<img class="resmille__icon__white" src="<?=SITE_TEMPLATE_PATH?>/assets/img/check-icon-white.svg" alt="">
																<img class="resmille__icon__dark" src="<?=SITE_TEMPLATE_PATH?>/assets/img/660808fef1f0f13520d81588_Vectors-Wrapper.svg" loading="lazy" alt="">
																<div class="text-block-14"><?echo $texts?></div>
														</div>
													<?endforeach;?>
												</div>
										</div>
										<a href="<?echo $arItem["PROPERTIES"]["LINK_BTN"]["VALUE"]?>" class="btn-more-b1-copy w-inline-block">
												<div><?echo $arItem["PROPERTIES"]["BTN_TEXT"]["VALUE"]?></div>
										</a>
								</div>
						</div>
						<div class="frame-1551">
							<img src="<?echo $arItem["DISPLAY_PROPERTIES"]["PICTURE_BANNER"]["FILE_VALUE"]["SRC"]?>" class="old-w">
						</div>
				</div>
		</div>
</section>

<?
// echo '<pre>';
// print_r($arItem);
// echo '</pre>';
?>
<?endforeach;?>