import React, { useState } from 'react';
import { Box, Button, Input, Heading } from '@chakra-ui/react';
import {auth} from './firebase'; // Import the firebase module
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
const Sms = () => {
  const [phoneNumbers, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(false);
  const [code, setCode] = useState('');

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      console.log("auth request is working")
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("this is callback")
            onSignup();
          },
          "expired-callback": () => {},
        }
        
      );
    }
    console.log("captchvar")
  }

  function onSignup(el) {
   
  
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91" + phoneNumbers;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVerificationId(true)
        console.log("this is sent the otp pls check")
      })
      .catch((error) => {
        console.log(error);
      });
  }


  function onOTPVerify() {
    
    window.confirmationResult
      .confirm(code)
      .then(async (res) => {
        console.log(res);
        console.log("your otp is varify")
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        OTP Verification
      </Heading>
      <div id="recaptcha-container"></div>
      <Input
        placeholder="Enter your phone number"
        value={phoneNumbers}
        onChange={(e) => setPhoneNumber(e.target.value)}
        mb={2}
      />
      <Button colorScheme="blue" onClick={onSignup}>
        Send OTP
      </Button>
      {verificationId && (
        <Box mt={4}>
          <Input
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button colorScheme="green" onClick={onOTPVerify}>
            Verify OTP
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Sms;
