import { MoneriumClient } from "@monerium/sdk";

export async function getMoneriumAccess() {
  "use server";
  const monerium = new MoneriumClient({
    environment: "sandbox",
    clientId: "f2ce18f8-2406-11ef-8cfc-fe34ee86fd51",
    clientSecret:
      "e9e3469c0cd641d17e19bce83dcd8340950fc7caef23730eddc4b5d7c37d7fc1",
  });

  console.log("lol", await monerium.getAccess());
  console.log("lol ctx", await monerium.getAuthContext());
  const { access_token, refresh_token } = monerium.bearerProfile;
  return access_token;
}
//   const accessToken = getMoneriumAccess();
//   console.log("accessToken", accessToken);
