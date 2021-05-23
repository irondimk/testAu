

let passwordInput = ""

let Validators = {

    passwordSave: (value) => {
        if(value){
            passwordInput = value;
        }
    },

    retryPasswordCheck: (value) =>{
        if(value){
            if(value == passwordInput){
                return undefined
            }
            else{
                return "Пароли не совпадают"
            }
        }
    },

    emptyValid: (text) => (value) => {
        if(value){
            return undefined
        }
        else{
            return text;
        }
    },
    citiesValid: (text) => (value) => {
        if(value == undefined){
            return text;
        }
        else{
            return undefined
        }
    },

    minCount: (size) => (value) => {
        if(value){
            if(value.length >= size){
                return undefined
            }
            else{
                return `Используйте не менее ${size} символов`; 
            }
        }
    },
    emailCheck: (value) => {
        if(value){
            if(value.includes(".", value.indexOf("@"))){
                return undefined
            }
            else{
                return "Неверный E-mail"
            }
        }
    },
    // cityValid: (value) => {
    //     if(value){
    //         return undefined
    //     }
    //     else{

    //     }
    // },
    composeValidators: (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)
}


export default Validators;

