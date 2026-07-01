/**
 * Brevo Integration Service
 * 
 * ⚠️ SECURITY WARNING: 
 * This code currently runs in the browser/client-side.
 * Calling Brevo directly from the frontend exposes your VITE_BREVO_API_KEY to the public.
 * 
 * FOR PRODUCTION:
 * You must move this logic to a Serverless Function (Netlify/Vercel/Firebase)
 * so that the API key remains securely on the server.
 */

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_LIST_ID = import.meta.env.VITE_BREVO_EBOOK_LIST_ID || 2; // Default fallback list ID

export interface SubscribeResult {
  success: boolean;
  message?: string;
}

export const subscribeToEbook = async (name: string, email: string): Promise<SubscribeResult> => {
  if (!BREVO_API_KEY) {
    console.warn("Brevo API Key is missing. Simulating successful subscription for development.");
    return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1500));
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name,
        },
        listIds: [Number(BREVO_LIST_ID)],
        updateEnabled: true // If they are already in the DB, just update them and add to list
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      
      // Handle "contact already exists" if updateEnabled didn't catch it
      if (errorData.code === 'duplicate_parameter') {
        return { success: true, message: 'You are already subscribed!' };
      }
      
      return { success: false, message: 'Ocorreu um erro ao subscrever. Tente novamente.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error calling Brevo API:', error);
    return { success: false, message: 'Erro de rede. Verifique a sua ligação.' };
  }
};
