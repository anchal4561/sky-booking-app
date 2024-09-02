import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";


export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
      method:'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get the response text for debugging
      throw new Error(`Token invalid: ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.log('Error validating token:', error);
    throw error; // Re-throw the error after logging it
  }
};

export const signOut=async()=>{
  const response= await fetch(`${API_BASE_URL}/api/auth/logout`,{
    credentials:"include",
    method: "POST"
  });
  console.log(response,"sign out")
  if(!response.ok){
    throw new Error("Error during sign  out");
  }
}


export const addMyHotel=async(hotelFormData:FormData)=>{
  debugger
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`,{
    method:"POST",
    credentials:"include",
    body: hotelFormData,
  })
  console.log(response,hotelFormData,"check ressp")
  if(!response.ok){
    throw new Error("Failed to add Hotel")
  }

  return response.json();
}
//npm i react-query


// //all fetch request
// import axios from "axios";
// import { RegisterFormData } from "./pages/Register";

// const API_BASE_URL=import.meta.env.VITE_API_BASE_URL ||"";
// export const registimport { Response } from 'express';er=async(formData:RegisterFormData)=>{

//    try {
//       const response= await axios.post(`${API_BASE_URL}/api/users/register`,formData)
     
//       console.log("Registration successfull")
//       return response;
//    } catch (error:any) {
//       console.log(error.response.data.message||error.message,"Registeration error")
//       throw (error)
//    }
// }

// //npm i react-query