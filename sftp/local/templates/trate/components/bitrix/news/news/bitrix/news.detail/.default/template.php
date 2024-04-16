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

<section class="keys_detail">
		<div class="keys_detail__wrap">
				<div class="keys_detail__info">
						<div class="container-3">
								<div class="dir-main">
										<a href="#" class="link-t w-inline-block">
												<div class="link-t">Главная</div>
										</a>
										<div class="dot link-t">•</div>
										<a href="#" class="link-t w-inline-block">
												<div class="link-t">Title</div>
										</a>
										<div class="dot link-t">•</div>
								</div>
								<div class="keys_detail__breadcums">
										<span class="keys_detail__breadcums_span">
												<?=$arResult["PROPERTIES"]["TYPE"]["VALUE"]?>
										</span>
										<?if($arResult["DISPLAY_ACTIVE_FROM"]):?>
											<span class="keys_detail__breadcums_date"><?echo $arResult["DISPLAY_ACTIVE_FROM"]?></span>
										<?else:?>
											<span class="keys_detail__breadcums_date"></span>
										<?endif;?>
								</div>
								<span class="keys_detail__pre_header">
										pre header
								</span>
								<h4 class="keys_detail__title">
										<?=$arResult["NAME"]?>
								</h4>
								<div class="keys_detail__txt">
										<?foreach($arResult["DISPLAY_PROPERTIES"]["PICS_NEWS"]["FILE_VALUE"] as $photo):?>
											<img src="<?=$photo["SRC"]?>" alt="<?=$photo["FILE_NAME"]?>">
										<?endforeach;?>
								</div>
								<div class="keys_detail__txt">
										<?=$arResult["DETAIL_TEXT"]?>
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
								<?$APPLICATION->IncludeComponent("bitrix:sender.subscribe", "subscribe-newsletter-detail", Array(
									"AJAX_MODE" => "N",	// Включить режим AJAX
										"AJAX_OPTION_ADDITIONAL" => "",	// Дополнительный идентификатор
										"AJAX_OPTION_HISTORY" => "N",	// Включить эмуляцию навигации браузера
										"AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
										"AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
										"CACHE_TIME" => "3600",	// Время кеширования (сек.)
										"CACHE_TYPE" => "A",	// Тип кеширования
										"COMPONENT_TEMPLATE" => "subscribe-newsletter",
										"CONFIRMATION" => "Y",	// Запрашивать подтверждение подписки по email
										"HIDE_MAILINGS" => "Y",	// Скрыть список рассылок, и подписывать на все
										"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
										"SHOW_HIDDEN" => "N",	// Показать скрытые рассылки для подписки
										"USER_CONSENT" => "N",	// Запрашивать согласие
										"USER_CONSENT_ID" => "0",	// Соглашение
										"USER_CONSENT_IS_CHECKED" => "N",	// Галка по умолчанию проставлена
										"USER_CONSENT_IS_LOADED" => "N",	// Загружать текст сразу
										"USE_PERSONALIZATION" => "Y",	// Определять подписку текущего пользователя
									),
									false
								);?>
								<div class="keys_detail__subskribe__socials">
										<span class="keys_detail__subskribe__socials__tilte">Соц сети:</span>
										<span class="keys_detail__subskribe__socials__p">Будьте в курсе последних событий</span>
										<div class="flex" style="gap: 10px;">
												<a href="#">
													<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/vk-icon.svg" alt="">
												</a>
												<a href="#">
													<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/youtube-icon.svg" alt="">
												</a>
										</div>
								</div>
						</div>
						<div class="read_other">
								<div class="container-3">
										<span class="read_other__title">Читайте также</span>
										<?$APPLICATION->IncludeComponent(
												"bitrix:news.list",
												"read-also-news",
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
													"DETAIL_URL" => "/about/news/#ELEMENT_CODE#/",
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
													"IBLOCK_ID" => "1",
													"IBLOCK_TYPE" => "news",
													"IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],
													"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
													"INCLUDE_SUBSECTIONS" => "Y",
													"MESSAGE_404" => $arParams["MESSAGE_404"],
													"NEWS_COUNT" => "4",
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
													"PROPERTY_CODE" => array("TYPE","={$arParams["LIST_PROPERTY_CODE"]}",""),
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
						<?$APPLICATION->IncludeComponent("bitrix:sender.subscribe", "subscribe-newsletter-detail", Array(
							"AJAX_MODE" => "N",	// Включить режим AJAX
								"AJAX_OPTION_ADDITIONAL" => "",	// Дополнительный идентификатор
								"AJAX_OPTION_HISTORY" => "N",	// Включить эмуляцию навигации браузера
								"AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
								"AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
								"CACHE_TIME" => "3600",	// Время кеширования (сек.)
								"CACHE_TYPE" => "A",	// Тип кеширования
								"COMPONENT_TEMPLATE" => "subscribe-newsletter",
								"CONFIRMATION" => "Y",	// Запрашивать подтверждение подписки по email
								"HIDE_MAILINGS" => "Y",	// Скрыть список рассылок, и подписывать на все
								"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
								"SHOW_HIDDEN" => "N",	// Показать скрытые рассылки для подписки
								"USER_CONSENT" => "N",	// Запрашивать согласие
								"USER_CONSENT_ID" => "0",	// Соглашение
								"USER_CONSENT_IS_CHECKED" => "N",	// Галка по умолчанию проставлена
								"USER_CONSENT_IS_LOADED" => "N",	// Загружать текст сразу
								"USE_PERSONALIZATION" => "Y",	// Определять подписку текущего пользователя
							),
							false
						);?>
						<div class="keys_detail__subskribe__socials">
								<span class="keys_detail__subskribe__socials__tilte">Соц сети:</span>
								<span class="keys_detail__subskribe__socials__p">Будьте в курсе последних событий</span>
								<div class="flex" style="gap: 10px;">
										<a href="#">
											<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/vk-icon.svg" alt="">
										</a>
										<a href="#">
											<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/youtube-icon.svg" alt="">
										</a>
								</div>
						</div>
				</div>
				
		</div>
</section>