"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth_context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Assignment 9 - Welcome to the Shopping List App
      </h1>

      {!user ? (
        <>
          <button
            onClick={gitHubSignIn}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Sign In with GitHub
          </button>
        </>
      ) : (
        <>
          <button
            onClick={firebaseSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded mb-4"
          >
            Sign Out
          </button>
          
          
          <p className="mb-4">
            Welcome, {user.displayName}, Your email is{" "}
            {user.email}. and here is your image!
          </p>

          {user.photoURL && (
            <img
            src={user.photoURL}
            alt="Profile Photo"
            className="w-80 rounded-lg shadow-lg"
            />
          )}
          <Link href="week-10/shopping-list" className="text-blue-500 hover:text-blue-800 hover:underline"> Continue to Shopping List</Link>
        </>
      )}
    </main>
  );
}

