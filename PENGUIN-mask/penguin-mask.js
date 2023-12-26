export const startPhoneMask = () => {
    const inputs = document.querySelectorAll('.js_phone');
  
    inputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        input.classList.remove('validated');
        const target = event.target;
        let value = target.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
  
        if (value.length > 10) {
          // Ограничиваем длину номера телефона 10 символами
          value = value.slice(0, 11);
          input.classList.add('validated');
        }
  
        let phone = '';
  
        if (value.length > 0) {
          if (value[0] == 7) {
            value = value.slice(1);
          }
  
          const number1 = value[0] ? value[0] : '_';
          const number2 = value[1] ? value[1] : '_';
          const number3 = value[2] ? value[2] : '_';
  
          const number4 = value[3] ? value[3] : '_';
          const number5 = value[4] ? value[4] : '_';
          const number6 = value[5] ? value[5] : '_';
  
          const number7 = value[6] ? value[6] : '_';
          const number8 = value[7] ? value[7] : '_';
  
          const number9 = value[8] ? value[8] : '_';
          const number10 = value[9] ? value[9] : '_';
          phone = `+7 (${number1}${number2}${number3}) ${number4}${number5}${number6}-${number7}${number8}-${number9}${number10}`;
        }
  
        function moveCursorToTheEnd() {
          let numberCount = input.value.replace(/\D/g, '').length;
          let plusNumber = 1; // Один потому что вы должны учесть + в начале
          if (numberCount >= 2) {
            plusNumber += 2;
          }
          if (numberCount >= 4) {
            plusNumber += 2;
          }
  
          if (numberCount >= 7) {
            plusNumber++;
          }
          if (numberCount >= 9) {
            plusNumber++;
          }
  
          numberCount += plusNumber;
  
          if (
            target.value.charAt(numberCount - 1) == ' ' ||
            target.value.charAt(numberCount - 1) == '-' ||
            target.value.charAt(numberCount - 1) == '('
          ) {
            numberCount--;
            if (target.value.charAt(numberCount - 1) == ' ') {
              numberCount--;
            }
          }
  
          if (target.value.charAt(numberCount - 1) == ')') {
            numberCount--;
          }
  
          input.setSelectionRange(numberCount, numberCount);
        }
  
        target.value = phone;
        moveCursorToTheEnd();
      });
    });
  };