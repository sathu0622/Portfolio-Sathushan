const CONTACT_API =
  import.meta.env.VITE_CONTACT_API_URL?.trim() || "/api/contact";

export async function submitContactForm({ name, email, message, subject = "" }) {
  const response = await fetch(CONTACT_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message, subject }),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "Unable to send your message. Please try again.");
  }

  return data;
}
