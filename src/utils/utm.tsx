// utils/utm.ts
export function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    referral_url: window.location.href,
  };
}

// When sending booking request, include UTM data:
export async function submitBooking(bookingData: any) {
  const utmData = getUTMParams();
  
  const response = await fetch('/api/booking.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...bookingData,
      ...utmData,
    }),
  });
  
  return response.json();
}