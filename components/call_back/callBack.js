document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let valid = true;

    // Очистка предыдущих ошибок
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Проверка имени
    const name = document.getElementById("nameCallBack").value.trim();
    if (!/^[а-яА-ЯёЁ]+$/.test(name)) {
      document.getElementById("nameError").textContent =
        "Пожалуйста, введите ваше имя на кириллице.";
      valid = false;
    }

    // Проверка номера телефона
    const phone = document.getElementById("phoneCallBack").value.trim();
    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Введите номер телефона 8(800)000-00-00 или +7(800)-000-00-00";
      valid = false;
    }

    // Проверка сообщения
    const message = document.getElementById("messageCallBack").value.trim();
    if (!message) {
      document.getElementById("messageError").textContent =
        "Пожалуйста, введите сообщение.";
      valid = false;
    }

    // Если все поля валидные, отправляем форму
    if (valid) {
      alert("Форма успешно отправлена!");
      return false;
      // Здесь должен быть код для отправки формы на сервер
    }
  });
