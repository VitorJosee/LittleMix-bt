import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
//Update the below URL with the appropriate version if necessary.
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";


// INSERT YOUR FIREBASE CONFIG OBJECT HERE
const firebaseConfig = {
  apiKey: "AIzaSyD6exsn8CElRmZJmAdXo4aiYY9ZebAXAHs",
  authDomain: "littlemixmobile.firebaseapp.com",
  databaseURL: "https://littlemixmobile-default-rtdb.firebaseio.com",
  projectId: "littlemixmobile",
  storageBucket: "littlemixmobile.appspot.com",
  messagingSenderId: "341192228717",
  appId: "1:341192228717:web:4272eaa5e89d0a54022464"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("Password");
const signUpButton = document.querySelector("#login_button");




const userSignUp = async() => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Sua conta foi Criada com Sucesso!!!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    })
}


signUpButton.addEventListener('click', userSignUp);






<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6exsn8CElRmZJmAdXo4aiYY9ZebAXAHs",
    authDomain: "littlemixmobile.firebaseapp.com",
    databaseURL: "https://littlemixmobile-default-rtdb.firebaseio.com",
    projectId: "littlemixmobile",
    storageBucket: "littlemixmobile.appspot.com",
    messagingSenderId: "341192228717",
    appId: "1:341192228717:web:4272eaa5e89d0a54022464"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailUser = document.querySelector("#email");
const passwordUser = document.querySelector("#password");
const cadastraButton = document.querySelector("#cadastrar");

const cadastro = async() => {
    const cadasEmail = emailUser.value;
    const cadasPassword = passwordUser.value;
    createUserWithEmailAndPassword(auth,cadasEmail,cadasPassword).then((credenUser) =>{
        const user = credenUser.user;
        console.log(user)
        alert("Você foi cadastrado com Sucesso!");
    }).catch((error) =>{
        const erroCod = error.code;
        const erroMessage = error.message;
        alert("Deu erro no cadastro!!");
    })
}

cadastraButton.addEventListener('click', cadastro);

</script>