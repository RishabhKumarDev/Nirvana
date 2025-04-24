// utils/firebaseErrorHandler.js

import {
  FaEnvelopeOpenText,
  FaBan,
  FaUserSlash,
  FaKey,
  FaClock,
  FaWifi,
  FaBug,
} from "react-icons/fa";

import {
  FaUserPlus,
  
  FaLock,
  FaRedo,
} from "react-icons/fa";

const authErrorMessages = {
  "auth/invalid-email": {
    message: "Hmm... that email doesn’t look right.",
    icon: <FaEnvelopeOpenText style={{ color: "red" }} />,
  },
  "auth/user-disabled": {
    message:
      "This account’s taking a nap. Contact support if that’s not right!",
    icon: <FaBan style={{ color: "red" }} />,
  },
  "auth/user-not-found": {
    message: "We couldn’t find an account with that email.",
    icon: <FaUserSlash style={{ color: "red" }} />,
  },
  "auth/wrong-password": {
    message: "That password doesn’t match. Give it another go!",
    icon: <FaKey style={{ color: "red" }} />,
  },
  "auth/too-many-requests": {
    message: "Whoa there! Too many tries. Please wait a bit.",
    icon: <FaClock style={{ color: "red" }} />,
  },
  "auth/network-request-failed": {
    message: "No internet? Check your connection and try again.",
    icon: <FaWifi style={{ color: "red" }} />,
  },
  "auth/internal-error": {
    message: "Something went wonky on our end. Try again in a sec.",
    icon: <FaBug style={{ color: "red" }} />,
  },
  "auth/invalid-credential": {
    message: "Invalid email or password. Just sign in again!",
    icon: <FaKey style={{ color: "red" }} />,
  },
};

const signUpErrorMessages = {
  "auth/email-already-in-use": {
    message:
      "That email’s already linked to an account. Try logging in instead.",
    icon: <FaUserPlus />,
  },
  "auth/invalid-email": {
    message: "That doesn’t look like a valid email address.",
    icon: <FaEnvelopeOpenText />,
  },
  "auth/operation-not-allowed": {
    message: "Sign-ups are currently turned off. Please try again later.",
    icon: <FaBan />,
  },
  "auth/weak-password": {
    message: "That password’s a bit too weak. Try adding numbers or symbols.",
    icon: <FaLock />,
  },
  "auth/email-already-exists": {
    message: "This email already exists. Want to reset your password?",
    icon: <FaRedo />,
  },
};

export const getErrorToast = (error, context) => {
  let errorEntry;

  switch (context) {
    case "auth":
      errorEntry = authErrorMessages[error?.code];
      break;
    case "signup-auth":
      errorEntry = signUpErrorMessages[error?.code];
      break;
    default:
      return {
        message: "Something went wrong.",
        icon: <FaBug />,
      };
  }

  return (
    errorEntry || {
      message: "Something went wrong.",
      icon: <FaBug />,
    }
  );
};
