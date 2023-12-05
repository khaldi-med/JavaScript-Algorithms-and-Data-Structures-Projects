function telephoneCheck(str) {
  const phoneFormat = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  let phoneNumber = phoneFormat.test(str);
  
  return phoneNumber;
}
