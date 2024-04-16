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

<div class="s-cg">
		<div class="frame-1335-1 izm">
				<div class="text-19"><?=$arResult["PROPERTIES"]["UNDER_THE_TITLE"]["VALUE"]?></div>
				<div class="text-20 wegweg" style="margin-bottom: 19px;"><?=$arResult["NAME"]?></div>
				<div class="text-21-2" style="margin-bottom: 19px;">
						<?=$arResult["IBLOCK"]["DESCRIPTION"]?>
				</div>
				<a href="#" class="btn-main-g w-button none1024">Регистрация</a>
		</div>
		<img src="<?=$arResult["DETAIL_PICTURE"]["SRC"]?>" alt="<?=$arResult["DETAIL_PICTURE"]["ALT"]?>" class="events_detail__img">

		<div class="events_detail_grid">
				<div id="w-node-a3af79d5-2dcb-2c86-fc31-e987d8ed373c-11bd7221" class="div-block-29">
						<div id="w-node-bff59fe0-d1f5-de28-e06d-a4c6cfa5f929-11bd7221" class="frame-1244-mob">
								<div class="frame-1196">
										<div class="frame-1159">
												<div class="text-56">Дата:</div>
												<div class="text-57"><?=$arResult["PROPERTIES"]["DATE"]["VALUE"]?></div>
										</div>
										<div class="frame-1159">
												<div class="text-56">Место:</div>
												<div class="text-57"><?=$arResult["PROPERTIES"]["PLACE"]["VALUE"]["TEXT"]?></div>
										</div>
										<div class="frame-1159">
												<div class="text-56">Цена:</div>
												<?foreach($arResult["PROPERTIES"]["PRICE"]["VALUE"] as $code=>$price):?>
														<div class="text-57"><?=$price?></div>
												<?endforeach;?>
										</div>
								</div>
								<a href="#" class="btn-main-g w-button">Регистрация</a>
								<a href="#" class="frame-1343 w-inline-block"><img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/calendar.svg" loading="lazy" width="19" height="19" alt="" class="vectors-wrapper-10">
										<div class="text-57">Добавить в календарь</div>
								</a>
						</div>
						<div class="frame-1558">
								<div class="text-46">О Мероприятии</div>
								<div class="text-47">
										<?=$arResult["DETAIL_TEXT"]?>
								</div>
						</div>
						<div class="text-46">Our speakers</div>
						<div>
								<div class="swiper keys_detail__slider">
										<div class="swiper-wrapper keys_detail__doctors-wrapper">
												<?foreach ($arResult['PROPERTIES']['SPEAKERS']['VALUE'] as $elementId):?> 
														<?$obj = CIBlockElement::GetByID($elementId);?>
														<?if($element = $obj->GetNextElement()):
																$fields = $element->GetFields();
																$props = $element->GetProperties();
																?>
																<!-- <div class="speaker">
																		<h2><?=$fields['NAME']?></h2>
																		<p><?=$props['DESCRIPTION']['VALUE']?></p>
																</div> -->
																<div class="swiper-slide">
																		<div class="keys_detail__slider__item">
																				<?php
																				// Проверяем, есть ли значение для свойства "PHOTO"
																				if (!empty($props['PHOTO']['VALUE'])) {
																						// Получаем путь к изображению
																						$photoUrl = CFile::GetPath($props['PHOTO']['VALUE']);
																						// Выводим изображение
																						echo '<img class="keys_detail__slider__item__img" src="'.$photoUrl.'" alt="'.$fields['NAME'].'">';
																				}
																				?>
																				<div class="keys_detail__slider__item__txt">
																						<span class="keys_detail__slider__item__top">
																								<?=$props['CITY']['VALUE']?>
																						</span>
																						<span class="keys_detail__slider__item__title">
																								<?=$fields['NAME']?>
																						</span>
																						<span class="keys_detail__slider__item__title-2">
																								<?=$props['JOB']['VALUE']?>
																						</span>
																						<p class="keys_detail__slider__item__p">
																								<?=$props['TEXT']['VALUE']?>
																						</p>
																				</div>
																		</div>
																</div>
														<?endif?>
												<?endforeach;?>
										</div>
										<div class="keys_detail__swiper__controller">
												<div class="swiper-button-prev-keys_detail">
														<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/arrow-icon.svg" alt="">
												</div>
												<div class="swiper-pagination keys_detail__swiper__controller_pag"></div>
												<div class="swiper-button-next-keys_detail">
														<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/arrow-icon.svg" alt="">
												</div>
										</div>
								</div>
						</div>
						<div class="frame-1246">
								<div class="frame-17">
										<div class="text-50"><?=$arResult["PROPERTIES"]["DATE_DETAIL"]["VALUE"]?></div>
								</div>
								<div class="text-51"><?=$arResult["PROPERTIES"]["DATE_DETAIL_TITLE"]["VALUE"]?></div>
								<div class="border_bottom_dashed"></div>
								<?foreach($arResult["PROPERTIES"]["SCHEDULE"]["VALUE"] as $code=>$schedule):?>
								<div class="text-52">
										<div class="text-52 text-52"><?=$schedule?></div>
								</div>
								<div class="border_bottom_dashed"></div>
								<?endforeach;?>
						</div>
						<div class="frame-1559">
								<div class="text-48">Info and registration</div>
								<?foreach($arResult["PROPERTIES"]["INFORMATION_REGISTRAION"]["VALUE"] as $code=>$info):?>
										<div class="text-49"><?=$info?></div>
								<?endforeach;?>
						</div>
						<div class="wegwgreha">
								<a href="#" class="brix---btn-primary-small-prods detail">Регистрация</a>
						</div>
						<div class="frame-1345 fthjwekglsdf">
								<div class="text-56 alrara">Поделиться</div>
								<div class="frame-1344">
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
				<div class="events_detail__fixed">
						<div id="w-node-b6148f5b-1d4b-0353-60a1-70a3014d40c1-11bd7221" class="frame-1244">
								<div class="frame-1196">
										<div class="frame-1159">
												<div class="text-56">Дата:</div>
												<div class="text-57"><?=$arResult["PROPERTIES"]["DATE"]["VALUE"]?></div>
										</div>
										<div class="frame-1159">
												<div class="text-56">Место:</div>
												<div class="text-57"><?=$arResult["PROPERTIES"]["PLACE"]["VALUE"]["TEXT"]?></div>
										</div>
										<div class="frame-1159">
												<div class="text-56">Цена:</div>
												<?foreach($arResult["PROPERTIES"]["PRICE"]["VALUE"] as $code=>$price):?>
													<div class="text-57"><?=$price?></div>
												<?endforeach;?>
										</div>
								</div>
								<a href="#" class="brix---btn-primary-small-prods">Регистрация</a>
								<a href="#" class="frame-1343 w-inline-block">
										<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/calendar.svg" loading="lazy" width="19" height="19" alt="" class="vectors-wrapper-10">
										<div class="text-57">Добавить в календарь</div>
								</a>
								
								<div class="frame-1345">
										<div class="text-56">Поделиться</div>
										<div class="frame-1344">
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

				</div>
		</div>
</div>

<?
// echo '<pre>';
// print_r($arResult);
// echo '</pre>';
?>