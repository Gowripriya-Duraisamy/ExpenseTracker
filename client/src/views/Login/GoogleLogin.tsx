import {
  GoogleOAuthProvider,
  GoogleLogin as GoogleSignIn,
  CredentialResponse,
} from "@react-oauth/google";

import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();

  const handleLoginSuccess = (credentialData: CredentialResponse) => {
    googleSignIn(credentialData);
  };

  const handleLoginError = () => {
    console.log("Login failed");
  };
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
    >
      <GoogleSignIn
        width="250"
        text="signin_with"
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
