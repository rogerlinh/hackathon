let form = document.getElementById("input1");
let a = document.getElementById("male-img");
let b = document.getElementById("female-img");
if (a.click) {
    a.style.border = "1px solid blue";
    b.style.border = "none";
} else if (b.click) {
    b.style.border = "1px solid blue";
    a.style.border = "none";
} else {
    a.style.border = "none";
    b.style.border = "none";
}



form.onsubmit = (e) => {
  e.preventDefault();
  let gt = "";
  if (form.male.checked) {
      gt = "male"
  } else {
      gt = "female"
  }
    var ageNumber = form.ageNumber.value;
    var weightNumber = form.weightNumber.value;
    var heightNumber = form.heightNumber.value;
    var bmiNumber = (weightNumber * 10000 / (heightNumber * heightNumber)).toFixed(2);
    console.log(ageNumber);
    console.log(weightNumber);
    console.log(heightNumber);
    console.log(gt);
    console.log(bmiNumber);

  var data ={
      gt : gt,
      ageNumber:ageNumber,
      weightNumber: weightNumber,
      heightNumber: heightNumber,
  }

  console.log(data)
  return

};
