import { create } from "zustand";
import {
  registerUser,
  loginUser,
  checkAccount,
  logoutUser,
} from "../API/user.api.js";

const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  isRegistering: false,
  isLoggingIn: false,
  isCheckingAuth: false,
  isLoggingOut: false,

  //  REGISTER
  register: async (formdata) => {
    try {
      set({ isRegistering: true });

      const response = await registerUser(formdata);

      set({
        user: response,
        isLoggedIn: true,
      });

      return response;
    } catch (error) {
      return {
        error: error?.response?.data || error || "Network error",
      };
    } finally {
      set({ isRegistering: false });
    }
  },

  //  LOGIN
  login: async (credentials) => {
    try {
      set({ isLoggingIn: true });

      const response = await loginUser(credentials);

      set({
        user: response,
        isLoggedIn: true,
      });

      return response;
    } catch (error) {
      return {
        error: error?.response?.data || error || "Network error",
      };
    } finally {
      set({ isLoggingIn: false });
    }
  },

  //  CHECK AUTH
  checkAuth: async () => {
    try {
      set({ isCheckingAuth: true });

      const response = await checkAccount();

      set({
        user: response,
        isLoggedIn: true,
      });

      return response;
    } catch (error) {
      set({
        user: null,
        isLoggedIn: false,
      });

      return {
        error: error?.response?.data || "Not authenticated",
      };
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  //  LOGOUT (API + state reset)
  logout: async () => {
    try {
      set({ isLoggingOut: true });

      await logoutUser(); 

      set({
        user: null,
        isLoggedIn: false,
      });
    } catch (error) {
      console.log("Logout error:", error);
    } finally {
      set({ isLoggingOut: false });
    }
  },
}));

export default useUserStore;