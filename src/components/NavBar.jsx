import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <header>
      <nav>
        <div className='navitems'>
          <a href='/'>Home</a>
          <a href='/contactus'>Contact Us</a>
          <a href='/about'>About</a>
        </div>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="sign-in-btn">
              Login
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton 
          userProfileMode="modal"
          />
        </SignedIn>
      </nav>
    </header>
  );
}

export default NavBar;
