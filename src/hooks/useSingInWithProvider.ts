import { AuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../../firebase.config";
import { useToast } from "./useToast";

export function useSingInWithProvider(Provider: AuthProvider) {
  const router = useRouter();
  const addToast = useToast();

  return () => {
    signInWithPopup(auth, Provider).then(
      res => {
        router.push("/");
      },
      e => addToast(e.code, "error")
    );
  };
}
