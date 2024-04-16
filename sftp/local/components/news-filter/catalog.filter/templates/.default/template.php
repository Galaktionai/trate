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
<?
// echo '<pre>';
// print_r($arResult);
// echo '</pre>';
?>
<form name="<?echo $arResult["FILTER_NAME"]."_form"?>" action="<?echo $arResult["FORM_ACTION"]?>" method="get">
	<a class="news__filter__adaptiv_btn" id="filter-btn-news" href="#">
		<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/filter-icon-white.svg" alt="">
		Все
	</a>
	<div class="news__filter__btns">
			<div class="news__filter__btns__wrap">
					<div class="news__filter__top">
							<div class="flex">
									<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/66041dd969a5d9c159f93534_SlidersHorizontal.svg" alt="filtre">
									<span>Фильтр</span>
							</div>
							<a href="#" class="filter-btn-news-exit" id="filter-btn-news-exit">
									<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/66040d32b39cfc5e29a1cbb7_clolse-mob.svg" alt="close">
							</a>
					</div>
					<div class="news__filters__a">
							<?foreach($arResult["ITEMS"] as $arItem):
								if(array_key_exists("HIDDEN", $arItem)):
									echo $arItem["INPUT"];
								endif;
							endforeach;?>
							<?foreach($arResult["ITEMS"] as $arItem):?>
								<?if(!array_key_exists("HIDDEN", $arItem)):?>
									<?=$arItem["INPUT"]?>
								<?endif?>
							<?endforeach;?>
							<input hidden type="submit" name="set_filter" value="<?=GetMessage("IBLOCK_SET_FILTER")?>" />
							<input  type="hidden" name="set_filter" value="Y" />
							<input hidden type="submit" name="del_filter" value="<?=GetMessage("IBLOCK_DEL_FILTER")?>" />
					</div>
			</div>
	</div>
</form>
<script>
  // Получаем элементы формы и радио-переключатели
  var form = document.querySelector('form[name="arrFilter_form"]');
  var radioButtons = form.querySelectorAll('input[type="radio"]');

  // Добавляем обработчик события для каждого радио-переключателя
  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      // Отправляем форму
      form.submit();
    });
  });
</script>


<style>
	.filter__news__radio input[type=radio]:checked + label {
		background-color: #000;
		color: white;
		padding: 10px 30px;
		border-radius: 5px;
	}

	.filter__news__radio label{
		color: #000;
		font-size: 16px;
		line-height: 22px;
		font-weight: 400;
		margin: 0;
		cursor: pointer;
	}
</style>