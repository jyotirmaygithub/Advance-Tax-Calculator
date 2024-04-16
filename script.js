function toCheck(value, id, hiddenId) {
  const inputField = document.getElementById(id);
  const checkMark = document.getElementById(hiddenId);
  if (isNaN(value)) {
    inputField.classList.add("is-invalid");
    checkMark.style.display = "flex";
  } else {
    inputField.classList.remove("is-invalid");
    checkMark.style.display = "none";
  }
}

function calculateTax() {
  // Fetch input values
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const deductions = document.getElementById("deductions").value;
  const extraIncome = document.getElementById("extraIncome").value;
  if (!age) {
    alert("Please enter your age.");
    return;
  }
  if (!income) {
    alert("Please enter your annual income.");
    return;
  }
  if (!deductions) {
    alert("Please enter your total deductions");
    return;
  }
  if (!extraIncome) {
    alert("Please enter your extra income");
    return;
  }

  // Perform tax calculation
  let afterTax = 0;
  const taxableIncome =
    parseFloat(income) + parseFloat(extraIncome) - parseFloat(deductions);

  if (taxableIncome > 800000) {
    if (age === "<40") {
      afterTax = 0.3 * taxableIncome;
    } else if (age === ">=40&<60") {
      afterTax = 0.4 * taxableIncome;
    } else if (age === ">=60") {
      afterTax = 0.1 * taxableIncome;
    }
  }
  document.getElementById("resultModalBody").innerHTML = `${(
    taxableIncome - afterTax
  ).toLocaleString()} rupee after tax deductions`;
  $("#resultModal").modal("show");
}
