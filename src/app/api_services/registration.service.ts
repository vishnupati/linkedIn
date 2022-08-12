import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, observable, of, Subject, switchAll,switchMap } from 'rxjs';
import firebase from 'firebase/compat/app'



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
   userUID : any;
  //  public authenticationStatus : Observable<any>;
   public authenticationStatusSubject = new Subject<Observable<any>>();
   public user$ : Observable<any>
   

  constructor(
    private firestore : AngularFirestore,
    private fireauth : AngularFireAuth,
  
  ) { 
    this.user$ = this.fireauth.authState.pipe(
      switchMap(user => {
        console.log('autht',user)
        if (user) {
          switch (firebase.auth().currentUser?.displayName) {
            case 'USER' :
              // this.tableName = 'Stockists';

              return this.firestore.collection('Users').doc(user.uid).valueChanges().pipe(map(res => {
                
                return res;
              }));

            default:
              // this.tableName = 'Users';
              return this.firestore.doc(`${'Default'}/${user.uid}`).valueChanges();
          }

        } else {
          return of(null);
        }
      })
    );
    
      // this.getCurrentUser();
  }

  public createAccount (user:any) : Observable <any> {
    const obj = new Observable((obs)=>{
      this.fireauth.createUserWithEmailAndPassword(user.email,user.password).then(res => {
       
        this.userUID = res.user?.uid
        if (this.userUID) {
          user.userType = 'USER'
          user.docId = this.userUID
          this.firestore.collection('Users').doc(this.userUID).set(user).then(res => {
            console.log('store',res)
          //   this.fireauth.currentUser.updateProfile({
          //     displayName: '',
          //     photoURL: '',
          //     email: ''
          //   })
          //   .then((r) => {
          //     console.log(r)
          //   })
          //   .catch((e) => {
          //   console.log(e)
          // })
          var user = firebase.auth().currentUser;
          // console.log('user',user)
          if (user) {

            user.updateProfile({  displayName:'USER' }).then();
            // this.firestore.collection('Users').add().then();
          }
          });
        };
        obs.next({
          status : 200,
          message : 'Account successfully created',
          data : res
        })
        // console.log('registratiuon',data)
      }).catch((error) => {
            obs.next({
              error : error.message ? error.message : 'this some issue please check',
              code : error.code ? error.code : 400
            });
      });
    }); 
      return obj;
  }

  public login (user:any) : Observable <any> {
    const obj = new Observable((obs) => {
      this.fireauth.signInWithEmailAndPassword(user.email,user.password).then(res => {
        const returnUser =   firebase.auth().currentUser;
        // console.log('user$',this.user$)
        // this.user$.subscribe(user => {
        //   console.log('^^^^^^^^^',user)
        // })
          // console.log('usecurrent _________',returnUser?.displayName)
          obs.next({
            status : 200,
            message : 'successfull',
            data : res
          })
         }).catch((error) => [
          obs.next({
            message : error.message ? error.message : 'some issues please check',
            code : error.code ? error.code : 400
          })
         ])
    })
    return obj
  }
  public checkEmail (user: any ) : Observable<any> {
    const obj = new Observable((obs) => {
      this.fireauth.fetchSignInMethodsForEmail(user.email).then(res =>{
        obs.next({
          status : 200,
          message : res 
        })
      },error => {
        obs.next({
          error : error.message ,
          status : 500
        })
      })
    })
    return obj;
  } 
  getCurrentUser() {
      // const getcurrentUser = firebase.auth().currentUser;
      // console.log('getcurrentuser',getcurrentUser);
         this.fireauth.onAuthStateChanged(returnUser => {

           console.log('currentUser*********',returnUser)
           if (returnUser) {

            this.getUserData(returnUser).subscribe(res => {
              console.log('res', res);
            }, error => {
              console.error('error', error);
            })
             
        } else {
             
           }
         
         })
    }


    public getUserData(returnUser:any): Observable<any> {
      return this.firestore.collection("Users").doc(returnUser.uid).snapshotChanges()
      .pipe(
        map((actions: any) => {
            const data = actions.payload.data();
            const docId = actions.payload.id;
            return { docId, ...data };
        })
      );
    }
  
}
