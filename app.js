const show_Pw_Btn =document.querySelector('#show-pasword');
const show_Pw_Icon =document.querySelector('img');
const pw_Input =document.querySelector('#password');

show_Pw_Btn.addEventListener('click', () => {
    pw_Input.type = pw_Input.type === 'password' ? 'text' : 'password'

    show_Pw_Icon.src = show_Pw_Icon.src.includes('off')
        ? 'visibility_FILL0_wght400_GRAD0_opsz48.svg'
        : 'visibility_off_FILL0_wght400_GRAD0_opsz48.svg'
});

