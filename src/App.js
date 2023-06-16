import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [fPercentage, setFPercentage] = useState(0);
  const tip = Math.round(Number(bill) * ((percentage + fPercentage) / 2));

  function handleReset() {
    setBill("");
    setPercentage(0);
    setFPercentage(0);
  }

  return (
    <div>
      <BillInput onChange={setBill} />
      <SelectPercentage percentage={percentage} onChange={setPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={fPercentage} onChange={setFPercentage}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <TotalPayment bill={bill} tip={tip} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ onChange }) {
  return (
    <div>
      <labe>How much was the bill?</labe>
      <input
        onChange={(e) =>
          onChange(() => (+e.target.value < 0 ? 0 : e.target.value))
        }
        type="text"
        placeholder="Bill value"
      />
    </div>
  );
}

function SelectPercentage({ percentage, onChange, children }) {
  return (
    <div>
      <labe>{children}</labe>
      <select
        value={percentage}
        onChange={(e) => onChange(() => +e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.2">Absolutley amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalPayment({ bill, tip, onReset }) {
  return (
    <h3>
      You pay ${Number(bill) + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={() => onReset()}>Reset</button>;
}
