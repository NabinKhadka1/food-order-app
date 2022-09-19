import React, { useRef } from "react";
import Input from "../../UI/Input/Input";
import "./MealsListForm.css";
// import Button from '../../UI/Button/Button';
const MealsListForm = (props) => {
  const inputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const inputValue = +inputRef.current.value;
    if(inputValue === 0 || inputValue < 1 || inputValue > 5) {
      console.log('Enter the value between 1 to 5')
      return;
    }
    props.onAddToCartHandler(inputRef.current.value);
  }
  return (
    <form className="meals__quantity" onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          id: props.itemId,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
        }}
      />
      {/* <Button type='submit' input={{id:'a1',label:'+Add'}} /> */}
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealsListForm;
