// src/utils/api.ts
interface Link {
    type: string;
    url: string;
  }
  
  export const generateQRCode = async (links: Link[]): Promise<string> => {
    // In a real application, you would send a request to your backend here
    // For this example, we'll just create a JSON string
    const data = {
      version: 1,
      links: links
    };
    return JSON.stringify(data);
  };
  
  export const getQRCode = async (id: string): Promise<{ value: string; links: Link[] }> => {
    // In a real application, you would fetch the QR code data from your backend here
    // For this example, we'll just create dummy data
    const links: Link[] = [
      { type: 'url', url: 'https://example.com' },
      { type: 'pdf', url: 'https://example.com/document.pdf' },
      { type: 'mp3', url: 'https://example.com/audio.mp3' },
    ];
    const value = JSON.stringify({version: 1, links: links});
    return { value, links };
  };