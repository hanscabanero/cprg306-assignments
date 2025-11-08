'use client';
import { useUserAuth } from './_utils/auth_context';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut  } = useUserAuth();

  if (!user) {
    return (
      <main>
        <h1>Assignment 9 - Welcome to the Shopping List App</h1>
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Assignment 9 - Welcome to the Shopping List App</h1>
      <button onClick={firebaseSignOut }>Sign Out</button>
      <h1>Welcome, {user.displayName || 'User'}, Your email is {user.email} and here is your image!</h1>

      {user.photoURL && (
        <div>
          <img src={user.photoURL} alt="Profile" />
        </div>
      )}

    </main>
  );
}
