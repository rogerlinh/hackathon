let search = document.querySelector(".search");
let p_search = document.querySelector("#search");
//MENU
function showSearch() {
  search.style.display = "block";
  p_search.style.color = "#2d87f3";
}
function closeSearch() {
  search.style.display = "none";
  p_search.style.color = "initial";
}

//STYLE IMAGE
let form = document.getElementById("input1");
let a = document.getElementById("male-img");
let b = document.getElementById("female-img");
a.onclick = function () {
  a.style.border = "1px solid blue";
  b.style.border = "none";
};
b.onclick = function () {
  b.style.border = "1px solid blue";
  a.style.border = "none";
};

//CACULATE
let underWeight_male_image = document.getElementById("underweight-male-image");
let healthy_male_image = document.getElementById("healthy-male-image");
let overWeight_male_image = document.getElementById("overweight-male-image");
let obeseType1_male_image = document.getElementById("obesetype1-male-image");
let obeseType2_male_image = document.getElementById("obesetype2-male-image");
let underWeight_text = document.getElementById("underweight-text");
let healthy_text = document.getElementById("healthy-text");
let overWeight_text = document.getElementById("overweight-text");
let obeseType1_text = document.getElementById("obesetype1-text");
let obeseType2_text = document.getElementById("obesetype2-text");
let display_text = document.getElementsByClassName("display_text");
let container_text = document.getElementById("container_text");

form.onsubmit = (e) => {
  e.preventDefault();
  var getGender = document.querySelectorAll("input[type='radio']:checked");
  if (getGender[0]?.id != undefined) {
    console.dir(getGender[0]?.id);
  } else {
    alert("Bạn chưa chọn giới tính");
  }

  var ageNumber = form.ageNumber.value;
  var weightNumber = form.weightNumber.value;
  var heightNumber = form.heightNumber.value;
  var bmiNumber = (
    (weightNumber * 10000) /
    (heightNumber * heightNumber)
  ).toFixed(1);
  var bmi = Number(bmiNumber);
  console.log(ageNumber);
  console.log(weightNumber);
  console.log(heightNumber);
  console.log(bmi);

  // var data ={
  //     getGender : getGender,
  //     ageNumber:ageNumber,
  //     weightNumber: weightNumber,
  //     heightNumber: heightNumber,
  //     bmi: bmi,
  // }
  // console.log(data)

  container_text.style.display = "block";
document.getElementById("showBMI").innerText = bmi;
  if (bmi < 18.5) {
    underWeight_male_image.src = "./underweight-male-blue.png";
    healthy_male_image.src = "./healthy-male-gray.png";
    overWeight_male_image.src = "./overweight-male-gray.png";
    obeseType1_male_image.src = "./obese-type1-male-gray.png";
    obeseType2_male_image.src = "./obese-type2-male-gray.png";
    underWeight_text.style.fontWeight = "bold";
    healthy_text.style.display = "block";
    overWeight_text.style.display = "block";
    obeseType1_text.style.display = "block";
    obeseType2_text.style.display = "block";
    underWeight_text.style.display = "block";
    healthy_text.style.fontWeight = "200";
    overWeight_text.style.fontWeight = "200";
    obeseType1_text.style.fontWeight = "200";
    obeseType2_text.style.fontWeight = "200";
  } else if (bmi < 24.9) {
    underWeight_male_image.src = "./underweight-male-gray.png";
    healthy_male_image.src = "./healthy-male-blue.png";
    overWeight_male_image.src = "./overweight-male-gray.png";
    obeseType1_male_image.src = "./obese-type1-male-gray.png";
    obeseType2_male_image.src = "./obese-type2-male-gray.png";
    healthy_text.style.fontWeight = "bold";
    healthy_text.style.display = "block";
    overWeight_text.style.display = "block";
    obeseType1_text.style.display = "block";
    obeseType2_text.style.display = "block";
    underWeight_text.style.display = "block";
    underWeight_text.style.fontWeight = "200";
    overWeight_text.style.fontWeight = "200";
    obeseType1_text.style.fontWeight = "200";
    obeseType2_text.style.fontWeight = "200";
  } else if (bmi < 29.9) {
    underWeight_male_image.src = "./underweight-male-gray.png";
    healthy_male_image.src = "./healthy-male-gray.png";
    overWeight_male_image.src = "./overweight-male-blue.png";
    obeseType1_male_image.src = "./obese-type1-male-gray.png";
    obeseType2_male_image.src = "./obese-type2-male-gray.png";
    overWeight_text.style.fontWeight = "bold";
    healthy_text.style.display = "block";
    overWeight_text.style.display = "block";
    obeseType1_text.style.display = "block";
    obeseType2_text.style.display = "block";
    underWeight_text.style.display = "block";
    underWeight_text.style.fontWeight = "200";
    healthy_text.style.fontWeight = "200";
    obeseType1_text.style.fontWeight = "200";
    obeseType2_text.style.fontWeight = "200";
  } else if (bmi < 34.9) {
    underWeight_male_image.src = "./underweight-male-gray.png";
    healthy_male_image.src = "./healthy-male-gray.png";
    overWeight_male_image.src = "./overweight-male-gray.png";
    obeseType1_male_image.src = "./obese-type1-male-blue.png";
    obeseType2_male_image.src = "./obese-type2-male-gray.png";
    obeseType1_text.style.fontWeight = "bold";
    healthy_text.style.display = "block";
    overWeight_text.style.display = "block";
    obeseType1_text.style.display = "block";
    obeseType2_text.style.display = "block";
    underWeight_text.style.display = "block";

    underWeight_text.style.fontWeight = "200";
    overWeight_text.style.fontWeight = "200";
    healthy_text.style.fontWeight = "200";
    obeseType2_text.style.fontWeight = "200";
  } else {
    underWeight_male_image.src = "./underweight-male-gray.png";
    healthy_male_image.src = "./healthy-male-gray.png";
    overWeight_male_image.src = "./overweight-male-gray.png";
    obeseType1_male_image.src = "./obese-type1-male-gray.png";
    obeseType2_male_image.src = "./obese-type2-male-blue.png";
    obeseType2_text.fontWeight = "bold";
    healthy_text.style.display = "block";
    overWeight_text.style.display = "block";
    obeseType1_text.style.display = "block";
    obeseType2_text.style.display = "block";
    underWeight_text.style.display = "block";

    underWeight_text.style.fontWeight = "200";
    overWeight_text.style.fontWeight = "200";
    obeseType1_text.style.fontWeight = "200";
    healthy_text.style.fontWeight = "200";
  }
  return;
};
