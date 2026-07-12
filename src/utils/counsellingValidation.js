export const validateCounsellingForm = (formData) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim() === "") {
    errors.fullName = "Name is required";
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = "Name must be at least 3 characters";
  }

  const phoneRegex = /^[+]?[0-9]{7,15}$/;
  if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s+/g, ""))) {
    errors.phoneNumber = "Please enter a valid phone number";
  }

  if (formData.email && formData.email.trim() !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }

  if (!formData.goals || formData.goals.trim() === "") {
    errors.goals = "Please share your background or goals";
  } else if (formData.goals.trim().length < 10) {
    errors.goals = "Please provide a bit more details (at least 10 characters)";
  }

  return errors;
};
