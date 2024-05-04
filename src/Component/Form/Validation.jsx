export const Validation = (formData) => {
  const errors = {};
  const emailpatern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const passwordpatern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (formData.name === "") {
    errors.name = "Name required";
  }

  if (formData.email === "") {
    errors.email = "Email required";
  } else if (!emailpatern.test(formData.email)) {
    errors.email = "email is not vaild";
  }

  if (formData.password === "") {
    errors.password = "password required";
  } else if (!passwordpatern.test(formData.password)) {
    errors.password = "Password not valid";
  }
};
