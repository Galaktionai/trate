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
?>

<? foreach ($arResult["ITEMS"] as $arItem): ?>
    <?
    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
    ?>


    <?
//    echo "<pre>";
//    echo print_r($arResult);
//    echo "</pre>";
    ?>
    <? if ($arResult['ITEMS'][0]['PROPERTIES']['BANNER_TYPE']['VALUE'] == 'Баннер 1'): ?>
        <div id="<?= $this->GetEditAreaId($arResult['ITEMS'][0]['ID']); ?>" class="banner_centr_study banner-detail-page">
            <img class="banner_centr_study__img" src="<?echo $arResult['ITEMS'][0]["PREVIEW_PICTURE"]["SRC"]?>" alt="Фон">
            <div class="container">
                <div class="banner_centr_study__txt">
                    <h3 class="banner_centr_study__txt_title">
                        <?= $arResult['ITEMS'][0]['NAME'] ?>
                    </h3>
                    <div>
                        <p class="banner_centr_study__txt_p">
                            <?= $arResult['ITEMS'][0]['PREVIEW_TEXT'] ?>
                        </p>
                    </div>
                    <? if($arResult['ITEMS'][0]['PROPERTIES']['TEXT_BTN']['VALUE']):?>
                    <a class="brix---btn-primary-small-inh potato w-button" href="<?= $arResult['ITEMS'][0]['PROPERTIES']['LINK_BTN']['VALUE'] ?>">
                            <?= $arResult['ITEMS'][0]['PROPERTIES']['TEXT_BTN']['VALUE'] ?>
                    </a>
                    <? endif; ?>
                    <p class="rgrwerh">
                        Учитесь у ведущих экспертов со всего мира. Наши курсы охватывают все аспекты дентальной
                        имплантации
                        от диагностики и планирования лечения до хирургических и ортопедических протоколов
                    </p>
                </div>
            </div>
        </div>
    <? else: ?>
        <section  id="<?= $this->GetEditAreaId($arResult['ITEMS'][0]['ID']); ?>" class="banner_tipovoy__section">
            <div class="banner_tipovoy">
                <div class="container">
                    <div class="banner_tipovoy__grid">
                        <div class="banner_tipovoy__text">
                            <div class="banner_centr_study__txt" style="width: 464px;">
<!--                                <span class="banner_centr_study__txt_span__detail">pre header</span>-->
                                <h3 class="banner_centr_study__txt_title__detail adaptive">
                                    <?= $arResult['ITEMS'][0]['NAME'] ?>
                                </h3>
                                <p class="banner_centr_study__txt_p">
                                    <?= $arResult['ITEMS'][0]['PREVIEW_TEXT'] ?>
                                </p>
                                <? if($arResult['ITEMS'][0]['PROPERTIES']['TEXT_BTN']['VALUE']):?>
                                <a class="brix---btn-primary-small-inh potato w-button" href="<?= $arResult['ITEMS'][0]['PROPERTIES']['LINK_BTN']['VALUE'] ?>">
                                    <?= $arResult['ITEMS'][0]['PROPERTIES']['TEXT_BTN']['VALUE'] ?>
                                </a>
                                <? endif; ?>
                            </div>
                        </div>
                        <div class="banner_tipovoy__img right">
                            <img src="<?=$arResult['ITEMS'][0]['PREVIEW_PICTURE']['SRC']?>" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <? endif; ?>
<? endforeach; ?>
<style>
    .banner-detail-page {
        background: url('<?echo $arResult['ITEMS'][0]["PREVIEW_PICTURE"]["SRC"]?>') no-repeat;
        background-size: cover;
    }

    .banner_centr_study {
        height: 86vh;
        display: flex;
        align-items: center;
        position: relative;
        color: white;
    }

    .banner_centr_study__txt_title {
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