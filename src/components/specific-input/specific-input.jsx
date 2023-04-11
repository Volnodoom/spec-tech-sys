import { forwardRef, useState } from "react";
import { Input } from "../styled-elements/input";
import { maskMobile, unmaskMobile } from "../../utils/utils";
import { ErrorFormMessage, MASK_MOBILE, TrueLogIn } from "../../utils/constants";

const SpecificInput = forwardRef((props, ref) => {
  const [isSkipMasking, setIsSkipMasking] = useState(false);

  const handleLoginClick = (evt) => {
    const value = evt.target.value;

    if(!value) {
      evt.target.value = '+7 ';
    }
  };

  const handleLoginChange = (evt) => {
    const value = evt.target.value;

    if(unmaskMobile(value) !== TrueLogIn.Login) {
      evt.target.setCustomValidity(ErrorFormMessage.WrongLogin);
    }  else {
      evt.target.setCustomValidity('');
    }

    if(isSkipMasking) {
      return;
    }

    const updatedInput = maskMobile(unmaskMobile(value));
    evt.target.value = updatedInput;
  }

  const handleKeyDownPress = (evt) => {
    const isBackspaceKey = evt.keyCode === 8;
    if(isBackspaceKey) {
      setIsSkipMasking(true);
    } else {
      setIsSkipMasking(false);
    }
  }

  return(
    <>
      <Input
        onClick={handleLoginClick}
        onChange={handleLoginChange}
        onKeyDown={handleKeyDownPress}
        placeholder={MASK_MOBILE}
        ref={ref}
      />
    </>
  );
});

export default SpecificInput;
