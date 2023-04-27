import { useState } from "react";

export default function ValidCard() {

    const [isValid, setisValid] = useState(false)
    const [cardNumber, setCardNumber] = useState()

    const handleCardInfo = (event) => {
        event.preventDefault()
        let userCardNumber = cardNumber
        let sum = 0
        console.log(event)
        console.log(cardNumber)
        // if (userCardNumber !== 'null' || userCardNumber !== undefined) {
        //     let digits = userCardNumber.split('').map(Number)

        //     for (let i = digits.length - 2; i >= 0; i -= 2) { // doubles each second number and adds it to the sum
        //         let doubledNumber = digits[i] * 2

        //         sum += doubledNumber
        //     }

        //     for (let i = digits.length - 1; i >= 0; i -= 2) {// gets the rest of the digits and adds them to the sum
        //         sum += digits[i]
        //     }
        //     console.log(sum % 10)
        //     if (sum % 10 === 0) {
        //         setisValid(true)
        //     } else {
        //         setisValid(false)
        //     }
        // } //checks if the creditcard is valid, and if it is, isValid = true
        const luhnCheck = num => {
            let arr = (num + '')
                .split('')
                .reverse()
                .map(x => parseInt(x));
            let lastDigit = arr.splice(0, 1)[0];
            let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
            sum += lastDigit;
            if (sum % 10 === 0) {
                setisValid(true)
            } else {
                setisValid(false)
            }
        };
        luhnCheck(userCardNumber)
    }
    console.log(cardNumber)
    console.log(isValid)
    let message = '';
    if (isValid === true) {
        message = <p>Credit card number is valid!</p>;
    } else {
        message = <p>Credit card number is invalid</p>;
    }


    return (
        <form onSubmit={handleCardInfo}>
            <label>
                Enter your card number:
                <input type="text" name="cardNumber" placeholder="123456789012" onChange={(e) => { setCardNumber(e.target.value) }} />
                <input type='submit' />
            </label>
            {message}
        </form>
    )
}