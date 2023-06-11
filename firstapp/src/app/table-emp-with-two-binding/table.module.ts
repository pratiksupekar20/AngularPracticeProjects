export interface User{

  userName:string;
  userEmail:string;
  userLocation:string;
  address:Address1;
  message:string;

}

export interface Address1{
  add1:string;
  add2:string;
  pin:number;
}