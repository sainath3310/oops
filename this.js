class account{
    
min_bal=500;
acc_bal=0
open_account(amount){
    this.min_bal=this.min_bal+amount
console.log("opened succesully")
}
deposit_account(amount){
    this.acc_bal=this.acc_bal+amount
    console.log("deposted successfully")

}

} 
let a1=new account()
a1.open_account(500)
a1.deposit_account(6000)
console.log(a1)
