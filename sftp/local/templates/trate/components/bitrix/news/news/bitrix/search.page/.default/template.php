<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
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
?>
<div class="container">
	<div class="news__filter">
			<form name="arrFilter_form" action="/about/news/?clear_cache=Y" method="get">
				<a class="news__filter__adaptiv_btn" id="filter-btn-news" href="#">
					<img src="/local/templates/trate/assets/img/filter-icon-white.svg" alt="">
					Все
				</a>
				<div class="news__filter__btns">
						<div class="news__filter__btns__wrap">
								<div class="news__filter__top">
										<div class="flex">
												<img src="/local/templates/trate/assets/img/66041dd969a5d9c159f93534_SlidersHorizontal.svg" alt="filtre">
												<span>Фильтр</span>
										</div>
										<a href="#" class="filter-btn-news-exit" id="filter-btn-news-exit">
												<img src="/local/templates/trate/assets/img/66040d32b39cfc5e29a1cbb7_clolse-mob.svg" alt="close">
										</a>
								</div>
								<div class="news__filters__a">
										<input type="hidden" name="clear_cache" value="Y">
										<div class="filter__news__radio">
											<input hidden="" id="news-item-10" type="radio" name="arrFilter_pf[TYPE]" value="" checked="">
											<label for="news-item-10">Все</label></div><div class="filter__news__radio">
												<input hidden="" id="news-item-25" type="radio" name="arrFilter_pf[TYPE]" value="25"><label for="news-item-25">Кейсы</label></div><div class="filter__news__radio"><input hidden="" id="news-item-22" type="radio" name="arrFilter_pf[TYPE]" value="22"><label for="news-item-22">Новости</label></div><div class="filter__news__radio"><input hidden="" id="news-item-24" type="radio" name="arrFilter_pf[TYPE]" value="24"><label for="news-item-24">События</label></div><div class="filter__news__radio"><input hidden="" id="news-item-23" type="radio" name="arrFilter_pf[TYPE]" value="23"><label for="news-item-23">Статьи</label></div>																																					<input hidden="" type="submit" name="set_filter" value="Фильтр">
										<input type="hidden" name="set_filter" value="Y">
										<input hidden="" type="submit" name="del_filter" value="Сбросить">
								</div>
						</div>
				</div>
			</form>
			<form class="news__filter__search" action="" method="get">
				<?if($arParams["USE_SUGGEST"] === "Y"):
					if(mb_strlen($arResult["REQUEST"]["~QUERY"]) && is_object($arResult["NAV_RESULT"]))
					{
						$arResult["FILTER_MD5"] = $arResult["NAV_RESULT"]->GetFilterMD5();
						$obSearchSuggest = new CSearchSuggest($arResult["FILTER_MD5"], $arResult["REQUEST"]["~QUERY"]);
						$obSearchSuggest->SetResultCount($arResult["NAV_RESULT"]->NavRecordCount);
					}
					?>
					<?$APPLICATION->IncludeComponent(
						"bitrix:search.suggest.input",
						"",
						array(
							"NAME" => "q",
							"VALUE" => $arResult["REQUEST"]["~QUERY"],
							"INPUT_SIZE" => 40,
							"DROPDOWN_SIZE" => 10,
							"FILTER_MD5" => $arResult["FILTER_MD5"],
						),
						$component, array("HIDE_ICONS" => "Y")
					);?>
				<?else:?>
					<input type="text" name="q" value="<?=$arResult["REQUEST"]["QUERY"]?>" size="40" />
				<?endif;?>
				<?if($arParams["SHOW_WHERE"]):?>
					&nbsp;<select name="where">
					<option value=""><?=GetMessage("SEARCH_ALL")?></option>
					<?foreach($arResult["DROPDOWN"] as $key=>$value):?>
					<option value="<?=$key?>"<?if($arResult["REQUEST"]["WHERE"]==$key) echo " selected"?>><?=$value?></option>
					<?endforeach?>
					</select>
				<?endif;?>
					&nbsp;
					<input hidden type="submit" value="<?=GetMessage("SEARCH_GO")?>" />
					<input type="hidden" name="how" value="<?echo $arResult["REQUEST"]["HOW"]=="d"? "d": "r"?>" />
				<?if($arParams["SHOW_WHEN"]):?>
					<script>
					var switch_search_params = function()
					{
						var sp = document.getElementById('search_params');
						var flag;
						var i;

						if(sp.style.display == 'none')
						{
							flag = false;
							sp.style.display = 'block'
						}
						else
						{
							flag = true;
							sp.style.display = 'none';
						}

						var from = document.getElementsByName('from');
						for(i = 0; i < from.length; i++)
							if(from[i].type.toLowerCase() == 'text')
								from[i].disabled = flag;

						var to = document.getElementsByName('to');
						for(i = 0; i < to.length; i++)
							if(to[i].type.toLowerCase() == 'text')
								to[i].disabled = flag;

						return false;
					}
					</script>
					<br /><a class="search-page-params" href="#" onclick="return switch_search_params()"><?echo GetMessage('CT_BSP_ADDITIONAL_PARAMS')?></a>
					<div id="search_params" class="search-page-params" style="display:<?echo $arResult["REQUEST"]["FROM"] || $arResult["REQUEST"]["TO"]? 'block': 'none'?>">
						<?$APPLICATION->IncludeComponent(
							'bitrix:main.calendar',
							'',
							array(
								'SHOW_INPUT' => 'Y',
								'INPUT_NAME' => 'from',
								'INPUT_VALUE' => $arResult["REQUEST"]["~FROM"],
								'INPUT_NAME_FINISH' => 'to',
								'INPUT_VALUE_FINISH' =>$arResult["REQUEST"]["~TO"],
								'INPUT_ADDITIONAL_ATTR' => 'size="10"',
							),
							null,
							array('HIDE_ICONS' => 'Y')
						);?>
					</div>
				<?endif?>
			</form>
	</div>

<?

?>
<?php
foreach ($arResult["SEARCH"] as $key => $item) {
    $elementId = $item['ITEM_ID'];
    $elementType = $item['MODULE_ID']; // тип элемента (обычно 'iblock_element')

    if ($elementType === 'iblock_element') {
        $res = CIBlockElement::GetByID($elementId);
        if ($arElement = $res->GetNext()) {
            $arResult["SEARCH"][$key]['PROPERTIES']['TYPE']['VALUE'] = $arElement['TYPE'];
        }
    } elseif ($elementType === 'iblock_section') {
        // Обработка для разделов инфоблока, если необходимо
    }
		echo '<pre>';
		print_r($arResult);
		echo '</pre>';
}
unset($item);
?>




<?if(isset($arResult["REQUEST"]["ORIGINAL_QUERY"])):
	?>
	<div class="search-language-guess">
		<?echo GetMessage("CT_BSP_KEYBOARD_WARNING", array("#query#"=>'<a href="'.$arResult["ORIGINAL_QUERY_URL"].'">'.$arResult["REQUEST"]["ORIGINAL_QUERY"].'</a>'))?>
	</div>
<?endif;?>

<?if($arResult["REQUEST"]["QUERY"] === false && $arResult["REQUEST"]["TAGS"] === false):?>
<?elseif($arResult["ERROR_CODE"]!=0):?>

<?elseif(count($arResult["SEARCH"])>0):?>
	<?if($arParams["DISPLAY_TOP_PAGER"] != "N") echo $arResult["NAV_STRING"]?>
	<div class="news__wrapper">
		<div>
			<div class="news__grid">
				<?foreach($arResult["SEARCH"] as $arItem):?>
					<?
						// echo '<pre>';
						// print_r($arResult);
						// echo '</pre>';
					?>
					<a class="news__item" href="<?echo $arItem["URL"]?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
							<?if($arItem["PREVIEW_PICTURE"]["SRC"]):?>
								<img class="news__item_img" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="">
							<?else:?>
								<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/no_photo.png" alt="<?echo $arItem["NAME"]?>" class="news__item_img">
							<?endif;?>
							<div class="news__item__txt">
								<div class="news__item__flex">
									<?if($arItem["DATE_CHANGE"]):?>
										<span class="news__item__date"><?echo $arItem["DATE_CHANGE"]?></span>
									<?else:?>
										<span class="news__item__date"></span>
									<?endif;?>
									<span class="news__item__type"><?=$arItem["PROPERTIES"]["TYPE"]["VALUE"]?></span>
								</div>
								<span class="news__item__title">
									<?echo $arItem["TITLE_FORMATED"]?>
								</span>
							</div>
					</a>
				<?endforeach;?>
			</div>
		</div>
		<div class="news__socials">
			<div class="news__socials__wrap">
					<span class="news__socials__wrap__tilte">Соц сети:</span>
					<span class="news__socials__wrap__p">Будьте в курсе последних событий</span>
				<div class="flex">
					<a href="#">
						<img src="/local/templates/trate/assets/img/vk-icon.svg" alt="">
					</a>
					<a href="#">
						<img src="/local/templates/trate/assets/img/youtube-icon.svg" alt="">
					</a>
				</div>
			</div>
		</div>
	</div>
	
<?else:?>
	<?ShowNote(GetMessage("SEARCH_NOTHING_TO_FOUND"));?>
<?endif;?>
</div>
<div class="subscribe-newsletter">
		<?$APPLICATION->IncludeComponent(
			"bitrix:sender.subscribe",
			"subscribe-newsletter",
			Array(
				"AJAX_MODE" => "N",
				"AJAX_OPTION_ADDITIONAL" => "",
				"AJAX_OPTION_HISTORY" => "N",
				"AJAX_OPTION_JUMP" => "N",
				"AJAX_OPTION_STYLE" => "Y",
				"CACHE_TIME" => "3600",
				"CACHE_TYPE" => "A",
				"COMPONENT_TEMPLATE" => "subscribe-newsletter",
				"CONFIRMATION" => "Y",
				"HIDE_MAILINGS" => "Y",
				"SET_TITLE" => "Y",
				"SHOW_HIDDEN" => "N",
				"USER_CONSENT" => "N",
				"USER_CONSENT_ID" => "0",
				"USER_CONSENT_IS_CHECKED" => "N",
				"USER_CONSENT_IS_LOADED" => "N",
				"USE_PERSONALIZATION" => "Y"
			)
		);?>
</div>

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

	let none = document.querySelectorAll('font.text');
	none.forEach(element => {
		element.style = 'display: none';
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