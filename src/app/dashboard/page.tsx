'use client';

import React from 'react';
import FocusDashboard from '../../../components/FocusDashboard/FocusDashboard';
import Gamification from '../../../components/Gamification/Gamification';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard  = () => {

    const { data: session, status } = useSession();
    const router = useRouter();
  
    if (status === 'loading') {
      return <p>Loading...</p>;
    }
  
    if (!session) {
      router.push('/login'); 
      return null;
    }

    return (
        <div>
            <h1>Welcome, {session.user?.name}</h1>
            <FocusDashboard/>
            <Gamification/>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    );
};

export default Dashboard ;