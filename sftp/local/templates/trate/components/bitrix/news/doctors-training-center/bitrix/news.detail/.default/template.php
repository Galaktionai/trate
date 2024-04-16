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
<?if($arResult["PROPERTIES"]["BANNER"]['VALUE'] == 'Баннер 1'):?>
<section class="banner_centr_study banner-detail-page">
		<img class="banner_centr_study__img" src="<?=$arResult["DISPLAY_PROPERTIES"]["IMG"]['FILE_VALUE']['SRC']?>" alt="Фон">
		<div class="container">
				<div class="banner_centr_study__txt">
						<span class="banner_centr_study__txt_span"><?=$arResult["PROPERTIES"]["PRE_HEADER"]['VALUE']?></span>
						<h3 class="banner_centr_study__txt_title">
								<?=$arResult["NAME"]?>
						</h3>
						<div>
								<p class="banner_centr_study__txt_p">
										<?=$arResult["PROPERTIES"]["BANNER_TEXT"]['VALUE']['TEXT']?>
								</p>
						</div>
						<a class="brix---btn-primary-small-inh potato w-button" href="<?=$arResult["PROPERTIES"]["LINK_BTN"]['VALUE']?>">
								<?=$arResult["PROPERTIES"]["TEXT_BTN"]['VALUE']?>
						</a>
						<h3 class="rgrwerh">
						<?=$arResult["NAME"]?>
						</h3>
				</div>
		</div>
</section>
<?else:?>
<section class="banner_tipovoy__section">
		<div class="banner_tipovoy">
				<div class="container">
						<div class="banner_tipovoy__grid">
								<div class="banner_tipovoy__text">
										<div class="banner_centr_study__txt">
												<span class="banner_centr_study__txt_span__detail"><?=$arResult["PROPERTIES"]["PRE_HEADER"]['VALUE']?></span>
												<h3 class="banner_centr_study__txt_title__detail">
														<?=$arResult["NAME"]?>>
												</h3>
												<p class="banner_centr_study__txt_p">
														<?=$arResult["PROPERTIES"]["BANNER_TEXT"]['VALUE']['TEXT']?>
												</p>
												<a class="brix---btn-primary-small-inh potato w-button" href="<?=$arResult["PROPERTIES"]["LINK_BTN"]['VALUE']?>">
														<?=$arResult["PROPERTIES"]["TEXT_BTN"]['VALUE']?>
												</a>
										</div>
								</div>
								<div class="banner_tipovoy__img right">
										<img src="<?=$arResult["DISPLAY_PROPERTIES"]["IMG"]['FILE_VALUE']['SRC']?>" alt="">
								</div>
						</div>
				</div>
		</div>
</section>
<?endif?>
<section>
		<div class="container">
				<div style="margin-top: 38px;">

				</div>
		</div>
		<div class="information">
				<div class="container">
						<span><?=$arResult["PROPERTIES"]["PRE_HEADER_2"]['VALUE']?></span>
						<h3>
								<?=$arResult["PROPERTIES"]["TITLE_2"]['VALUE']?>
						</h3>
						<p>
								<?=$arResult["PROPERTIES"]["TEXT_2"]['VALUE']['TEXT']?>
						</p>
				</div>
		</div>
</section>
<section class="vnutr_boxes">
		<div class="">
				<div class="container">
						<div class="banner_tipovoy__grid">
								<div class="banner_tipovoy__text">
										<div class="banner_centr_study__txt detail" style="width: 464px;">
												<span class="banner_centr_study__txt_span__detail"><?=$arResult["PROPERTIES"]["PRE_HEADER_3"]['VALUE']?></span>
												<h3 class="banner_centr_study__txt_title__detail adaptive">
														<?=$arResult["PROPERTIES"]["TITLE_3"]['VALUE']?>
												</h3>
												<p class="banner_centr_study__txt_p">
														<?=$arResult["PROPERTIES"]["TEXT_3"]['VALUE']['TEXT']?>
												</p>
												<a class="grey__btn" href="<?=$arResult["PROPERTIES"]["LINK_BTN"]['VALUE']?>">
														<?=$arResult["PROPERTIES"]["TEXT_BTN"]['VALUE']?>
												</a>
										</div>
								</div>
								<div class="banner_tipovoy__img right">
										<img src="<?=$arResult["DISPLAY_PROPERTIES"]["IMG_3"]['FILE_VALUE']['SRC']?>" alt="">
								</div>
						</div>
				</div>
		</div>
</section>
<section class="vnutr_boxes">
		<div class="">
				<div class="container">
						<div class="banner_tipovoy__grid reverse">
								<div class="banner_tipovoy__img left">
										<img src="<?=$arResult["DISPLAY_PROPERTIES"]["IMG_4"]['FILE_VALUE']['SRC']?>" alt="">
								</div>
								<div class="banner_tipovoy__text right">
										<div class="banner_centr_study__txt detail" style="width: 464px;">
												<span class="banner_centr_study__txt_span__detail"><?=$arResult["PROPERTIES"]["PRE_HEADER_4"]['VALUE']?></span>
												<h3 class="banner_centr_study__txt_title__detail adaptive">
														<?=$arResult["PROPERTIES"]["TITLE_4"]['VALUE']?>
												</h3>
												<p class="banner_centr_study__txt_p">
														<?=$arResult["PROPERTIES"]["TEXT_4"]['VALUE']['TEXT']?>
												</p>
												<a class="grey__btn" href="<?=$arResult["PROPERTIES"]["LINK_BTN"]['VALUE']?>">
														<?=$arResult["PROPERTIES"]["TEXT_BTN"]['VALUE']?>
												</a>
										</div>
								</div>
						</div>
				</div>
		</div>
</section>
<section class="grey_text">
		<div class="container">
				<p>
						<?=$arResult["PROPERTIES"]["PRIMECHANIE"]['VALUE']['TEXT']?>
				</p>
		</div>
</section>
<section>
		<div class="container">
				<h6>
						Нужны доступы карты https://dentalroott.ru/o-centre/roott-v-drugih-stranah/
				</h6>
		</div>
</section>
<section class="list_predstovitels">
		<div class="container">
				<h4 class="list_predstovitels__title">
						Список представительств
				</h4>
				<div class="list_predstovitels__grid">
						<?foreach ($arResult['PROPERTIES']['LIST_PREDSTAVITELSTV']['VALUE'] as $elementId):?> 
								<?$obj = CIBlockElement::GetByID($elementId);?>
								<?if($element = $obj->GetNextElement()):
										$fields = $element->GetFields();
										$props = $element->GetProperties();
										?>
										<?
// echo '<pre>';
// print_r($props);
// echo '<pre>';
										?>
										<div class="list_predstovitels__item">
												<div class="flex">
														<img class="list_predstovitels__item__icon" src="<?=SITE_TEMPLATE_PATH?>/assets/img/gps.svg" alt="иконка">
														<span><?=$props['CITY']['VALUE']?></span>
												</div>
												<div class="list_predstovitels__item__txt">
														<span><?=$fields['NAME']?></span>
														<span><?=$props['STREET']['VALUE']?></span>
														<a href="tel:<?=$props['NUMBER']['VALUE']?>"><?=$props['NUMBER']['VALUE']?></a>
												</div>
										</div>
								<?endif?>
						<?endforeach;?>
				</div>
		</div>
</section>
<section class="seteficats">
		<div class="container">
				<h4 class="seteficats__title">
						Сертификаты
				</h4>
				<div class="swiper seteficatsSwiper">
						<div class="swiper-wrapper">
							<? foreach ($arResult["DISPLAY_PROPERTIES"]["SERTEFICATS"]['FILE_VALUE'] as $aritem): ?>
								<div class="swiper-slide seteficat-item-slide">
										<a href="<?=$aritem['SRC']?>">
												<img src="<?=$aritem['SRC']?>" alt="">
										</a>
								</div>
							<? endforeach; ?>
						</div>
						<div class="container swiper_buttons_seteficats">
								<div class="swiper-button-next-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
								<div class="swiper-button-prev-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
						</div>
				</div>
		</div>
</section>
<section class="autors">
		<div class="container">
				<div class="swiper autorsSwiper">
						<div class="swiper-wrapper">
								<?foreach ($arResult['PROPERTIES']['DOCKTORS']['VALUE'] as $elementId):?> 
										<?$obj = CIBlockElement::GetByID($elementId);?>
										<?if($element = $obj->GetNextElement()):
												$fields = $element->GetFields();
												?>
												<div class="swiper-slide">
														<div class="autor_item">
																<?php
																// Проверяем, есть ли значение для свойства "PHOTO"
																if (!empty($fields['PREVIEW_PICTURE'])) {
																		// Получаем путь к изображению
																		$photoUrl = CFile::GetPath($fields['PREVIEW_PICTURE']);
																		// Выводим изображение
																		echo '<img class="autor_item__img" src="'.$photoUrl.'" alt="'.$fields['NAME'].'">';
																}
																?>
																<div class="autor_item__txt">
																		<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/zapyat.svg" alt="">
																		<p>
																				<?=$fields['PREVIEW_TEXT']?>
																		</p>
																		<span>
																				<?=$fields['NAME']?>
																		</span>
																</div>
														</div>
												</div>
										<?endif?>
								<?endforeach;?>
						</div>
						<div class="container swiper_buttons_autors">
								<div class="swiper-button-next-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
								<div class="swiper-button-prev-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
						</div>
				</div>
		</div>
</section>
<section class="youtube">

		<iframe width="100%" height="100%" src="<?=$arResult["PROPERTIES"]["VIDEO_YOUTUBE"]['VALUE']?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>
<section class="boxes">
		<div class="container">
				<div class="boxes__grid">
						<?foreach ($arResult['PROPERTIES']['PRIEMUSHESTVA']['VALUE'] as $elementId):?> 
								<?$obj = CIBlockElement::GetByID($elementId);?>
								<?if($element = $obj->GetNextElement()):
										$fields = $element->GetFields();
										?>
										<div class="boxes__item">
														<?
// echo '<pre>';
// print_r($fields);
// echo '<pre>';
										?>
												<span class="boxes__item__title"><?=$fields['NAME']?></span>
												<p class="boxes__item__p">
														<?=$fields['PREVIEW_TEXT']?>
												</p>
										</div>
								<?endif?>
						<?endforeach;?>
				</div>
		</div>
</section>
<section class="galery_one">
		<div class="container">
				<div class="galery_one__flex">
						<h4>
								Галерея 1
						</h4>
						<p>
								<?=$arResult["PROPERTIES"]["GALLERY_TEXT"]['VALUE']['TEXT']?>
						</p>
				</div>

				<div class="swiper autorsSwiper sdfewf">
						<div class="swiper-wrapper">
							<?foreach ($arResult['DISPLAY_PROPERTIES']['GALLERY_IMAGES']['FILE_VALUE'] as $galleryPhoto):?> 
								<div class="swiper-slide">
									<a href="<?=$galleryPhoto['SRC']?>">
										<img class="swiper-slide-img" src="<?=$galleryPhoto['SRC']?>" alt="">
									</a>
								</div>
							<?endforeach;?>
						</div>
						<div class="container swiper_buttons_galery_one">
								<div class="swiper-button-next-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
								<div class="swiper-button-prev-gala">
										<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
								</div>
						</div>
				</div>
		</div>
</section>
<section class="section_study_galery">
		<div class="container">
				<span class="section_study_galery_title">Галерея 2</span>
		</div>
		<div class="swiper studyGalery swiper-initialized swiper-horizontal swiper-backface-hidden">
				<div class="swiper-wrapper study-galery-wrapper" id="swiper-wrapper-357820e84b86f1e3" aria-live="polite">
						<?foreach ($arResult['DISPLAY_PROPERTIES']['GALLERY_2_IMAGES']['FILE_VALUE'] as $galleryPhoto):?> 
							<div class="swiper-slide">
								<a href="<?=$galleryPhoto['SRC']?>">
									<img src="<?=$galleryPhoto['SRC']?>" alt="">
								</a>
							</div>
						<?endforeach;?>
				</div>
				<div class="container swiper_buttons_galery">
						<div class="swiper-button-next-gala" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-357820e84b86f1e3" aria-disabled="false">
								<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
						</div>
						<div class="swiper-button-prev-gala swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-357820e84b86f1e3" aria-disabled="true">
								<img src="<?=SITE_TEMPLATE_PATH?>/assets/img/arrow-slider.svg" alt="">
						</div>
				</div>
				<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
		</div>
</section>
<section class="boxes_two">
		<div class="container-2">
				<div class="boxes_two__grid">
						<?foreach ($arResult['PROPERTIES']['PRIEMUSHESTVA_2']['VALUE'] as $elementId):?> 
								<?$obj = CIBlockElement::GetByID($elementId);?>
								<?if($element = $obj->GetNextElement()):
										$fields = $element->GetFields();
										$props = $element->GetProperties();
										?>
										<div class="boxes_two__item">
												<?php
												// Проверяем, есть ли значение для свойства "PHOTO"
												if (!empty($props['ICON']['VALUE'])) {
														// Получаем путь к изображению
														$photoUrl = CFile::GetPath($props['ICON']['VALUE']);
														// Выводим изображение
														echo '<img src="'.$photoUrl.'" alt="'.$fields['NAME'].'">';
												}
												?>
												<div class="boxes_two__item__txt">
														<span class="boxes_two__item__title">
																<?=$fields['NAME']?>
														</span>
														<div class="boxes_two__item__p">
																<?=$fields['PREVIEW_TEXT']?>
														</div>
												</div>
										</div>
								<?endif?>
						<?endforeach;?>
				</div>
		</div>
</section>
<section class="feedback">
		<div class="container">
				<span class="feedback__title"><?=$arResult["PROPERTIES"]["TITLE_6"]['VALUE']?></span>
				<span class="feedback__p"><?=$arResult["PROPERTIES"]["TEXT_4"]['VALUE']['TEXT']?></span>
				<div class="feedback__btn">
						<a class="feedback__green_btn" href="<?=$arResult["PROPERTIES"]["LINK_BTN"]['VALUE']?>">
								<?=$arResult["PROPERTIES"]["TEXT_BTN"]['VALUE']?>
						</a>
				</div>
		</div>
</section>

<?$APPLICATION->IncludeComponent(
	"gala:main.feedback",
	"",
	Array(
		"EMAIL_TO" => "galaktion.tatarinow@yandex.ru",
		"EVENT_MESSAGE_ID" => array(0=>"7",),
		"OK_TEXT" => "Спасибо, ваше сообщение принято.",
		"REQUIRED_FIELDS" => array(0=>"NAME",1=>"PHONE",3=>"MESSAGE",4=>"LETTER_SUBJECT",),
		"USE_CAPTCHA" => "N"
	)
);?>
<?
// echo '<pre>';
// print_r($arResult);
// echo '</pre>';
?>

<style>
	.banner-detail-page{
		background: url('<?=$arResult["DISPLAY_PROPERTIES"]["IMG"]['FILE_VALUE']['SRC']?>') no-repeat;
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

	.seteficat-item-slide img{
		height: 263px;
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