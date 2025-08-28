# Contact Form Setup Instructions

To make your contact form functional, follow these steps:

## Option 1: Formspree (Recommended - Free)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like: `xpzgkqyw`)
5. Replace `YOUR_FORM_ID` in `src/sections/Contact.jsx` with your actual form ID

Example:
```javascript
const response = await fetch('https://formspree.io/f/xpzgkqyw', {
```

## Option 2: Direct Email (Simple)

Replace the handleSubmit function with:

```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  if (!validateForm()) return
  
  const subject = `Portfolio Contact: ${formData.name}`
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
  
  window.location.href = `mailto:bhupendrajdh31@gmail.com?subject=${subject}&body=${body}`
}
```

## Option 3: Netlify Forms (If deploying to Netlify)

1. Add `netlify` attribute to the form tag:
```html
<form onSubmit={handleSubmit} className="space-y-6" netlify>
```

2. Add hidden input:
```html
<input type="hidden" name="form-name" value="contact" />
```

The form will automatically work when deployed to Netlify.

## Current Status
- Form validates input correctly
- Shows loading state while submitting
- Displays success/error messages
- Resets form after successful submission

Choose the option that works best for your deployment setup!