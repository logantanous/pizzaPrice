//business logic
var allAccounts = [];
var accountExists = false;
var index = 0;

function BankAccount(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.balance = initialDeposit;
}

BankAccount.prototype.currentBalance = function() {
  return $("#current-balance").html(this.initialDeposit);
}
BankAccount.prototype.bankAction = function(inputtedDepositAmount, inputtedWithdrawalAmount) {
  if (isNaN(inputtedDepositAmount)) {
    inputtedDepositAmount = 0;
  }
  if (isNaN(inputtedWithdrawalAmount)) {
    inputtedWithdrawalAmount = 0;
  }

  this.balance = parseInt(this.balance) + inputtedDepositAmount;
  this.balance = parseInt(this.balance) - inputtedWithdrawalAmount;
  return $("#current-balance").html(this.balance);

}

// BankAccount.prototype.deposit = function(inputtedDepositAmount) {
//   this.balance = parseInt(this.balance) + inputtedDepositAmount;
//   return $("#current-balance").html(this.balance);
// }
//
// BankAccount.prototype.withdraw = function(inputtedWithdrawalAmount) {
//   this.balance = parseInt(this.balance) - inputtedWithdrawalAmount;
//   return $("#current-balance").html(this.balance);
// }

function doesAccountExist(account, name, initialDeposit) {
  var i = 0;
  allAccounts.forEach(function(account) {
    if (account.name === name) {
      accountExists = true;
      index = i
      return(index);
    }
    i++;
  });
  if (!accountExists && !isNaN(initialDeposit)) {
    allAccounts.push(account);
  } else if (!accountExists && isNaN(initialDeposit)) {
    alert("You need to create a new account");
  } else if (accountExists && !isNaN(initialDeposit)) {
    alert("You already have an account. Please make a deposit or withdrawl")
  }
}

function clearFields() {
  $("#initial-deposit").focus(function() {
    $(".bank-action").val("");
  });

  $(".bank-action").focus(function() {
    $("#initial-deposit").val("");
  });

  $(".existing-user").click(function() {
    $(".existing").show();
    $(".initial").hide();
  });

  $(".new-user").click(function() {
    $(".initial").show();
    $(".existing").hide();
  });
}

// user interface logic
$(document).ready(function() {

  clearFields();

  $("#new-account").submit(function(event) {
    $("#current-balance").text("");
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var inputtedDepositAmount = parseInt($("input#deposit-amount").val());
    var inputtedWithdrawalAmount = parseInt($("input#withdrawal-amount").val());
    var inputtedCurrentBalance = parseInt($("input#current-balance").val());
    var newAccount = new BankAccount (inputtedName, inputtedInitialDeposit);

     doesAccountExist(newAccount, inputtedName, inputtedInitialDeposit);

     if (accountExists === true ) {
       allAccounts[index].bankAction(inputtedDepositAmount, inputtedWithdrawalAmount);
     } else {
       newAccount.currentBalance();
     }
     accountExists = false;

    event.preventDefault();
  });


});
