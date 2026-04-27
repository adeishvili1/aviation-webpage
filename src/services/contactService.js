export function buildContactPayload(form) {
  return {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    phone: form.phone.trim(),
    subject: form.subject.trim(),
    message: form.message.trim(),
  }
}

export function buildContactPreviewText(payload) {
  return [
    'საიტის ფორმიდან ახალი შეტყობინება',
    '',
    `სახელი: ${payload.firstName}`,
    `გვარი: ${payload.lastName}`,
    `ტელეფონი: ${payload.phone}`,
    `თემა: ${payload.subject}`,
    '',
    'ტექსტი:',
    payload.message,
  ].join('\n')
}

export async function submitContactForm(payload, { previewOnly = true } = {}) {
  if (previewOnly) {
    return {
      mode: 'preview',
      payload,
      emailText: buildContactPreviewText(payload),
    }
  }

  const apiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/contact/send'

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.detail || 'ფორმა ვერ გაიგზავნა')
  }

  return {
    mode: 'live',
    payload,
    response: data,
  }
}
