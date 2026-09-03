import * as Api from "@/lib/_core/api";
import * as Auth from "@/lib/_core/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Platform } from "react-native";

type UseAuthOptions = { autoFetch?: boolean };

function toAuthUser(apiUser: Api.AuthApiUser): Auth.User {
  return {
    id: apiUser.id,
    openId: apiUser.openId,
    name: apiUser.name,
    email: apiUser.email,
    loginMethod: apiUser.loginMethod,
    userType: apiUser.userType === "professional" ? "professional" : "client",
    role: apiUser.role === "admin" ? "admin" : "user",
    lastSignedIn: new Date(apiUser.lastSignedIn),
  };
}

export function useAuth(options?: UseAuthOptions) {
  const { autoFetch = true } = options ?? {};
  const [user, setUser] = useState<Auth.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Always validate the session against the API. On web this uses the
      // httpOnly cookie; on native apiCall attaches the SecureStore Bearer token.
      const apiUser = await Api.getMe();
      if (apiUser) {
        const userInfo = toAuthUser(apiUser);
        setUser(userInfo);
        await Auth.setUserInfo(userInfo);
      } else {
        setUser(null);
        await Auth.clearUserInfo();
      }
    } catch (err) {
      const authError = err instanceof Error ? err : new Error("Falha ao validar a sessão");
      setError(authError);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await Api.logout();
    } catch (err) {
      console.error("[Auth] Logout API call failed:", err);
    } finally {
      await Auth.removeSessionToken();
      await Auth.clearUserInfo();
      setUser(null);
      setError(null);
    }
  }, []);

  const isAuthenticated = useMemo(() => Boolean(user), [user]);

  useEffect(() => {
    if (!autoFetch) {
      setLoading(false);
      return;
    }
    fetchUser();
  }, [autoFetch, fetchUser]);

  return { user, loading, error, isAuthenticated, refresh: fetchUser, logout };
}
