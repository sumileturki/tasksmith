import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSocialAuth = () => {
  const router = useRouter();

  const continueWithGoogle = () => {
    authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
          toast.success("Google login successful");
        },
        onError: () => {
          toast.error("Google login failed");
        },
      }
    );
  };

  const continueWithGitHub = () => {
    authClient.signIn.social(
      {
        provider: "github",
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
          toast.success("GitHub login successful");
        },
        onError: () => {
          toast.error("GitHub login failed");
        },
      }
    );
  };

  return {
    continueWithGoogle,
    continueWithGitHub,
  };
};
