// Определяем функции для отображения сообщения об ошибке
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Определяем функции для проверки формы
function validateForm() {
  // Получение значений элементов формы
  var name = document.contactForm.name.value;
  var mobile = document.contactForm.mobile.value;
  var textarea = document.contactForm.textarea.value;

  // Определяем переменные ошибок со значением по умолчанию
  var nameErr = (mobileErr = true);

  // Проверяем имя
  if (name == "") {
    printError("nameErr", "Пожалуйста, введите ваше имя");
  } else {
    var regex = /^[а-яА-ЯёЁ]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Пожалуйста, введите правильное имя");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  // Проверяем номер мобильного телефона
  if (mobile == "") {
    printError(
      "mobileErr",
      "Пожалуйста, введите номер вашего мобильного телефона"
    );
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError(
        "mobileErr",
        "Пожалуйста, введите действительный 10-значный номер мобильного телефона"
      );
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  // Запрещаем отправку формы в случае ошибок
  if ((nameErr || mobileErr) == true) {
    return false;
  } else {
    // Создаем строки из входных данных для предварительного просмотра
    var dataPreview =
      "Вы ввели следующие данные: \n" +
      "Имя: " +
      name +
      "\n" +
      "Номер: " +
      mobile +
      "\n" +
      "Текст: " +
      textarea;
    // Отображаем входные данные в диалоговом окне перед отправкой формы
    alert(dataPreview);
    false;
  }
}
