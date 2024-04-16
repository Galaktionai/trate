<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
//echo "<pre>";
//echo print_r($arResult);
//echo "</pre>";
?>

<section class="boxes_two">
    <div class="container-2">
        <div class="boxes_two__grid">
            <? foreach ($arResult["ITEMS"] as $aritem): ?>
                <?
                $this->AddEditAction($aritem['ID'], $aritem['EDIT_LINK'], CIBlock::GetArrayByID($aritem["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($aritem['ID'], $aritem['DELETE_LINK'], CIBlock::GetArrayByID($aritem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                ?>
            <div id="<?=$this->GetEditAreaId($aritem['ID']);?>"  class="boxes_two__item">
                <img src="<?=$aritem['PREVIEW_PICTURE']['SRC']?>" alt="">
                <div class="boxes_two__item__txt">
                        <span class="boxes_two__item__title">
                            <?=$aritem['NAME']?>
                        </span>
                    <div class="boxes_two__item__p">
                        <?=$aritem['PREVIEW_TEXT']?>
                    </div>
                </div>
            </div>
            <? endforeach; ?>
        </div>
    </div>
</section>
