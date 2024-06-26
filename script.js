function calculateBudget() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText);
    const remainingBudget = monthlyIncome - totalExpenses;
    const budgetResult = document.getElementById('budgetResult');
    budgetResult.innerText = `Remaining Budget: ₹${remainingBudget}`;
}


function addExpense() {
    const expenseDescription = document.getElementById('expenseDescription').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    // Add expense to table
    const expenseList = document.getElementById('expenseList');
    const newRow = expenseList.insertRow();
    const descriptionCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    descriptionCell.innerText = expenseDescription;
    amountCell.innerText = `₹${expenseAmount.toFixed(2)}`;

    // Update total expenses
    const totalExpensesElement = document.getElementById('totalExpenses');
    const totalExpenses = parseFloat(totalExpensesElement.innerText);
    totalExpensesElement.innerText = (totalExpenses + expenseAmount).toFixed(2);

    // Clear input fields
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseAmount').value = '';

    // Recalculate budget
    calculateBudget();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('goalAmount').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          addGoal();
      }
  });

  document.getElementById('monthlyIncome').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          calculateBudget();
      }
  });

});

function addGoal() {
  const goalDescription = document.getElementById('goalDescription').value;
  const goalAmount = parseFloat(document.getElementById('goalAmount').value);

  // Add goal to list
  const goalList = document.getElementById('goalList');
  const newGoal = document.createElement('li');
  newGoal.innerText = `${goalDescription}: ₹${goalAmount.toFixed(2)}`;
  goalList.appendChild(newGoal);

  // Clear input fields
  document.getElementById('goalDescription').value = '';
  document.getElementById('goalAmount').value = '';

  // Check if the required amount for the goal is less than the goal amount
  const totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText);
  const remainingBudget = parseFloat(document.getElementById('budgetResult').innerText.split('₹')[1]);
}


function calculateBudget() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText);
    const remainingBudget = monthlyIncome - totalExpenses;
    
    // Calculate total goal amount
    let totalGoalAmount = 0;
    const goalAmounts = document.querySelectorAll('#goalList li');
    goalAmounts.forEach(goal => {
        const goalAmount = parseFloat(goal.innerText.split(': ₹')[1]);
        totalGoalAmount += goalAmount;
    });

    const budgetResult = document.getElementById('budgetResult');
    const goalResult = document.getElementById('goalResult');
    budgetResult.innerText = `Remaining Budget: ₹${remainingBudget.toFixed(2)}`;
    goalResult.innerText = `Total Goal Amount: ₹${totalGoalAmount.toFixed(2)}`;
}



// Get the form and submit button
const form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    saveInput();
});

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault();

    saveInput();
});

// Function to save the input
function saveInput() {
    const inputValue = document.getElementById('myInput').value;

    localStorage.setItem('inputValue', inputValue);
}


// Add a keydown event listener to the document
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        saveData();
    }
});

// Function to save the data
function saveData() {
    const descriptionValue = descriptionInput.value;
    const amountValue = amountInput.value;

    if (descriptionValue && amountValue) {
        const newRow = document.createElement('tr');

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = descriptionValue;
        newRow.appendChild(descriptionCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = amountValue;
        newRow.appendChild(amountCell);

        const tableBody = document.getElementById('expenseList');
        tableBody.appendChild(newRow);

        descriptionInput.value = '';
        amountInput.value = '';
    }
}

const budget = document.getElementById('budget');
const budgetAmount = parseFloat(budget.innerText);

if (budgetAmount < 0.5 * parseFloat(document.getElementById('income').innerText)) {
    alert('The budget amount is now below 50%!');
}



