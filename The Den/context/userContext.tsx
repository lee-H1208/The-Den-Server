import React, { ReactNode } from "react";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

interface Props {
  children?: ReactNode
}

export const UserContext = createContext({});

export function UserContextProvider({ children, ...props }: Props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}
