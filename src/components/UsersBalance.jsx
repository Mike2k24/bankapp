/**
 * We are passing the property called 'ToDisplay" that is a number type that represents the funds the user has in their account
 * @param {number} ToDisplay
 * @returns 
 */
export default function BalanceDisplay({ToDisplay}){

    return(
        <>
            <h3>Balance: £{ToDisplay}</h3>
        </>
    )
}