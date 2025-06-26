// Определяем функции для отображения сообщения об ошибке
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Определяем функции для проверки формы
function validateForm() {
  // Получение значений элементов формы
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;
  var hobbies = [];
  var checkboxes = document.getElementsByName("hobbies[]");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      // Заполняем массив хобби выбранными значениями
      hobbies.push(checkboxes[i].value);
    }
  }

  // Определяем переменные ошибок со значением по умолчанию
  var nameErr = (emailErr = mobileErr = countryErr = genderErr = true);

  // Проверяем имя
  if (name == "") {
    printError("nameErr", "Пожалуйста, введите ваше имя");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Пожалуйста, введите правильное имя");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  // Проверяем адрес электронной почты
  if (email == "") {
    printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
  } else {
    // Регулярное выражение для базовой проверки электронной почты
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError(
        "emailErr",
        "Пожалуйста, введите действительный адрес электронной почты"
      );
    } else {
      printError("emailErr", "");
      emailErr = false;
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

  // Проверяем страну
  if (country == "Select") {
    printError("countryErr", "Пожалуйста, выберите вашу страну");
  } else {
    printError("countryErr", "");
    countryErr = false;
  }

  // Проверяем пол
  if (gender == "") {
    printError("genderErr", "Пожалуйста, выберите ваш пол");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  // Запрещаем отправку формы в случае ошибок
  if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
    return false;
  } else {
    // Создаем строки из входных данных для предварительного просмотра
    var dataPreview =
      "Вы ввели следующие данные: \n" +
      "Имя: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Номер: " +
      mobile +
      "\n" +
      "Страна: " +
      country +
      "\n" +
      "Пол: " +
      gender +
      "\n";
    if (hobbies.length) {
      dataPreview += "Hobbies: " + hobbies.join(", ");
    }
    // Отображаем входные данные в диалоговом окне перед отправкой формы
    alert(dataPreview);
  }
}
