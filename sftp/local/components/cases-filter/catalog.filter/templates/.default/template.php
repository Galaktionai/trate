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


<div class="container">
		<div class="keys__filter">
				<span class="keys__filter__title">Сортировать:</span>
				<form id="casesFilter" class="keys__filter__form" name="<?echo $arResult["FILTER_NAME"]."_form"?>" action="<?echo $arResult["FORM_ACTION"]?>" method="get">
						<?foreach($arResult["ITEMS"] as $arItem):?>
							<?if(!array_key_exists("HIDDEN", $arItem)):?>
									<?=$arItem["INPUT"]?>
							<?endif?>
						<?endforeach;?>

						<!-- <input type="submit" name="set_filter" value="<?=GetMessage("IBLOCK_SET_FILTER")?>" /> -->
						<input type="hidden" name="set_filter" value="Y" />
						<!-- <input type="submit" name="del_filter" value="<?=GetMessage("IBLOCK_DEL_FILTER")?>" /> -->
				</form>
		</div>
</div>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		let selectProduct = document.querySelector('.keys__filter__form select[name="arrFilter_pf[PRODUCTS]"]');
		optionProduct = selectProduct.querySelector('option:first-child');
		optionProduct.setAttribute('data-display', 'Продукт')

		let selectIndication = document.querySelector('.keys__filter__form select[name="arrFilter_pf[INDICATIONS]"]');
		optionIndication = selectIndication.querySelector('option:first-child');
		optionIndication.setAttribute('data-display', 'Показания')

		let selectDoctor = document.querySelector('.keys__filter__form select[name="arrFilter_pf[DOCTOR]"]');
		optionDoctor = selectDoctor.querySelector('option:first-child');
		optionDoctor.setAttribute('data-display', 'Доктор')
	});
	function onSelectChangeVacancy(){
			document.getElementById('casesFilter').submit();
	}
</script>