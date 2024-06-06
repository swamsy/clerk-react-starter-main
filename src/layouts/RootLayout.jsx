import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ClerkProvider } from '@clerk/clerk-react';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    const navigate = useNavigate();
    
    return (
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={publishableKey}
        >
            <div>
                <NavBar />
                <div>
                    <Outlet />
                </div>
            </div>
        </ClerkProvider>
    );
};

export default RootLayout;
