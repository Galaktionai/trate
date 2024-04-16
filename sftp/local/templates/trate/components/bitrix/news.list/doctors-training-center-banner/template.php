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
<div class="banner_centr_study banner-detail-page" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<img class="banner_centr_study__img" src="<?echo $arItem["DISPLAY_PROPERTIES"]["IMG"]["FILE_VALUE"]["SRC"]?>" alt="Фон">
		<div class="container">
				<div class="banner_centr_study__txt">
						<span class="banner_centr_study__txt_span"><?echo $arItem["PROPERTIES"]["PRE_HEADER"]["VALUE"]?></span>
						<h3 class="banner_centr_study__txt_title">
								<?echo $arItem["NAME"]?>
						</h3>
						<div>
								<p class="banner_centr_study__txt_p">
										<?echo $arItem["PROPERTIES"]["TEXT"]["VALUE"]["TEXT"]?>
								</p>
						</div>
						<?if ($arItem["PROPERTIES"]["TEXT_BTN"]["VALUE"]):?>
						<a class="brix---btn-primary-small-inh potato w-button" href="<?echo $arItem["PROPERTIES"]["LINK_BTN"]["VALUE"]?>">
								<?echo $arItem["PROPERTIES"]["TEXT_BTN"]["VALUE"]?>
						</a>
						<?endif;?>
						<p class="rgrwerh">
						<?echo $arItem["PROPERTIES"]["TEXT"]["VALUE"]["TEXT"]?>
						</p>
				</div>
		</div>
</div>
<?endforeach;?>
<?
// echo '<pre>';
// print_r($arResult);
// echo '</pre>';
?>

<style>
	.banner-detail-page{
		background: url('<?echo $arItem["DISPLAY_PROPERTIES"]["IMG"]["FILE_VALUE"]["SRC"]?>') no-repeat;
		background-size: cover;
	}

	.banner_centr_study{
		height: 86vh;
		display: flex;
		align-items: center;
		position: relative;
		color: white;
	}

	.banner_centr_study__txt_title{
		max-width: 600px;
	}

	@media (max-width: 768px) {
		.banner_centr_study {
				background: #F1F1F3;
				color: black;
				display: block;
				height: auto;
		}
	}
</style>