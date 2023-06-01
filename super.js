class account{
acc_id;
acc_name;
acc_loc;
constructor(id,name,loc){


this.acc_id=id
this.acc_name=name
this.acc_loc=loc
}
}
 class ca extends account{
min_bal=500;
 acc_bal=0;
 constructor(id,name,loc,amount){
super(id,name,loc)
this.acc_bal=amount;
 }
 cal_bal(){
    return this.acc_bal-this.min_bal
 }
 }

 let a1=new ca(101,"rahul","kuppam",50000)
 console.log(a1)
 let bal=a1.cal_bal()
 console.log(bal)