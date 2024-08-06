import { useState } from 'react'

import './App.css'
import BalanceDisplay from './components/UsersBalance.jsx'
import DepositWithdraw from './components/DepWithdButton.jsx'

function App() {
  //creating an object called labes to assign accurate lables to my buttons
  const label = {
    deposit: "Deposit",
    withdraw: "Withdraw"
  }
  //Creating a state variable to track the users balance as the
  //data changes over time
  const [balance, setBalance] = useState(0)

  //creating another user state to track what the user is inputting in the input field
  const [userInput, setUserInput] = useState(1)

/**
 * a functrion to change the users balance by adding whatever the user has entered in the input field
 * to the balance vairable which will tell react that the state needs to be changed
 */
function DepositFunds(){
  //explicit cast - convert from string to integer
  let inputAsNumber = parseInt(userInput)
  /*
    an error handeling technieque to catch if the user has inputted something other than a number
    and a custom error message will display as an alert
  */
  try{
    if(isNaN(userInput)){
      //this is where an error could occur if the user enters something other than a number
      throw new Error(`${userInput} is not a valid number`)
    }
    setBalance(balance + inputAsNumber)
  }
  catch(error){
    alert(error.message)
  }
}
/**
 * creating a seperate function so when the user withdraws an amount, the balance will decrease
 * depending on the amount that has been entered
 */
function WithdrawFunds(){
  try{
    if(isNaN(userInput)){
      throw new Error(`${userInput} is not a valid number`)
    }
    else if(userInput > balance){
      throw new Error(`Insufficent funds to withdraw ${userInput}`)
    }
    else if(balance == 0){
      throw new Error(`Insufficent funds to withdraw ${userInput}`)
    }
  }catch(error){
    alert(error.message)
  }
  if(balance >= userInput ){
    setBalance(balance - userInput)
  }
}
/**
 * creating a function that will help track what the user is changing on the screen,
 * when the user is inputting a value to the input field
 * @param {event} event 
 */
function handelUserInput(event){
  setUserInput(event.target.value)
}

  return (
    //rendering my fucntional components below and passing properites to the child components
    <>
      <div id='main-layout'>
        <div id='bank-container'>
          <h1>BANK APP</h1>
          <BalanceDisplay ToDisplay={balance}/>
          <input onChange={handelUserInput} type="text" />
          <DepositWithdraw label={label} action={{DepositFunds, WithdrawFunds}}/>
        </div>
      </div>
    </>
  )
}

export default App
