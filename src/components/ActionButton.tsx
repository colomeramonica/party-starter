import { Check, Close } from "@mui/icons-material"
import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"

export const ActionButton: React.FC<{ type: string }> = ({ type }) => {
  const [buttonIcon, setButtonIcon] = useState(<Check />);

  useEffect(() => {
    setButtonStyle();
  });

  const setButtonStyle = () => {
    if (type === 'decline') {
      return setButtonIcon(<Close />)
    }

    return setButtonIcon(<Check />)
  }

  return (
    <Button className={`action_button-${type}`} variant="contained" >
      {buttonIcon}
    </Button >
  )
}

export default ActionButton