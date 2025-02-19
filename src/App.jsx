import { Navigate, Outlet } from "react-router-dom";
import { ClerkProvider, useUser } from "@clerk/clerk-react";
import Header from "./components/custom/Header";



export default function App() {

  const {user, isLoaded, isSignedIn}=useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to="/auth/sign-in" />

  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}