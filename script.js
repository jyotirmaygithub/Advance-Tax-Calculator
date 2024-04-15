let icon = document.getElementById("lets");
console.log(icon);

function calculateTax() {
  // Clear previous error indicators
  clearErrorIcons();

  // Fetch input values
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const deductions = document.getElementById("deductions").value;
  const extraIncome = document.getElementById("extraIncome").value;

  // Check for empty fields
  if (!age) {
    displayErrorIcon("ageErrorIcon");
    return;
  }
  if (!income) {
    displayErrorIcon("incomeErrorIcon");
    return;
  }
  if (!deductions) {
    displayErrorIcon("deductionsErrorIcon");
    return;
  }
  if (!extraIncome) {
    displayErrorIcon("extraIncomeErrorIcon");
    return;
  }

  // Perform tax calculation
  console.log("Calculating tax...", income,extraIncome,deductions);
  let tax = 0;
  const taxableIncome =
    parseInt(income) + parseInt(extraIncome) - parseInt(deductions);
  console.log("values = ", taxableIncome);
  console.log("age =", age);

  if (taxableIncome > 800000) {
    if (age === "<40") {
      tax = 0.3 * (taxableIncome - 800000);
    } else if (age === ">=40&<60") {
      tax = 0.4 * (taxableIncome - 800000);
    } else if (age === ">=60") {
      tax = 0.1 * (taxableIncome - 800000);
    }
  }

  // Display result in modal
  document.getElementById("resultModalBody").innerHTML = `Tax: ${tax} Lakhs`;
  $("#resultModal").modal("show");
}

function displayErrorIcon(elementId) {
  document.getElementById(elementId).style.display = "inline-block";
}

function clearErrorIcons() {
  const errorIcons = document.querySelectorAll(".error-icon");
  errorIcons.forEach((icon) => {
    icon.style.display = "none";
  });
}

