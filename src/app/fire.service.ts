import { Injectable } from '@angular/core';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}from '@angular/fire/auth'
import {Firestore,collection,doc,addDoc,setDoc} from '@angular/fire/firestore'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private fires:Firestore,private router:Router) { }


  //registration
  registration(userDetails:any)
  {
      createUserWithEmailAndPassword(this.auth,userDetails.email,userDetails.password).then(res=>{
        // const uid=res.user.uid;
        // const usercollection = doc(this.fires,'users',uid)
        // let user={
        //   "name":userDetails.username,
        //   "email":userDetails.email
        // }
        // setDoc(usercollection,user).then((res) =>{
          // console.log(res);
          alert('Registration Successfully')
      
          this.router.navigate(['/dashboard']);
        }).catch((err) =>{
         console.log(err);
 
        })
        // console.log(res.user.uid,res.user.email);
  //     }).catch(err=>{
  //       console.log(err);
  //     })
   }
  loginfn(userDetails:any)
  {
    signInWithEmailAndPassword(this.auth,userDetails.email,userDetails.password).then(res=>{
      alert('signed in succesfully')
 
      this.router.navigate(['/dashboard']);
      
    }).catch((err) =>
    {
      alert(err)
    })
        
  }
  //signout method
  signout1()
  {
    signOut(this.auth).then(res=>{
      alert('signed out successfully')

      this.router.navigate(['/login']);
    }).catch((err)=>
    {
      alert(err)
    })
  }

}
