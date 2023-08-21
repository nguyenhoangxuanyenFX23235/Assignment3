const btnSubmit = document.querySelector(".submit");
const textBox = document.querySelector(".textbox");
const thongTinCaNhan = document.querySelector("#container-textbox-content");
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const text = textBox.value;
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const matches = text.match(pattern);

  if (matches) {
    console.log("Đây là email");
    thongTinCaNhan.style.display = "block";
  } else {
    console.log("Đây không phải là email");
  }
});

const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
viewMore.forEach(function (vm) {
  vm.addEventListener("click", function (e) {
    e.target.nextElementSibling.style.display = "block";
  });
});
viewLess.forEach(function (vm) {
  vm.addEventListener("click", function (e) {
    e.target.closest(".nd-tt").style.display = "none";
  });
});

const bton = document.getElementsByClassName("button");
