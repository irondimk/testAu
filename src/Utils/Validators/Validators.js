

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
            return "Пароли не совпадают"
        }
    },

    emptyValid: (text) => (value) => {
        if(value){
            return undefined
        }
        return text;
    },
    minCount: (size) => (value) => {
        if(value){
            if(value.length >= size){
                return undefined
            }
            return `Используйте не менее ${size} символов`; 
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

    composeValidators: (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)
}


export default Validators;

