export const validateRegistrationForm = (data) => {
  const errors = {};

  if (!data.fullName || data.fullName.trim() === "") {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 3) {
    errors.fullName = "Name must be at least 3 characters";
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!data.phoneNumber || data.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  } else if (!phoneRegex.test(data.phoneNumber.trim())) {
    errors.phoneNumber = "Please enter a valid 10-digit phone number";
  }

  if (data.email && data.email.trim() !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }

  if (!data.course || data.course.trim() === "") {
    errors.course = "Please select an interested course";
  }

  return errors;
};
