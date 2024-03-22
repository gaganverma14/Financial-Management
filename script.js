function calculateBudget() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText);
    const remainingBudget = monthlyIncome - totalExpenses;
    const budgetResult = document.getElementById('budgetResult');
    budgetResult.innerText = `Remaining Budget: $${remainingBudget}`;
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
    amountCell.innerText = `$${expenseAmount.toFixed(2)}`;

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
  // Add event listeners to input fields
  document.getElementById('goalAmount').addEventListener('keypress', function(event) {
      // Check if Enter key was pressed
      if (event.key === 'Enter') {
          // Prevent default behavior (form submission)
          event.preventDefault();
          // Call addGoal function to save the goal amount
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
  newGoal.innerText = `${goalDescription}: $${goalAmount.toFixed(2)}`;
  goalList.appendChild(newGoal);

  // Clear input fields
  document.getElementById('goalDescription').value = '';
  document.getElementById('goalAmount').value = '';

  // Check if the required amount for the goal is less than the goal amount
  const totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText);
  const remainingBudget = parseFloat(document.getElementById('budgetResult').innerText.split('$')[1]);
  if (goalAmount < totalExpenses) {
      alert("Total expenses is greater than Goal amount!");
  } else if (goalAmount < remainingBudget) {
      alert("Total expenses is greater than Goal amount!");
  }
}

function calculateBudget() {
  const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
  const totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText);
  const remainingBudget = monthlyIncome - totalExpenses;
  const budgetResult = document.getElementById('budgetResult');
  budgetResult.innerText = `Remaining Budget: $${remainingBudget.toFixed(2)}`;

  // Check if the remaining budget is near the goal amount
  const goalAmounts = document.querySelectorAll('#goalList li');
  goalAmounts.forEach(goal => {
      const goalAmount = parseFloat(goal.innerText.split(': $')[1]);
      if (remainingBudget < goalAmount) {
          alert("Remaining budget is less than goal amount!");
      }
  });
}
