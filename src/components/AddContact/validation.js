const REGUIRED_FIELD = 'Обязательно для заполнения';
export const nameValidation = {
    required: REGUIRED_FIELD,
    validate: (value) => {
        if (value.match(/[0-9]/)){
            return 'Имя не может содержать цифры'
        }
        return true;
    } 
}

export const phoneValidation = {
    required: REGUIRED_FIELD,
    validate: (value) => {
        if (value.match(/[а-яА-Я]/)){
            return 'Телефон не может содержать русские буквы'
        }
        if (value.length > 12) {
            return 'Телефон не может содержать больше 12 символов'
        }
        return true;
    } 
}