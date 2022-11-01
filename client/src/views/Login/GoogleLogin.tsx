import {
  GoogleOAuthProvider,
  GoogleLogin as GoogleSignIn,
  CredentialResponse,
} from "@react-oauth/google";

import { googleSignIn } from "../../slices/login/action";
import { useDispatch } from "../../store";

const GoogleLogin = () => {
  const dispatch = useDispatch();

  const handleLoginSuccess = (credentialData: CredentialResponse) => {
    console.log("check")
    dispatch(googleSignIn(credentialData));
  };

  const handleLoginError = () => {
    console.log("Login failed");
  };
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}>
      <GoogleSignIn
        text="signin_with"
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
