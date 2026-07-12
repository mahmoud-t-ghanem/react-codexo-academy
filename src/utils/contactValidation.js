export const validateContactForm = (formData) => {
  let tempErrors = {};

  if (!formData.name.trim()) {
    tempErrors.name = "Full Name is required";
  }

  if (!formData.email.trim()) {
    tempErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    tempErrors.email = "Invalid email address";
  }

  if (!formData.phone.trim()) {
    tempErrors.phone = "Phone number is required";
  } else if (!/^\d{10,}$/.test(formData.phone.replace(/[\s-+]/g, ""))) {
    tempErrors.phone = "Phone must be at least 10 digits";
  }

  if (!formData.message.trim()) {
    tempErrors.message = "Message cannot be empty";
  }

  return tempErrors;
};
