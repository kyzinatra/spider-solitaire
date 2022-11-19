import { AuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../../firebase.config";

export function useSingInWithProvider(Provider: AuthProvider) {
  const router = useRouter();

  return () => {
    signInWithPopup(auth, Provider).then(res => {
      router.push("/");
    }, console.log); // TODO Errors
  };
}
