import * as yup from 'yup';

// Define a reusable validation method for the gender field
// yup.addMethod(yup.string, 'selectNotNull', function (name) {
//     return this.notOneOf([null, '---انتخاب کنید ---'],`انتخاب ${name} اجباری است`)
// });

yup.addMethod(yup.string,'isMatch',function(pattern,message){
    return this.matches(pattern , message)
});

yup.addMethod(yup.string,'isPhoneNumber',function(){
    return this.matches(/[abcdefghijklmnopqrstuvwxyz]+/ , 'فرمت شماره همراه وارد شده صحیح نمی باشد')
});

// Export the customized yup object with the global gender method
export  const validator = yup;