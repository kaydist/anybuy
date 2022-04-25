// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc}  from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updatePassword, FacebookAuthProvider, signOut } from "firebase/auth";

//redux states
import { useRouter } from 'next/router'
import { OpenUp } from "../animations/popup";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBClTnGhYxH5Vd3FN6Uqb6orTT4OMTpvgU",
  authDomain: "anybuy-e9d6b.firebaseapp.com",
  projectId: "anybuy-e9d6b",
  storageBucket: "anybuy-e9d6b.appspot.com",
  messagingSenderId: "43127150720",
  appId: "1:43127150720:web:345b17bb5f5fb9aabd6e65",
  measurementId: "G-4Y8ZL2HYP3"
};

// Initialize Firebase
export const initializeFirebaseApp = initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth();

//database
export const db = getFirestore(initializeFirebaseApp)



//Adding to storage
export const AddToStore = async(user) =>{
  const data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      shippingInfo: null
    }
  try {
    const docRef = await setDoc(doc(db, "users", `${user.uid}`), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const AddToShippingInfo = async(values, userId) =>{
  const data = {
    shippingInfo : {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      address: values.address
    }
  }
  try {
    const docRef = await setDoc(doc(db, "users", `${userId}`), data, { merge: true });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


//Updating Profile

export const AddToProfileInfo = async(values, userId) =>{
  const data = {
    displayName: values.displayName,
    email: values.email,
    phoneNumber: values.phoneNumber,
    photoURL: values.photoURL,
  }
  try {
    updateProfile(auth.currentUser, data).then(() => {
      // Profile updated!      
      setDoc(doc(db, "users", `${userId}`), data, { merge: true });
    })
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//update cart
export const UpdateCart= async(newState, userId) =>{
  const data = {
    cart : newState
  }
  try {
    const docRef = await setDoc(doc(db, "users", `${userId}`), data, { merge: true });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}






//Reset Password
export const resetPassword=(newPassword)=>{
  updatePassword(auth.currentUser, newPassword).then(() => {
    // Update successful.
  }).catch((error) => {
    // An error ocurred
    // ...
  });
}


//Create user with email and password
export const createUserWithEmail = async(email, password)=>{

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Adding to store
    const user = userCredential.user;
    AddToStore(user)
    // ...

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    OpenUp()
    // ..
    
  });
}



//Create user with email and password
export const signInWithEmail = async(email, password)=>{

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Adding to store
    const user = userCredential.user;
    // ...
    const Router = useRouter()
    Router.back()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    OpenUp()
  });
}

// Create User with Google
export const CreateWithGoogle =()=>{
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user; 
    // ...
    AddToStore(user)

    //logging into state

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
}


// Sivn User in with Google
export const SignInWithGoogle =()=>{
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user; 
    // ...
    //logging into state

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
}

//Create Account with Facebook
export const CreateWithFacebook =()=>{
  const provider = new FacebookAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ... Add to Database
    AddToStore(user)

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(errorMessage)
    // ...
  });
}


//Sign Account with Facebook
export const SignInWithFacebook =()=>{
  const provider = new FacebookAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(errorMessage)
    // ...
  });
}

// sign out 
export const signingOut =async()=>{
  await signOut(auth)
  .then(()=>{
      location.reload()
  })
  .then(function() {
    localStorage.removeItem('persist:AnybuyCart')
    sessionStorage.removeItem('search')
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}
