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

  contactus1(details: any) {
    const contactsCollection = collection(this.fires, 'contacts');
    addDoc(contactsCollection, details)
      .then(() => {
        // console.log('Contact information added successfully');
         alert('Contact information added successfully');
       
      })
      .catch((error) => {
        // console.error('Error adding Query : ', error);
         alert('Error adding contact information');
       
      });
  }
  

  address(Adddetails:any)
  {
    const addressColllection = collection(this.fires, 'address');
    addDoc(addressColllection,Adddetails).then(() => {
      // console.log('Contact information added successfully');
       alert('address information added successfully');
      
    })
    .catch((error) => {
      // console.error('Error adding Query : ', error);
       alert('Error adding address information');
      
    });

  }

  
  slot(details: any) {
    const contactsCollection = collection(this.fires, 'slot');
    addDoc(contactsCollection, details)
      .then(() => {
        // console.log('Contact information added successfully');
         alert('Booked  successfully');
       
      })
      .catch((error) => {
        // console.error('Error adding Query : ', error);
         alert('Error Occurs');
       
      });
  }
  

  slot1(Adddetails:any)
  {
    const addressColllection = collection(this.fires, 'slot1');
    addDoc(addressColllection,Adddetails).then(() => {
      // console.log('Contact information added successfully');
       alert(' Booked successfully');
      
    })
    .catch((error) => {
      // console.error('Error adding Query : ', error);
       alert('Error adding address information');
      
    });

  }
}
