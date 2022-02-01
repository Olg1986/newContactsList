const REGUIRED_FIELD = 'Обязательно для заполнения';
export const loginValidation = {
    required: REGUIRED_FIELD,
    validate: (value) => {
        if (value.match(/[а-яА-Я]/)){
            return 'Логин не может содержать русские буквы'
        }
        return true;
    } 
}

export const passwordValidation = {
    required: REGUIRED_FIELD,
    validate: (value) => {
        if (value.match(/[а-яА-Я]/)){
            return 'Пароль не может содержать русские буквы'
        }
        if (value.length > 10) {
            return 'Пароль не может содержать больше 10 символов'
        }
        return true;
    } 
}