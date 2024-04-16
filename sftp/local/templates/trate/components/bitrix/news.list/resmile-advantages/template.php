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
<section class="boxes">
		<div class="container">
				<div class="boxes__grid">
						<?if($arParams["DISPLAY_TOP_PAGER"]):?>
							<?=$arResult["NAV_STRING"]?><br />
						<?endif;?>
						<?foreach($arResult["ITEMS"] as $arItem):?>
						<?
						$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
						$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
						?>
								<div class="boxes__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
										<span class="boxes__item__title"><?echo $arItem["NAME"]?></span>
										<p class="boxes__item__p">
												<?echo $arItem["PREVIEW_TEXT"];?>
										</p>
								</div>
						<?endforeach;?>
				</div>
		</div>
</section>