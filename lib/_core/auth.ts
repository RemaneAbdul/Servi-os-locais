import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { SESSION_TOKEN_KEY, USER_INFO_KEY } from "@/constants/oauth";

export type User = {
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  loginMethod: string | null;
  userType: "client" | "professional";
  role: "user" | "admin";
  lastSignedIn: Date;
};

export async function getSessionToken(): Promise<string | null> {
  try {
    if (Platform.OS === "web") return null;
    return await SecureStore.getItemAsync(SESSION_TOKEN_KEY);
  } catch (error) {
    console.error("[Auth] Failed to get session token:", error);
    return null;
  }
}

export async function setSessionToken(token: string): Promise<void> {
  if (Platform.OS === "web") return;
  await SecureStore.setItemAsync(SESSION_TOKEN_KEY, token);
}

export async function removeSessionToken(): Promise<void> {
  try {
    if (Platform.OS !== "web") await SecureStore.deleteItemAsync(SESSION_TOKEN_KEY);
  } catch (error) {
    console.error("[Auth] Failed to remove session token:", error);
  }
}

export async function getUserInfo(): Promise<User | null> {
  try {
    const info = Platform.OS === "web"
      ? window.localStorage.getItem(USER_INFO_KEY)
      : await SecureStore.getItemAsync(USER_INFO_KEY);
    if (!info) return null;
    const user = JSON.parse(info);
    return {
      ...user,
      userType: user.userType === "professional" ? "professional" : "client",
      role: user.role === "admin" ? "admin" : "user",
      lastSignedIn: new Date(user.lastSignedIn),
    };
  } catch (error) {
    console.error("[Auth] Failed to get user info:", error);
    return null;
  }
}

export async function setUserInfo(user: User): Promise<void> {
  const serialized = JSON.stringify(user);
  if (Platform.OS === "web") {
    window.localStorage.setItem(USER_INFO_KEY, serialized);
  } else {
    await SecureStore.setItemAsync(USER_INFO_KEY, serialized);
  }
}

export async function clearUserInfo(): Promise<void> {
  try {
    if (Platform.OS === "web") window.localStorage.removeItem(USER_INFO_KEY);
    else await SecureStore.deleteItemAsync(USER_INFO_KEY);
  } catch (error) {
    console.error("[Auth] Failed to clear user info:", error);
  }
}
