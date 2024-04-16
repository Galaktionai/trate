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
<section class="s-cas">
		<div class="container-main-cat1">
				<div class="text-33">Кейсы</div>
				<div class="frame-1421">
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
						<div class="frame-1383" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
								<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?= $arItem["NAME"]?>" class="rectangle-276">
								<div class="frame-1301">
										<div class="text-34">
												<?= $arItem["NAME"]?>
										</div>
										<div class="text-35">Доктор: <?=$arItem["PROPERTIES"]["FIO"]["VALUE"]?></div>
								</div>
						</div>
						<?endforeach;?>
				</div>
		</div>
</section>