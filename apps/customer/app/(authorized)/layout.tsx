"use client";
import { useMonerium } from "@monerium/sdk-react-provider";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "../../components/LoadingScreen";

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthorized, loadingAuth } = useMonerium();
  const router = useRouter();

  if (loadingAuth) {
    return <LoadingScreen />;
  }

  if (!loadingAuth && !isAuthorized) {
    router.push("/");
  }

  if (isAuthorized) {
    return (
      <Box sx={{ p: 2 }}>
        <h1>layout</h1>
        {children}
      </Box>
    );
  }
  return null;
}
