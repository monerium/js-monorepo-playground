import { useContext } from "react";
import { MoneriumContext, MoneriumContextValue } from "./context";

export function useMonerium(): MoneriumContextValue {
  const context = useContext(MoneriumContext);
  if (context === null) {
    throw new Error("useMonerium must be used within a MoneriumProvider");
  }
  return context;
}
