var form = document.querySelector("#form");

var list = document.querySelector("#list");

window.addEventListener("DOMContentLoaded", async function renderElements() {
  const users = await axios.get("http://localhost:3000/getProducts");
  users.data.forEach((elem) => {
    var li = document.createElement("li");
    li.className = "items list-group-item list-group-item-success";
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    span1.textContent = `${elem.name}  `;
    span2.textContent = `${elem.description}  `;
    span3.textContent = `${elem.price}  `;
    span4.textContent = `${elem.Quantity}`;
    div1.appendChild(span1);
    div1.appendChild(span2);
    div1.appendChild(span3);
    div1.appendChild(span4);
    li.appendChild(div1);
    var buy1 = document.createElement("button");
    var buy2 = document.createElement("button");
    var buy3 = document.createElement("button");
    div1.className = "div1"
    div2.className = "div2"
    buy1.className = "buy1 btn-danger";
    buy1.textContent = "buy 1";
    buy2.className = "buy2 btn-info";
    buy2.textContent = "buy 2";
    buy3.className = "buy3 btn-info";
    buy3.textContent = "buy 3";
    buy1.id = elem.id;
    buy2.id = elem.id;
    buy3.id = elem.id;
    div2.appendChild(buy1);
    div2.appendChild(buy2);
    div2.appendChild(buy3);
    li.appendChild(div2);
    list.appendChild(li);
  });
});

list.addEventListener("click", async (e) => {
  if (e.target.classList.contains("buy1") || e.target.classList.contains("buy2") || e.target.classList.contains("buy3")) {
    let buyQuantity = Number(e.target.textContent.substring(4));
    
    let id = e.target.id;
    let itemData = e.target.parentElement.parentElement.firstElementChild;
    let itemName = itemData.getElementsByTagName("span")[0].textContent;
    let itemDesc = itemData.getElementsByTagName("span")[1].textContent;
    let itemPrice = itemData.getElementsByTagName("span")[2].textContent;
    let itemQuantity = itemData.getElementsByTagName("span")[3].textContent;
    console.log(id);
    console.log(itemName);
    console.log(itemDesc);
    console.log(itemPrice);
    console.log(itemQuantity);
    console.log(buyQuantity);

    if (buyQuantity > itemQuantity && itemQuantity != 0) {
    alert("buy quantity is greater than the available");
    } else if (itemQuantity > 0) {
         var data = {
          name: itemName,
          desc: itemDesc,
          price: itemPrice,
          qty: itemQuantity - buyQuantity,
        }; 
      await axios.post(`http://localhost:3000/updateProduct/${id}`,data);
      itemData.getElementsByTagName("span")[3].textContent = data.qty;
    }
    console.log(data);
    if (itemQuantity == 0) {
        alert("Out Of Stock");
        await axios.get(`http://localhost:3000/deleteProduct/${id}`);
    }
  }
});
