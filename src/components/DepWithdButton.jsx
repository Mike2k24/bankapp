/**
 * the prop named 'label' is a prop that will pass the object to this conponent and using the dot notation to target which
 * key and value I want to be passed to my button
 * the 'action' is a function that is being passed to this component and using the dot notation to target which function that was
 * created in the parent component to a particular button
 * @param label
 * @param action
 * @returns 
 */
export default function DepositWithdraw({label, action}){

    return(
        <>
        <button onClick={action.WithdrawFunds}>{label.withdraw}</button>
        <button onClick={action.DepositFunds}>{label.deposit}</button>
        </>
    )
}