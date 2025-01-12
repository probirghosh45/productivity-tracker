'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard'); // Redirect to dashboard if already logged in
    }
  }, [session, router]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('credentials', { callbackUrl: '/dashboard' })}>
        Login with Credentials
      </button>
    </div>
  );
};

export default LoginPage;
