// Задание 1
// Реализовать таск-менеджер по примеру:
// https://ucarecdn.com/1f553319-9298-4fe4-960b-6592ab2e5275/Monosnapscreencast20230717154248.mp4

// Для стилизации используем Bootstrap.
// Описание функционала:
// 1. При отправке формы в список ниже добавляется задача (при пустом инпуте задача не добавляется).
// 2. При отметке чекбокса li окрашивается в зеленый, при убирании отметки цвет пропадает.
// 3. При клике на кнопку удаления  соответствующая заметка удаляется.

const { form } = document.forms;
const { addTask, addBtn } = form.elements;
const ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  if (addTask.value === "") {
    alert(`Введите текст задачи`);
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `<input type='checkbox' class='check'/> <p>${addTask.value}</p> <button class = 'btnRemove'>Удалить</button>`;
  form.reset();
  ul.append(li);
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("btnRemove")) {
    event.target.parentElement.remove();
  }
});
ul.addEventListener("change", (event) => {
  if (event.target.classList.contains("check") && event.target.checked) {
    event.target.parentElement.style.background = "rgb(205, 220, 210)";
  } else {
    event.target.parentElement.style.background = "white";
  }
});
ul.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("btnRemove")) {
    event.target.style.background = "red";
    event.target.style.color = "white";
  }
});
ul.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("btnRemove")) {
    event.target.style.background = "transparent";
    event.target.style.color = "red";
  }
});
