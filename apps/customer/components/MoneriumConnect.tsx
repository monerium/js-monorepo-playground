"use client";
import React from "react";
import { useMonerium } from "@monerium/sdk-react-provider";

export const MoneriumConnect = () => {
  const { authorize, isAuthorized, profile, balances, tokens, orders } =
    useMonerium();
  //   useEffect(() => {
  //     console.log("im client");
  //   }, []);
  console.log("profile", profile);
  return (
    <div>
      {!isAuthorized && <button onClick={authorize}>Authorize</button>}
      <h1>Hello {profile ? profile?.email : "CodeSandbox"}</h1>
    </div>
  );
};
