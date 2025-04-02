import React, { useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";

interface FacebookLoginButtonProps {
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: 'YOUR_FACEBOOK_APP_ID', // Thay thế bằng Facebook App ID của bạn
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load Facebook SDK script
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    return () => {
      // Cleanup
      const script = document.getElementById('facebook-jssdk');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login((response: any) => {
      if (response.authResponse) {
        onSuccess(response);
      } else {
        onFailure('User cancelled login or did not fully authorize.');
      }
    }, {
      scope: 'email,public_profile'
    });
  };

  return (
    <button
      onClick={handleFacebookLogin}
      className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors"
    >
      <FaFacebook className="w-5 h-5" />
      <span>Continue with Facebook</span>
    </button>
  );
};

export default FacebookLoginButton; 