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
<section class="keys_detail">
		<div class="keys_detail__wrap">
				<div class="keys_detail__info">
						<div class="container-3">
								<div class="keys_detail__breadcums">
										<span class="keys_detail__breadcums_span">
												Кейс/<?=$arResult["ID"]?>
										</span>
										<span class="keys_detail__breadcums_date"><?=$arResult["TIMESTAMP_X"]?></span>
								</div>
								<span class="keys_detail__pre_header">
										pre header
								</span>
								<h4 class="keys_detail__title">
										<?=$arResult["NAME"]?>
								</h4>
								<div class="keys_detail__author">
										<div>
												<span class="keys_detail__author__name"><?=$arResult["PROPERTIES"]["FIO"]["VALUE"]?></span>
												<span class="keys_detail__author__work"><?=$arResult["PROPERTIES"]["DOLJNOST"]["VALUE"]?></span>
										</div>
										<div class="keys_detail__author__send">
												<a href="#">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/copy-icon.svg" alt="copy">
												</a>
												<a href="#">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/send-icon.svg" alt="copy">
												</a>
										</div>
								</div>
								<span class="keys_detail__doctors__title">
										Доктор
								</span>
								<div class="swiper keys_detail__slider">
										<div class="swiper-wrapper keys_detail__doctors-wrapper">
												<div class="swiper-slide">
														<div class="keys_detail__slider__item">
																<img class="keys_detail__slider__item__img" src="assets/img/dr.jpeg" alt="">
																<div class="keys_detail__slider__item__txt">
																		<span class="keys_detail__slider__item__top">
																				Люксембург
																		</span>
																		<span class="keys_detail__slider__item__title">
																				Henri Diederih DDS 
																		</span>
																		<span class="keys_detail__slider__item__title-2">
																				BDS, MDS Prosthodontics
																		</span>
																		<p class="keys_detail__slider__item__p">
																				БИО-логическое планированиехирургических и ортопедических этапов лечения с опорой на имплантаты.
																		</p>
																</div>
														</div>
												</div>
												<div class="swiper-slide">
														<div class="keys_detail__slider__item">
																<img class="keys_detail__slider__item__img" src="assets/img/dr.jpeg" alt="">
																<div class="keys_detail__slider__item__txt">
																		<span class="keys_detail__slider__item__top">
																				Люксембург
																		</span>
																		<span class="keys_detail__slider__item__title">
																				Henri Diederih DDS 
																		</span>
																		<span class="keys_detail__slider__item__title-2">
																				BDS, MDS Prosthodontics
																		</span>
																		<p class="keys_detail__slider__item__p">
																				БИО-логическое планированиехирургических и ортопедических этапов лечения с опорой на имплантаты.
																		</p>
																</div>
														</div>
												</div>
										</div>
										<div class="keys_detail__swiper__controller">
												<div class="swiper-button-prev-keys_detail">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon.svg" alt="">
												</div>
												<div class="swiper-pagination keys_detail__swiper__controller_pag"></div>
												<div class="swiper-button-next-keys_detail">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon.svg" alt="">
												</div>
										</div>
								</div>
								<div class="keys_detail__txt">
										<span class="keys_detail__txt__pre_text">
												<?=$arResult["PROPERTIES"]["PRE_HEADER"]["VALUE"]?>
										</span>
										<span class="keys_detail__txt__pre_text_green">
												<?=$arResult["PROPERTIES"]["PRE_HEADER_PASIENT_2"]["VALUE"]?>
										</span>
										<span class="keys_detail__txt__title">
												Пациент
										</span>
										<span class="keys_detail__txt__podz">
												<?=$arResult["PROPERTIES"]["PRE_HEADER_PASIENT_3"]["VALUE"]?>
										</span>
										<p class="keys_detail__txt__p">
												<?=$arResult["PROPERTIES"]["TITLE_PASIENT"]["~VALUE"]["TEXT"]?>
										</p>
								</div>
								<div class="keys_detail__youtube">
										<span class="keys_detail__txt__pre_text">
												<?=$arResult["PROPERTIES"]["PRE_HEADER_2"]["VALUE"]?>
										</span>
										<span class="keys_detail__txt__title">
												<?=$arResult["PROPERTIES"]["TITLE_2"]["VALUE"]?>
										</span>
										<div class="keys_detail__youtube_ifrmae">
												<iframe width="100%" height="100%" src="<?=$arResult["PROPERTIES"]["LINK_YOUTUBE"]["VALUE"]?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
										</div>
										<div class="keys_detail__youtube__p">
												<?=$arResult["PROPERTIES"]["TEXT_2"]["~VALUE"]["TEXT"]?>
										</div>
								</div>
								<div class="keys_detail__photos">
										<div class="keys_detail__photos__center">
												<?foreach($arResult["DISPLAY_PROPERTIES"]["IMAGES"]["FILE_VALUE"] as $photo):?>
												<div class="keys_detail__photos__center__item">
														<img src="<?=$photo["SRC"]?>" alt="">
														<span class="keys_detail__photos__span"><?=$photo["FILE_NAME"]?></span>
												</div>
												<?endforeach;?>
										</div>
										<div class="swiper keys_detail__photos__bottom">
												<div class="swiper-wrapper keys_detail__photos__bottom-wrapper">
													<?foreach($arResult["DISPLAY_PROPERTIES"]["SLIDER_IMAGES"]["FILE_VALUE"] as $sliderPhoto):?>
														<div class="swiper-slide">
																<div class="keys_detail__photos__bottom__img">
																		<img src="<?=$sliderPhoto["SRC"]?>" alt="">
																		<span class="keys_detail__photos__span"><?=$sliderPhoto["FILE_NAME"]?></span>
																</div>
														</div>
													<?endforeach;?>
												</div>
												<div class="keys_detail__swiper__controller" style="margin-top: 18px;">
														<div class="swiper-button-prev-keys_detail">
																<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon.svg" alt="">
														</div>
														<div class="swiper-pagination keys_detail__swiper__controller_pag"></div>
														<div class="swiper-button-next-keys_detail">
																<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-icon.svg" alt="">
														</div>
												</div>
										</div>
								</div>
								<div class="keys_detail__quote">
										<img class="keys_detail__quote_img" src="<?=SITE_TEMPLATE_PATH?>/assets/img/dr.jpeg" alt="">
										<div class="keys_detail__quote__txt">
												<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/zapyat.svg" alt="">
												<p>
														Врач оценивает состояние ротовой полости и выявляет противопоказания. При необходимости проводятся трехмерные снимки челюсти для оценки плотности и других характеристик костной ткани.
												</p>
												<span>
														Dr. Karampinis Triantafyllos
												</span>
										</div>
								</div>

								<div class="keys_detail__conclusion">
										<h6>
												Заключение
										</h6>
										<p>
												<?=$arResult["PROPERTIES"]["TEXT_CONCLUSIONS"]["~VALUE"]["TEXT"]?>
												<br>
										</p>
								</div>
								<div class="keys_detail__author__block">
										<h6>
												Автор
										</h6>
										<div class="keys_detail__author__block__wrap">
												<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/dr.jpeg" alt="">
												<div class="keys_detail__author__block__wrap__txt">
														<span class="keys_detail__author__block__wrap__txt-1">Люксембург</span>
														<span class="keys_detail__author__block__wrap__txt-2">Henri Diederih DDS </span>
														<span class="keys_detail__author__block__wrap__txt-2">BDS, MDS Prosthodontics</span>
												</div>
										</div>
								</div>
								<div class="keys_detail__use">
										<h6>
												В кейсе использовались:
										</h6>
										<div class="keys_detail__use__wrap">
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
												<div class="keys_detail__use__wrap__item">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17.png" alt="">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/ROOTT-R-17-text.png" alt="">
												</div>
										</div>
										<a class="keys_detail__use__dowloand" href="<?=$arResult["PROPERTIES"]["DOWLOAND_PDF"]["VALUE"]?>">
												Read full study PDF
												<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/download-icone.svg" alt="">
										</a>
										<div>
												<a class="keys_detail__use__event" href="<?=$arResult["PROPERTIES"]["LINK_EVENTS"]["VALUE"]?>">
														Event Page
												</a>
										</div>
										<div>
												<button class="keys_detail__use__copy" onclick="urlCopyButton()">
														<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/copy-icon.svg" alt="">
														Копировать ссылку
												</button>
										</div>
								</div>
								<div class="keys_detail__share">
										<span class="keys_detail__share__title">Поделиться</span>
										<div class="keys_detail__share__wrap">
												<?$APPLICATION->IncludeComponent(
													"arturgolubev:yandex.share",
													"share-socials",
													Array(
														"COMPONENT_TEMPLATE" => ".default",
														"DATA_IMAGE" => "",
														"DATA_RESCRIPTION" => "",
														"DATA_TITLE" => "",
														"DATA_URL" => "",
														"ICON_FORM" => "",
														"ICON_SIZE" => "m",
														"ICON_STYLE" => "whiteblack",
														"OLD_BROWSERS" => "N",
														"SERVISE_LIST" => array(0=>"vkontakte",1=>"telegram",2=>"twitter",3=>"whatsapp",),
														"TEXT_ALIGN" => "ar_al_left",
														"TEXT_BEFORE" => "",
														"VISUAL_STYLE" => "icons"
													)
												);?>
										</div>
								</div>
						</div>
						<div class="keys_detail__subskribe adaptive">
								<div class="keys_detail__subskribe_wrap">
										<span class="keys_detail__subskribe_title">
												Поодписаться на рассылку
										</span>
										<span class="keys_detail__subskribe_p">
												Оставайтесь в курсе последних событий и новостей
										</span>
										<form class="keys_detail__subskribe_form" action="#">
												<input class="keys_detail__subskribe_form_email" type="email" placeholder="Email">
												<input class="keys_detail__subskribe_form_btn" value="Подписаться" type="submit">
										</form>
								</div>
								<div class="keys_detail__subskribe__socials">
										<span class="keys_detail__subskribe__socials__tilte">Соц сети:</span>
										<span class="keys_detail__subskribe__socials__p">Будьте в курсе последних событий</span>
										<div class="flex" style="gap: 10px;">
												<img src="<?=SITE_TEMPLATE_PATH?>/ssets/img/vk-icon.svg" alt="">
												<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/youtube-icon.svg" alt="">
										</div>
								</div>
						</div>
						<div class="read_other">
								<div class="container-3">
										<span class="read_other__title">Читайте также</span>
										<?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"read-also-cases",
	Array(
		"ACTIVE_DATE_FORMAT" => "j F Y",
		"ADD_SECTIONS_CHAIN" => "Y",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => $arParams["CACHE_TIME"],
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "/cases/?ELEMENT_ID=#ELEMENT_ID#",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "N",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array("","={$arParams["LIST_FIELD_CODE"]}",""),
		"FILE_404" => $arParams["FILE_404"],
		"FILTER_NAME" => $arParams["FILTER_NAME"],
		"GROUP_PERMISSIONS" => $arParams["GROUP_PERMISSIONS"],
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "9",
		"IBLOCK_TYPE" => "cases",
		"IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => $arParams["MESSAGE_404"],
												"NEWS_COUNT" => "2",
												"PAGER_BASE_LINK" => $arParams["PAGER_BASE_LINK"],
												"PAGER_BASE_LINK_ENABLE" => "N",
												"PAGER_DESC_NUMBERING" => "N",
												"PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
												"PAGER_PARAMS_NAME" => $arParams["PAGER_PARAMS_NAME"],
												"PAGER_SHOW_ALL" => "N",
												"PAGER_SHOW_ALWAYS" => "N",
												"PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
												"PAGER_TITLE" => $arParams["PAGER_TITLE"],
												"PARENT_SECTION" => "",
												"PARENT_SECTION_CODE" => "",
												"PREVIEW_TRUNCATE_LEN" => "",
												"PROPERTY_CODE" => array("","TYPE","={$arParams["LIST_PROPERTY_CODE"]}",""),
												"SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
												"SET_BROWSER_TITLE" => "N",
												"SET_LAST_MODIFIED" => "N",
												"SET_META_DESCRIPTION" => "N",
												"SET_META_KEYWORDS" => "N",
												"SET_STATUS_404" => "N",
												"SET_TITLE" => "N",
												"SHOW_404" => "N",
												"SORT_BY1" => "TIMESTAMP_X",
												"SORT_BY2" => $arParams["SORT_BY2"],
												"SORT_ORDER1" => "DESC",
												"SORT_ORDER2" => $arParams["SORT_ORDER2"],
												"STRICT_SECTION_CHECK" => "N",
												"USE_PERMISSIONS" => $arParams["USE_PERMISSIONS"]
											),
										$component,
										Array(
											'HIDE_ICONS' => 'Y'
										)
										);?>
								</div>
						</div>
				</div>
				<!-- <div class="keys_detail__shadow"></div> -->
				<div class="keys_detail__subskribe desctop">
						<div class="keys_detail__subskribe_wrap">
								<span class="keys_detail__subskribe_title">
										Поодписаться на рассылку
								</span>
								<span class="keys_detail__subskribe_p">
										Оставайтесь в курсе последних событий и новостей
								</span>
								<form class="keys_detail__subskribe_form" action="#">
										<input class="keys_detail__subskribe_form_email" type="email" placeholder="Email">
										<input class="keys_detail__subskribe_form_btn" type="submit">
								</form>
						</div>
						<div class="keys_detail__subskribe__socials">
								<span class="keys_detail__subskribe__socials__tilte">Соц сети:</span>
								<span class="keys_detail__subskribe__socials__p">Будьте в курсе последних событий</span>
								<div class="flex" style="gap: 10px;">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/vk-icon.svg" alt="">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/youtube-icon.svg" alt="">
								</div>
						</div>
				</div>
				
		</div>
</section>


<script type="text/javascript">
		function urlCopyButton(){
				var record_url = document.URL; //Узнаю текущий url
				navigator.clipboard.writeText(record_url); //Копирую в буфер обмена
				alert('Ссылка скопирована в буфер обмена.');
		}
</script>
<?
// echo '<pre>';
// print_r($arResult);
// echo '</pre>';
?>