// In a real application, you would interface with the Mailchimp API 
// usually via a proxy backend endpoint to protect your API key, 
// or use the JSONP method for client-side only implementation.

export interface SubscribeResponse {
  success: boolean;
  message: string;
}

export const subscribeToNewsletter = async (email: string): Promise<SubscribeResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Simulate success
  return {
    success: true,
    message: "You're on the list! Watch your inbox for vibes.",
  };
};