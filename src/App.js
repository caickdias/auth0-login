import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();

  if(isLoading){
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <button
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
      { isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>)
      }

      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  );
}

export default App;
