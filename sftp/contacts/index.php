<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
?>

<section class="contacts">
    <div class="container">
        <div class="dir-main-1">
            <a href="#" class="link-t w-inline-block">
                <div class="link-t">Главная</div>
            </a>
            <div class="dot link-t">•</div>
            <a href="#" class="link-t w-inline-block">
                <div class="link-t">Главная</div>
            </a>
            <div class="dot link-t">•</div>
            <a href="#" class="link-t w-inline-block">
                <div class="link-t">Главная</div>
            </a>
        </div>
        <div class="contacts__txt">
            <span class="contacts__txt__pre">
                pre header
            </span>
            <h4 class="contacts__txt__title">
                Контакты
            </h4>
            <p class="contacts__txt__p">
              <?$APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                Array(
                  "AREA_FILE_RECURSIVE" => "Y",
                  "AREA_FILE_SHOW" => "file",
                  "AREA_FILE_SUFFIX" => "inc",
                  "EDIT_TEMPLATE" => "",
                  "PATH" => "/contacts/contacts-txt.php"
                )
              );?>
            </p>
        </div>
        <div class="contacts__grid">
            <div class="contacts__grid__left">
                <div class="contacts__grid__left__map">
                    <div style="position:relative;overflow:hidden;">
                      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91b20db64649a46b2d23d93c68a31d04d9a9a4e12ff1bc4a7b291aebb3d35be2&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                </div>
                <div class="contacts__grid__left__txt">
                    <span class="contacts__grid__left__txt__title">
                        Юридический адрес:
                    </span>
                    <span class="contacts__grid__left__txt__adress">
                      <?$APPLICATION->IncludeComponent(
                        "bitrix:main.include", 
                        ".default", 
                        array(
                          "AREA_FILE_RECURSIVE" => "Y",
                          "AREA_FILE_SHOW" => "file",
                          "AREA_FILE_SUFFIX" => "inc",
                          "EDIT_TEMPLATE" => "",
                          "PATH" => "/contacts/contacts-address.php",
                          "COMPONENT_TEMPLATE" => ".default"
                        ),
                        false
                      );?>
                    </span>
                    <a class="contacts__grid__left__txt__mail" 
                    href="mailto:<?$APPLICATION->IncludeComponent(
                          "bitrix:main.include",
                          ".default",
                          Array(
                            "AREA_FILE_RECURSIVE" => "Y",
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "inc",
                            "COMPONENT_TEMPLATE" => ".default",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "/contacts/contacts-mail.php"
                          )
                        );?>">
                        <?$APPLICATION->IncludeComponent(
                          "bitrix:main.include",
                          ".default",
                          Array(
                            "AREA_FILE_RECURSIVE" => "Y",
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "inc",
                            "COMPONENT_TEMPLATE" => ".default",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "/contacts/contacts-mail.php"
                          )
                        );?>
                    </a>
                    <br>
                    <a class="contacts__grid__left__txt__phone" href="tel:<?$APPLICATION->IncludeComponent(
                          "bitrix:main.include",
                          ".default",
                          Array(
                            "AREA_FILE_RECURSIVE" => "Y",
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "inc",
                            "COMPONENT_TEMPLATE" => ".default",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "/contacts/contacts-number.php"
                          )
                        );?>">
                        <?$APPLICATION->IncludeComponent(
                          "bitrix:main.include",
                          ".default",
                          Array(
                            "AREA_FILE_RECURSIVE" => "Y",
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "inc",
                            "COMPONENT_TEMPLATE" => ".default",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "/contacts/contacts-number.php"
                          )
                        );?>
                    </a>
                </div>
            </div>
            <?$APPLICATION->IncludeComponent("gala:main.feedback", "contacts-feedback", Array(
              "EMAIL_TO" => "galaktion.tatarinow@yandex.ru",	// E-mail, на который будет отправлено письмо
                "EVENT_MESSAGE_ID" => array(	// Почтовые шаблоны для отправки письма
                  0 => "7",
                ),
                "OK_TEXT" => "Спасибо, ваше сообщение принято.",	// Сообщение, выводимое пользователю после отправки
                "REQUIRED_FIELDS" => array(	// Обязательные поля для заполнения
                  0 => "NAME",
                  1 => "PHONE",
                  3 => "MESSAGE",
                  4 => "LETTER_SUBJECT",
                ),
                "USE_CAPTCHA" => "N",	// Использовать защиту от автоматических сообщений (CAPTCHA) для неавторизованных пользователей
              ),
              false
            );?>
        </div>
    </div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>