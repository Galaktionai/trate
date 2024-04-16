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
<section class="list_predstovitels">
		<div class="container">
				<h4 class="list_predstovitels__title">
						Список представительств
				</h4>
				<div class="list_predstovitels__grid">
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
								<div class="list_predstovitels__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
										<div class="flex">
												<img class="list_predstovitels__item__icon" src="<?=SITE_TEMPLATE_PATH?>/assets/img/gps.svg" alt="иконка">
												<span><?=$arItem["PROPERTIES"]['CITY']['VALUE']?></span>
										</div>
										<div class="list_predstovitels__item__txt">
												<span><?echo $arItem["NAME"]?>></span>
												<span><?=$arItem["PROPERTIES"]['STREET']['VALUE']?></span>
												<a href="tel:<?=$arItem["PROPERTIES"]['NUMBER']['VALUE']?>"><?=$arItem["PROPERTIES"]['NUMBER']['VALUE']?></a>
										</div>
								</div>
						<?endforeach;?>
				</div>
		</div>
</section>