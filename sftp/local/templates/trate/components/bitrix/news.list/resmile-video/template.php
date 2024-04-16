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
<section class="s-vids">
		<div class="container-main-cat1">
				<div class="text-36">Видео</div>
				<div class="frame-1422">
						<?if($arParams["DISPLAY_TOP_PAGER"]):?>
						<?=$arResult["NAV_STRING"]?><br />
						<?endif;?>
						<?foreach($arResult["ITEMS"] as $arItem):?>
						<?
						$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
						$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
						?>
						<div class="frame-1305" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
								<video controls="controls" class="vectors-wrapper-5" src="<?echo $arItem["DISPLAY_PROPERTIES"]["VIDEO"]["FILE_VALUE"]["SRC"]?>"></video>
								<div class="frame-1554">
										<div class="text-37"><?echo $arItem["PREVIEW_TEXT"];?></div>
										<div class="text-37">Clinician: <?echo $arItem["NAME"]?></div>
								</div>
						</div>
						<?endforeach;?>
				</div>
		</div>
</section>

<?
// echo '<pre>';
// print_r($arResult);
// echo '</pre>';
?>