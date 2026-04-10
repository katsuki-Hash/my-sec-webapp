const API_URL = "ここにさっきのURL";

function clockIn() {
  sendData("出勤");
}

function clockOut() {
  sendData("退勤");
}

function sendData(type) {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ type: type })
  }).then(() => loadData());
}

function loadData() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";

      data.forEach(row => {
        const li = document.createElement("li");
        li.textContent = row[0] + " : " + row[1];
        list.appendChild(li);
      });
    });
}

loadData();
