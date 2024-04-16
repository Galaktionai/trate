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
                <div class="gird-cards">
<? foreach ($arResult["ITEMS"] as $aritem): ?>
    <a id="w-node-_188f7577-b326-e3a8-16d2-c87c3073f821-11bd7221"
       data-w-id="188f7577-b326-e3a8-16d2-c87c3073f821"
       href="<?= $aritem["DETAIL_PAGE_URL"] ?>"
       class="brix---product-card-wrapper-v1 w-inline-block">
        <div class="brix---product-card-image-inside-card">
            <?if($aritem["PREVIEW_PICTURE"]["SRC"]):?>
            <img srcset="<?= $aritem["PREVIEW_PICTURE"]["SRC"]  ?> 500w, <?= $aritem["PREVIEW_PICTURE"]["SRC"] ?> 510w"
                 alt=""
                 sizes="(max-width: 479px) 52vw, (max-width: 767px) 48vw, (max-width: 991px) 49vw, (max-width: 1439px) 229.40625px, 169.9921875px"
                 src="assets/img/66013cc3dbe4505a6fbd2a10_pr.png" class="brix---product-card-image">
            <?else:?>
            <img src="<?=SITE_TEMPLATE_PATH?>/assets/img/no_photo.png">
            <?endif;?>
            <div class="brix---badge-wrapper-top-right"></div>
        </div>
        <div class="brix---product-card-content">
            <div class="brix---mg-bottom-24px-2">
                <div class="article-card-t1"><?= $aritem["NAME"] ?></div>
                <div class="brix---color-neutral-601">
                    <div class="article-card-t2">ø <?= $aritem["PROPERTIES"]["DIAMETER"]["VALUE"][0] ?> мм,
                        L <?= $aritem["PROPERTIES"]["LENGTH"]["VALUE"][0] ?> мм
                    </div>
                </div>
            </div>
            <div class="brix---btn-primary-small-prod">Подробнее</div>
        </div>
    </a>
<? endforeach; ?>
                </div>
