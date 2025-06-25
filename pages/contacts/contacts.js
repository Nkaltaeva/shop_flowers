document
  .getElementById("contactFeedback")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let valid = true;

    // Очистка предыдущих ошибок
    document.getElementById("nameFbError").textContent = "";
    document.getElementById("phoneFbError").textContent = "";
    document.getElementById("messageFbError").textContent = "";
    document.getElementById("emailFbError").textContent = "";

    // Проверка имени
    const name = document.getElementById("nameFeedback").value.trim();
    if (!/^[а-яА-ЯёЁ]+$/.test(name)) {
      document.getElementById("nameFbError").textContent =
        "Введите ваше имя на кириллице.";
      valid = false;
    }

    // Проверка номера телефона
    const phone = document.getElementById("phoneFeedback").value.trim();
    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)) {
      document.getElementById("phoneFbError").textContent =
        "Введите номер телефона по примеру +7(800)-000-00-00";
      valid = false;
    }
    // Проверка почты
    const email = document.getElementById("emailFeedback").value.trim();
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      document.getElementById("emailFbError").textContent =
        "Введите email по примеру mail@mail.com";
      valid = false;
    }

    // Проверка сообщения
    const message = document.getElementById("messageFeedback").value.trim();
    if (!message) {
      document.getElementById("messageFbError").textContent =
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
