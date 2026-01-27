import { supabase } from "./supabase.js";

const logoutBtn = document.getElementById("logoutBtn");
const addBtn = document.getElementById("addBtn");
const todoText = document.getElementById("todoText");
const todosList = document.getElementById("todosList");

logoutBtn.addEventListener("click", async () => {
  localStorage.removeItem("guest");
  await supabase.auth.signOut();
  window.location.href = "index.html";
});

async function loadTodos() {
  todosList.innerHTML = "";

  const isGuest = localStorage.getItem("guest") === "true";

  if (isGuest) {
    const guestTodos = JSON.parse(localStorage.getItem("guestTodos") || "[]");
    guestTodos.forEach(todo => {
      todosList.innerHTML += `<div class="todo-item">${todo}</div>`;
    });
  } else {
    const user = await supabase.auth.getUser();
    const { data } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.data.user.id);

    data.forEach(todo => {
      todosList.innerHTML += `<div class="todo-item">${todo.task}</div>`;
    });
  }
}

addBtn.addEventListener("click", async () => {
  const task = todoText.value;

  const isGuest = localStorage.getItem("guest") === "true";

  if (isGuest) {
    const guestTodos = JSON.parse(localStorage.getItem("guestTodos") || "[]");
    guestTodos.push(task);
    localStorage.setItem("guestTodos", JSON.stringify(guestTodos));
    todoText.value = "";
    loadTodos();
  } else {
    const user = await supabase.auth.getUser();
    const { error } = await supabase.from("todos").insert([
      { task, user_id: user.data.user.id, status: "Not Started" }
    ]);

    if (error) alert(error.message);
    else {
      todoText.value = "";
      loadTodos();
    }
  }
});

loadTodos();
