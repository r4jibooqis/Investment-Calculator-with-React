export default function Input({ label, type, investValue, handleInput }) {

    function handleInputValue(event) {
        const value = event.target.value;
        handleInput(type, value);
    }

    return (
        <div>
            <label >{label}</label>
            <input type="number" onChange={(event) => handleInputValue(event)} value={investValue} />
        </div>
    )
}