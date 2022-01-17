

//Phone Number========================================

let phoneNumber = "+8801744451541"
let phonePattan = /^(01|8801|\+8801)\d{9}/
let phoneMatch = phoneNumber.match(phonePattan);
let phoneSerch = phoneNumber.search(phonePattan);
let PhoneReplace =phoneNumber.replace(phonePattan, '0571858601');
let PhoneTest = phonePattan.test(phoneNumber);
console.log(`Your Phone NUmber = ${phoneNumber} This is = ${PhoneTest}`);
console.log(phoneMatch,phoneSerch,PhoneReplace,PhoneTest);

//Email ===================================================

let email = "shadman.contact@d-ar.az.com";
let emailPattan = /^[a-z0-9\._]*@[a-z0-9-]*\.[a-z0-9-\.]*$/
let emailMatch = email.match(emailPattan);
let emailSerch = email.search(emailPattan);
let emailReplace =email.replace(emailPattan, 'admin@dot.com');
let emailTest = emailPattan.test(email);
console.log(` Your Email Adress = ${email}  E-mail Valadition ${emailTest} `);
console.log(emailMatch,emailSerch,emailReplace,emailTest);


//Passwoard=-==========================================

let pass ="Kl181718hk";
let passPattan =/^[(A-Z)][(a-z0-9@#$%&\*)]{8,20}$/
let passMatch = pass.match(passPattan);
let passSerch =pass.search(passPattan);
let passReplace =pass.replace(passPattan, 'Afrweer54$');
let passTest = passPattan.test(pass);
console.log(` Your Password is = ${pass}Password Valadition ${passTest} `);
console.log(passMatch,passSerch,passReplace,passTest);

//User Name=-==========================================

let userName = "shadman14-4";
let userNamePattan = /^[a-z0-9\-_]{6,14}$/
let userNameMatch = userName.match(userName);
let userNameSerch = userName.search(userName);
let userNameReplace = userName.replace(userName, "shadman14");
let userNameTest = userNamePattan.test(userName);

console.log(userNameMatch, userNameReplace, userNameTest,userName);



// Zip Code=-==========================================

let zipCode = "3500";
let zipCodePattan = /^\d{4}$/
let zipCodeMatch = zipCode.match(zipCode);
let zipCodeSerch = zipCode.search(zipCode);
let zipCodeReplace = zipCode.replace(zipCode, "3200");
let zipCodeTest = zipCodePattan.test(zipCode);

console.log(zipCodeMatch, zipCodeReplace, zipCodeTest,zipCode);


// HTML Color Code=-==========================================

let colorCode = "#f8f8f8"; 
let colorCodePattan = /^#[a-z0-9]{3,6}$/
let colorCodeMatch = colorCode.match(colorCode);
let colorCodeSerch = colorCode.search(colorCode);
let colorCodeReplace = colorCode.replace(colorCode, "#f9f9f9");
let colorCodeTest = colorCodePattan.test(colorCode);

console.log(colorCodeMatch, colorCodeReplace, colorCodeTest,colorCode);

