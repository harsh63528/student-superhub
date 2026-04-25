 // API/core/apiHandler.js
export const handleRequest = async (promise) => {
  try {
    const res = await promise;
    return res.data;
  } catch (error) {
    throw error?.response?.data || "Network error";
  }
};