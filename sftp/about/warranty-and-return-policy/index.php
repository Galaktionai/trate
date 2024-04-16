<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
?>

<section class="warranty-and-return-policy">
		<div class="container">
				<?$APPLICATION->IncludeComponent(
					"bitrix:breadcrumb", 
					"breadcrumbs", 
					array(
						"PATH" => "",
						"SITE_ID" => "s1",
						"START_FROM" => "0",
						"COMPONENT_TEMPLATE" => "breadcrumbs"
					),
					false
				);?>

				<div class="warranty-and-return-policy__txt">
						<div style="max-width: 840px">
								<?$APPLICATION->IncludeComponent(
									"bitrix:main.include",
									"",
									Array(
										"AREA_FILE_SHOW" => "file",
										"AREA_FILE_SUFFIX" => "inc",
										"EDIT_TEMPLATE" => "",
										"PATH" => "/about/warranty-and-return-policy/warranty-and-return-policy.php"
									)
								);?>
						</div>
				</div>
		</div>

</section>


<br>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>