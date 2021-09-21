import "./styles.css";

document.getElementById("app").innerHTML = `
  <h1>Hello World!</h1>
  <table id="menu-table">
      <tr class="header">
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Pasta</td>
        <td>6,99€</td>
      </tr>
      <tr>
        <td>Pizza</td>
        <td>14,89€</td>
      </tr>
      <tr>
        <td>Ravioli</td>
        <td>20,00€</td>
      </tr>
      <tr>
        <td>Chicken nuggets</td>
        <td>6,66€</td>
      </tr>
      <tr>
        <td>Hamburger</td>
        <td>4,95€</td>
      </tr>
    </table>
`;

var ul = document.getElementById("ul");
document.getElementById("add-comment").onclick = function () {
  var li = document.createElement("li");
  var text = document.getElementById("comment");
  li.appendChild(document.createTextNode(text.value));
  var rating = document.getElementById("rating");
  var div = document.createElement("div");
  text.className += "comment-text";
  rating.className += "comment-rating";
  div.appendChild(
    document.createTextNode(
      "comment: " + text.value + ", rating: " + rating.value
    )
  );
  div.classList.add("comment");
  ul.appendChild(div);
  console.log(ul);
  console.log(text.value);
  document.getElementById("comment").value = "";
};
document.getElementById("remove-comments").onclick = function () {
  var r = confirm("Are You Sure?");
  if (r == true) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    console.log(ul);
  }
};
