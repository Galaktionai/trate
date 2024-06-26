<?
if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
/**
 * Bitrix vars
 *
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @global CMain $APPLICATION
 * @global CUser $USER
 */
?>
<!-- <section class="s-call">
		<div class="">
				<div class="div-block-13">
						<div id="w-node-_6b49af14-1495-e3ab-b7f6-1de432b5aaab-11bd7221" class="div-block-14">
							<img src="<?= SITE_TEMPLATE_PATH ?>/assets/img/66058ca681dddbe10a2f5ebf_Rectangle%2077.png" class="image-7">
						</div>
						<div id="w-node-ababcb35-af71-cc37-c0c4-9397a4ed0eea-11bd7221" class="div-block-15">
								<div class="div-block-16">
										<div class="feedback__green">
												<span class="feedback__green__txt1">Есть вопросы?</span>
												<span class="feedback__green__txt2">Напишите нам </span>
												<?if(!empty($arResult["ERROR_MESSAGE"]))
												{
													foreach($arResult["ERROR_MESSAGE"] as $v)
														ShowError($v);
												}
												if($arResult["OK_MESSAGE"] <> '')
												{
													?><div class="mf-ok-text"><?=$arResult["OK_MESSAGE"]?></div><?
												}
												?>
												<form class="feedback__green__form" action="<?=POST_FORM_ACTION_URI?>" method="POST">
														<?=bitrix_sessid_post()?>
														<select name="LETTER_SUBJECT" class="feedback__green__form__select" id="">
																<option value="Выберите тему письма">Выберите тему письма</option>
																<option value="Тема письма 1">Тема письма 1</option>
																<option value="Тема письма 2">Тема письма 2</option>
																<option value="Тема письма 3">Тема письма 3</option>
														</select>
														<div class="feedback__green__form__grid">
																<input type="text" name="user_name" value="<?=$arResult["AUTHOR_NAME"]?>" placeholder="<?=GetMessage("MFT_NAME")?><?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("NAME", $arParams["REQUIRED_FIELDS"])):?>*<?endif?>">
																<input type="text" name="user_phone" value="<?=$arResult["AUTHOR_PHONE"]?>" placeholder="<?=GetMessage("MFT_PHONE")?><?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("PHONE", $arParams["REQUIRED_FIELDS"])):?>*<?endif?>">
														</div>
														<textarea name="MESSAGE" class="feedback__green__form__textarea" placeholder="<?=GetMessage("MFT_MESSAGE")?><?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("MESSAGE", $arParams["REQUIRED_FIELDS"])):?>*<?endif?>" id="" cols="30" rows="10"><?=$arResult["MESSAGE"]?></textarea>
														<?if($arParams["USE_CAPTCHA"] == "Y"):?>
														<div class="mf-captcha">
															<div class="mf-text"><?=GetMessage("MFT_CAPTCHA")?></div>
															<input type="hidden" name="captcha_sid" value="<?=$arResult["capCode"]?>">
															<img src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["capCode"]?>" width="180" height="40" alt="CAPTCHA">
															<div class="mf-text"><?=GetMessage("MFT_CAPTCHA_CODE")?><span class="mf-req">*</span></div>
															<input type="text" name="captcha_word" size="30" maxlength="50" value="">
														</div>
														<?endif;?>
														<div class="feedback__green__form__btn_wrap">
																<input type="hidden" name="PARAMS_HASH" value="<?=$arResult["PARAMS_HASH"]?>">
																<input class="feedback__green__form__btn" type="submit" value="Отправить" name="submit" value="<?=GetMessage("MFT_SUBMIT")?>">
														</div>
												</form>
										</div>
								</div>
						</div>
				</div>
		</div>
</section> -->


<?if(!empty($arResult["ERROR_MESSAGE"]))
{
	foreach($arResult["ERROR_MESSAGE"] as $v)
		ShowError($v);
}
if($arResult["OK_MESSAGE"] <> '')
{
	?><div class="mf-ok-text"><?=$arResult["OK_MESSAGE"]?></div><?
}
?>
<form class="contacts__grid__form" action="<?=POST_FORM_ACTION_URI?>" method="POST">
		<?=bitrix_sessid_post()?>
		<select class="contacts__grid__form__select" name="LETTER_SUBJECT" id="">
				<option data-display="Выберите тему письма">Выберите тему письма</option>
				<option value="Text 1">Text 1</option>
				<option value="Text 2">Text 2</option>
				<option value="Text 3">Text 3</option>
				<option value="Text 4">Text 4</option>
		</select>
		<input class="contacts__grid__form__input" name="user_name" value="<?=$arResult["AUTHOR_NAME"]?>" placeholder="<?=GetMessage("MFT_NAME")?><?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("NAME", $arParams["REQUIRED_FIELDS"])):?>*<?endif?>" type="text">
		<input class="contacts__grid__form__input" name="user_phone" value="<?=$arResult["AUTHOR_PHONE"]?>" placeholder="<?=GetMessage("MFT_PHONE")?><?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("PHONE", $arParams["REQUIRED_FIELDS"])):?>*<?endif?>" type="text">
		<textarea name="MESSAGE" class="contacts__grid__form__textarea" placeholder="<?=GetMessage("MFT_MESSAGE")?><?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("MESSAGE", $arParams["REQUIRED_FIELDS"])):?>*<?endif?>"><?=$arResult["MESSAGE"]?></textarea>
		<div class="contacts__grid__form__flex">
				<label class="contacts__grid__form__checkbox">
						<input required type="checkbox">
						<div class="checkmark"></div>
				</label>
				<span class="contacts__grid__form__flex__txt">
						Нажимая отправить, вы соглашаетесь с нашей 
						<a href="#">Политикой конфиденциальности</a>
				</span>
		</div>
		<div>
				<input type="hidden" name="PARAMS_HASH" value="<?=$arResult["PARAMS_HASH"]?>">
				<input class="contacts__grid__form__btn" type="submit" value="Отправить" name="submit" value="<?=GetMessage("MFT_SUBMIT")?>">
		</div>
</form>