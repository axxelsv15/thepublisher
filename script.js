// Función para crear un nuevo post
function createPost(author, content) {
  var post = document.createElement("li");
  post.className = "post";
  
  var authorElem = document.createElement("div");
  authorElem.className = "author";
  authorElem.textContent = author;
  
  var contentElem = document.createElement("div");
  contentElem.textContent = content;
  
  var timestampElem = document.createElement("div");
  timestampElem.className = "timestamp";
  timestampElem.textContent = new Date().toLocaleString();
  
  post.appendChild(authorElem);
  post.appendChild(contentElem);
  post.appendChild(timestampElem);
  
  return post;
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();
  
  var authorInput = document.getElementById("author-input");
  var contentInput = document.getElementById("content-input");
  var postList = document.getElementById("post-list");
  
  var author = authorInput.value;
  var content = contentInput.value;
  
  if (author && content) {
    var post = createPost(author, content);
    postList.appendChild(post);
    
    // Limpiar los campos del formulario
    authorInput.value = "";
    contentInput.value = "";
  }
}

// Asignar el manejador de eventos al formulario
var form = document.getElementById("post-form");
form.addEventListener("submit", handleSubmit);
