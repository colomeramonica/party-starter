import React, { useEffect, useState } from "react"
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { ReactComponent as CheckIcon } from '../assets/icons/check.svg'
import { Button } from "@mui/material";
export const ActionButton: React.FC<{ type: string }> = ({ type }) => {
  const [buttonIcon, setButtonIcon] = useState(<CheckIcon />);

  useEffect(() => {
    setButtonStyle();
  });

  const setButtonStyle = () => {
    if (type === 'decline') {
      return setButtonIcon(<CloseIcon style={{ width: '20px', height: '30px', fill: '#FFFFFF' }} />)
    }

    return setButtonIcon(<CheckIcon style={{ width: '20px', height: '30px', fill: '#FFFFFF' }} />)
  }

  return (
    <Button className={`action_button--${type}`} variant="contained" >
      {buttonIcon}
    </Button >
  )
}

export default ActionButton