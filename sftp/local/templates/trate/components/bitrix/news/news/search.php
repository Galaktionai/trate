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
$this->setFrameMode(false);
?>
<?$APPLICATION->IncludeComponent(
	"bitrix:search.page",
	"",
	Array(
		"CHECK_DATES" => $arParams["CHECK_DATES"]!=="N"? "Y": "N",
		"DISPLAY_DATE" => $arParams["DISPLAY_DATE"],
		"ACTIVE_DATE_FORMAT" => $arParams["LIST_ACTIVE_DATE_FORMAT"],
		"arrWHERE" => Array("iblock_".$arParams["IBLOCK_TYPE"]),
		"arrFILTER" => Array("iblock_".$arParams["IBLOCK_TYPE"]),
		"PROPERTY_CODE" => $arParams["SEARCH_PROPERTY_CODE"],
		"SHOW_WHERE" => "N",
		//"PAGE_RESULT_COUNT" => "",
		"CACHE_TYPE" => $arParams["CACHE_TYPE"],
		"CACHE_TIME" => $arParams["CACHE_TIME"],
		"SET_TITLE" => $arParams["SET_TITLE"],
		"arrFILTER_iblock_".$arParams["IBLOCK_TYPE"] => Array($arParams["IBLOCK_ID"])
	),
	$component
);?>
