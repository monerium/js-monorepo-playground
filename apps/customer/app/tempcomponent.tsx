"use client";
import { useEffect } from "react";
import { useMonerium } from "@monerium/sdk-react-provider";

export const TempComponent = () => {
  const { authorize, isAuthorized, profile, balances, tokens, orders } =
    useMonerium();
  useEffect(() => {
    console.log("im client");
  }, []);
  return (
    <div>
      {!isAuthorized && <button onClick={authorize}>Authorize</button>}
      <h1>Hello {profile ? profile?.email : "CodeSandbox"}</h1>
    </div>
  );
};
