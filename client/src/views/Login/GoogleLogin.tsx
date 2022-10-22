import {
  GoogleOAuthProvider,
  GoogleLogin as GoogleSignIn,
  CredentialResponse,
} from "@react-oauth/google";

const GoogleLogin = () => {
  const handleLoginSuccess = (credentialData: CredentialResponse) => {
    console.log("Login success", credentialData);
  };

  const handleLoginError = () => {
    console.log("Login failed");
  };
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID || ""}>
      <GoogleSignIn size="medium" text="signin_with" onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
