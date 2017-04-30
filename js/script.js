function BankAccount(name,initDeposit,newDeposit,withdraw){
  this.custName=name;
  this.custDeposit=initDeposit;
  this.custNewDeposit=newDeposit;
  this.withdraw=withdraw;
}
BankAccount.prototype.deposit= function(){
  return this.custDeposit +
}

// User interface code

$(document).ready(function(){
  $("form#customer").submit(function(event){
    event.preventDefault();

    var InputName = $("input#name").val();
    var InputDeposit = parseInt($("input#initDeposit").val());
    var InputnewDeposit = parseInt($("input#deposit").val());
    var InputWithdraw = parseInt($("input#withdraw").val());

    var newCustomer = new BankAccount(InputName, InputDeposit);

    $("span#currentBalance").text(InputDeposit);

  });
});
