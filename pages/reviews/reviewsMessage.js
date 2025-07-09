document
  .getElementById("reviewsMessage")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let valid = true;

    // Очистка предыдущих ошибок
    document.getElementById("nameMrError").textContent = "";
    document.getElementById("emailMrError").textContent = "";
    document.getElementById("imgMrError").textContent = "";
    document.getElementById("messageTextareaMR").textContent = "";

    // Проверка имени
    const name = document.getElementById("nameMR").value.trim();
    if (!/^[а-яА-ЯёЁ]+$/.test(name)) {
      document.getElementById("nameMrError").textContent =
        "Введите ваше имя на кириллице.";
      valid = false;
    }
    // Проверка почты
    const email = document.getElementById("emailMR").value.trim();
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      document.getElementById("emailMrError").textContent =
        "Введите email по примеру mail@mail.com";
      valid = false;
    }

    // Проверка сообщения
    const message = document.getElementById("messageTextareaMR").value.trim();
    if (!message) {
      document.getElementById("messageMR").textContent =
        "Пожалуйста, введите сообщение.";
      valid = false;
    }
    // Проверка изображения
    const img = document.getElementById("imgMR").value.trim();
    if (!img) {
      document.getElementById("imgMrError").textContent =
        "Пожалуйста, добавьте изображение.";
      valid = false;
    }

    // Если все поля валидные, отправляем форму
    if (confirm("Хотите сохранить изменения?")) {
      if (valid) {
        alert("Спасибо, форма успешно отправлена!");
        return false;
        // Здесь должен быть код для отправки формы на сервер
      }
    }
  });
var dt = new DataTransfer();
