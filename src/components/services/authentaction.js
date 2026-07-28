import { app } from "../../../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

// Register a user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user);
    alert("User created successfully...");
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
  }
};
// login a user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return user.reloadUserInfo.email;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
  }
};
// Sign out user
export const logoutUser = async () => {
    try {
        const isSignOut = await signOut(auth)
        alert("Signed out successfully..")
    }
    catch (err) {
        console.log(err)
    }
}
