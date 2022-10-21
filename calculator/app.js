
    /**
     *  https://jaypedia.tistory.com/8
     * 
     *계산기
     *      숫자 (onclick)
     *   
     *   해당 숫자의 해당되는 버튼을 누르면 숫자 입력받기
     *   숫자 1 과 2 를 받기 
     *   두 개의 값을 저장하기 
     *   숫자값을 연산자에게 넘겨줌
     *   숫자를 계속 입력할 경우 계속 옆으로 숫자값을 붙혀줌
     * 
     *      연산자 ()
     * 
     *  입력을 저장
     *  숫자없이 입력시 alert
     *  값을 result에 넘겨줌
     *  버튼 클릭시 각 기호가 알맞는 기능을 하게 함
     * 
     *      초기화()
     *  CE 현재 계산에서 초기화
     *  C  모든 계산 다 지움
     *  <- 잘못 썼을 때 한칸씩 지우기
     *  입력을 아웃풋에 넘겨줌
     * 
     *      아웃풋()
     *  
     *  결과값이 표시됨
     *  누른 숫자가 화면에 표시되어야함
     *  <-  하나씩 뒤에서 사라짐
     *  CE  현재계산만 0으로 초기화 (기존 계산은 사라지지않음)
     *  C   모든 계산을 초기화 후  > 0 (기존 계산은 사라짐)  
     *  숫자 와 결과값 , 초기화 입력값을 받음
     * 
     *      결과()
     *  
     *  연산자와 숫자를 받음
     *  받은 숫자와 연산자로 계산함
     *  = 를 눌러야 나옴
     *  
     *  
    
       
     */
   

   
    const numberButtons = document.querySelectorAll('.num');
    const operationButtons = document.querySelectorAll('.operator');
    const equalButton = document.querySelector('.enter');
    const deleteButton = document.querySelector('.delete');
    const allClearButton = document.querySelector('.all_reset');
    const currentOutputScreen =  document.querySelector('.current');
    const resultOutputScreen = document.querySelector('.result');

    class calculator{
        constructor(currentOutputScreen,resultOutputScreen){
            this.currentOutputScreen = currentOutputScreen;
            this.resultOutputScreen = resultOutputScreen;
            this.clear();
        }

        clear(){
            this.currentNum = '';
            this.previousNum = '';
            this.operation = undefined;
        }

        delete(){
            this.currentNum = this.currentNum.toString().slice(0,1);
        }

        appendNumber(number){
            if(number === '.' && this.currentNum.includes('.')) return;
            this.currentNum = this.currentNum.toString()+number.toString();
        }
        chooseOperator(operation){
            if(this.currentNum === '')return;
            if (this.previousNum !== ''){
                this.compute();
            }
            this.operation = operation;
            this.previousNum = this.currentNum;
            this.currentNum = '';
        }
        compute(){
            let computation;
            const preview = parseFloat(this.previousNum);
            const current = parseFloat(this.currentNum);
            if(isNaN(preview)|| isNaN(current)) return;
            switch(this.operation){
                case '+':
                    computation = preview + current;
                    break;
                case '-':
                    computation = preview - current;
                    break;
                case 'x':
                    computation = preview * current;
                    break;
                case '+':
                    computation = preview + current;
                    break;
                case '/':
                    computation = preview / current;
                    break;
                default:
                    return;
            }
            this.currentNum = computation;
            this.operation = undefined;
            this.previousNum = '';
        }

        updateDisplay(){
            if(this.operation != null){
                this.currentOutputScreen.innerText = 
                `${this.operation}`;
            }else{
                this.resultOutputScreen.innerText = '';
            }
        }

        
    }

    const $calculator = new calculator(
        resultOutputScreen,currentOutputScreen
        );

    numberButtons.forEach(div =>{
        numberButtons.addEventListener('click',()=>{
            $calculator.appendNumber(.innerText);
            $calculator.updateDisplay();

        });
    });

    operationButtons.forEach(operationButtons =>{
        .addEventListener('click',()=>{
        $calculator.chooseOperator(div.innerText);
        $calculator.updateDisplay();
    });
}); 


    equalButton.addEventListener('click',()=>{
    $calculator.compute();
    $calculator.updateDisplay();
});



    allClearButton.addEventListener('click',()=>{
    $calculator.clear();
    $calculator.updateDisplay();
});


    deleteButton.addEventListener('click',()=>{
    $calculator.delete();
    $calculator.updateDisplay();
});


