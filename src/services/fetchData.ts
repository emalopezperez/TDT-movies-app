import { Fetch } from "../models/types";

export const FetchData = {
  customFetch: async ({ type, url, success, error, always, body }: Fetch) => {
    const options: RequestInit = {
      method: type,
      headers: {
        'Content-Type': 'application/json', 
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      success?.(responseData);
    } catch (err) {
      error && console.error("Network error or other error:", err);

      error?.("Error ");
    } finally {
      if (always) {
        always();
      }
    }
  },
};
