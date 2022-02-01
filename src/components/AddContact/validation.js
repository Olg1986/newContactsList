const REGUIRED_FIELD = 'Обязательно для заполнения';
export const nameValidation = {
    required: REGUIRED_FIELD,
    validate: (value) => {
        if (value.match(/[a-zA-Z]/)){
            return 'Имя может содержать только русские буквы'
        }
        return true;
    } 
}

export const phoneValidation = {
    required: REGUIRED_FIELD,
    validate: (value) => {
        if (value.match(/[]/)){
            return 'Пароль не может содержать русские буквы'
        }
        if (value.length > 10) {
            return 'Пароль не может содержать больше 10 символов'
        }
        return true;
    } 
}