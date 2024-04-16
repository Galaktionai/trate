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
<section class="implant_details_info">
		<div class="container">
				<?if($arParams["DISPLAY_TOP_PAGER"]):?>
				<?=$arResult["NAV_STRING"]?><br />
				<?endif;?>
				<?foreach($arResult["ITEMS"] as $key => $arItem):?>
				<?
				$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
				$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
				?>
				<? if ($key % 2 === 0): ?>
				<div class="implant_details_info__grid" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
						<div class="implant_details_info__grid__txt">
								<img class="resmile__grid__txt" src="<?echo $arItem["DISPLAY_PROPERTIES"]["LOGO"]["FILE_VALUE"]["SRC"]?>" alt="">
								<h5 class="implant_details_info__grid__title" style="margin-bottom: 10px;">
										<?echo $arItem["NAME"]?>
								</h5>
								<span class="implant_details_info__grid__pre2">
										<?echo $arItem["PROPERTIES"]["TEXT"]["VALUE"]["TEXT"]?>
								</span>
								<a class="implant_details_info__grid__txt__btn" href="<?echo $arItem["PROPERTIES"]["LINK_BTN"]["VALUE"]?>">
										В каталог
								</a>
						</div>
						<div class="resmile_details_info__grid__img">
								<img class="resmile__grid__txt__adaptiv" src="<?echo $arItem["DISPLAY_PROPERTIES"]["LOGO"]["FILE_VALUE"]["SRC"]?>" alt="">
								<img class="resmile_details_info__grid__img__img" src="<?echo $arItem["DISPLAY_PROPERTIES"]["IMG"]["FILE_VALUE"]["SRC"]?>" alt="">
						</div>
				</div>
				<?else:?>
				<div class="implant_details_info__grid" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
						<div class="resmile_details_info__grid__img">
								<img class="resmile__grid__txt__adaptiv" src="<?echo $arItem["DISPLAY_PROPERTIES"]["LOGO"]["FILE_VALUE"]["SRC"]?>" alt="">
								<img class="resmile_details_info__grid__img__img" src="<?echo $arItem["DISPLAY_PROPERTIES"]["IMG"]["FILE_VALUE"]["SRC"]?>" alt="">
						</div>
						<div class="implant_details_info__grid__txt">
								<img class="resmile__grid__txt" src="<?echo $arItem["DISPLAY_PROPERTIES"]["LOGO"]["FILE_VALUE"]["SRC"]?>" alt="">
								<h5 class="implant_details_info__grid__title" style="margin-bottom: 10px;">
										<?echo $arItem["NAME"]?>
								</h5>
								<span class="implant_details_info__grid__pre2">
										<?echo $arItem["PROPERTIES"]["TEXT"]["VALUE"]["TEXT"]?>
								</span>
								<a class="implant_details_info__grid__txt__btn" href="<?echo $arItem["PROPERTIES"]["LINK_BTN"]["VALUE"]?>">
										В каталог
								</a>
						</div>
				</div>
				<?endif;?>

				<?
				// echo '<pre>';
				// print_r($arItem);
				// echo '</pre>';
				?>
				<?endforeach;?>
		</div>
</section>

