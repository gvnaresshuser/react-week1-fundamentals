export default function JsBasics() {
    const name = "Naresh";
    const age = 22;

    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(n => n % 2 === 0);

    return (
        <div>
            <h2>JavaScript Basics</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>

            <h4>Even Numbers:</h4>
            {evenNumbers.map(num => (
                <span key={num}>{num} </span>
            ))}
        </div>
    );
}