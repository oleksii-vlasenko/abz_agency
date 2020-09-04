const emailRegexp = new RegExp("^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$");
const phoneRegexp = new RegExp("^[\\+]{0,1}380([0-9]{9})$");

const isValidName = name => name.length >= 2 && name.length <= 60;

const isValidEmail = email =>
    email.length >= 2 && email.length <= 100 && emailRegexp.test(email);

const isValidPhone = phone => phoneRegexp.test(phone);

const isValidPosition = position =>
    +position >= 1;

const isValidPhoto = file =>
    file.type === "image/jpeg" && file.size <= 5 * 1024 * 1024;

const isValid = (form) => {
    const result = isValidName(form.get("name"))
        && isValidEmail(form.get("email"))
        && isValidPhone(form.get("phone"))
        && isValidPosition(form.get("position_id"))
        && isValidPhoto(form.get("photo"));
    return [result, {
        name: isValidName(form.get("name")),
        email: isValidEmail(form.get("email")),
        phone: isValidPhone(form.get("phone")),
        position: isValidPosition(form.get("position_id")),
        photo: isValidPhoto(form.get("photo"))
    }];
};

export default isValid;
