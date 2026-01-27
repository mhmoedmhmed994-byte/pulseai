import { supabase } from "./supabase.js";

const addBtn = document.getElementById("addBtn");
const todoText = document.getElementById("todoText");
const todosList = document.getElementById("todosList");

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "index.html";
});

// تحميل المهام عند فتح الصفحة
async function loadTodos() {
  const user = supabase.auth.user();

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user.id);

  todosList.innerHTML = "";

  data.forEach(todo => {
    todosList.innerHTML += `<div class="todo-item">
      <p>${todo.task}</p>
    </div>`;
  });
}

addBtn.addEventListener("click", async () => {
  const user = supabase.auth.user();
  const task = todoText.value;

  const { error } = await supabase.from("todos").insert([
    { task, user_id: user.id, status: "Not Started" }
  ]);

  if (error) alert(error.message);
  else {
    todoText.value = "";
    loadTodos();
  }
});

loadTodos();
