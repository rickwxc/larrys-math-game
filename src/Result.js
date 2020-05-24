import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import EqualSign from '@material-ui/icons/DragHandle';
import MinusIcon from '@material-ui/icons/Remove';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
  import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';


import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import { blue, brown, green,  red, purple } from '@material-ui/core/colors';
import colors from './colors';
const { cyan, orange, amber , pink } = colors

const useStyles = makeStyles({
  input: {
    width:120,
    fontSize:22,
  },

  pink: {
    backgroundColor: pink,
    fontSize:22,
  },
  amber: {
    backgroundColor: amber,
    fontSize:22,
  },
  orange: {
    backgroundColor: orange,
    fontSize:22,
  },


  cyan: {
    backgroundColor: cyan,
    fontSize:22,
  },
  red: {
    backgroundColor: red[200],
    fontSize:22,
  },
  purple: {
    backgroundColor: purple[200],
    fontSize:22,
  },
  blue: {
    backgroundColor: blue[200],
    fontSize:22,
  },
  brown: {
    backgroundColor: brown[200],
    fontSize:22,
  },
  green: {
    backgroundColor: green[200],
    fontSize:22,
  },
});
function Result(props) {
  const classes = useStyles();
  let colors = ['green',
    'amber',
    'pink',
    'red', 'purple', 'brown', 'blue', 'cyan', 'orange' ]
  let c = Math.floor(Math.random() * Math.floor(100)) % colors.length;
  let color = colors[c]

  let {n1, n2, n3, showResult, hideInput, autoFocus, result, add, currentIdx, setCurrentIdx} = props


  return <Card >
    <CardContent >
      <Comp
  showResult={showResult}
  autoFocus={autoFocus}
  hideInput={hideInput}
  currentIdx={currentIdx} setCurrentIdx={setCurrentIdx}
  v={n1} color={color}  result={result} />

      <IconButton  component="span">
      {add == '1'? <AddIcon />:<MinusIcon />}
      </IconButton>

      <Comp
  autoFocus={autoFocus}
  hideInput={hideInput}
  showResult={showResult}
  currentIdx={currentIdx} setCurrentIdx={setCurrentIdx}
  v={n2} color={color}  result={result}  />

      <IconButton >
        <EqualSign />
      </IconButton>

      <Comp

  showResult={showResult}
  hideInput={hideInput}
  autoFocus={autoFocus}
  currentIdx={currentIdx} setCurrentIdx={setCurrentIdx}
  v={n3} color={color}  result={result} />

    </CardContent>
    </Card>
}

function Comp(props){
  let {v, result, color, currentIdx, setCurrentIdx,
showResult,
hideInput,
    autoFocus} = props
  const classes = useStyles();
  const [ activity, setActivity] = useState('')
  if (v){
    return <Button

      className={classes[color]}
    variant="contained">{v}</Button>
  }

  if (showResult){
    return <Button
      className={classes[color]}
    variant="contained">{result}</Button>
  }
  if (hideInput){
    return <Button
      className={classes[color]}
    variant="contained">?</Button>
  }


  const onTextFieldChange = (e) => {
    if (e.target && parseInt(e.target.value ) == parseInt(result)  ) {
      setActivity(true)
      setCurrentIdx(parseInt(currentIdx) + 1)
    }else{
      setActivity(false)
    }
  }


  return <OutlinedInput
  autoFocus={autoFocus}
  className={classes['input']}
  onChange={onTextFieldChange}
  variant="outlined"
  endAdornment={
    <InputAdornment position="end">
    <IconButton>
    {activity === true ? <CheckIcon style={{ color: green[500] }}  /> : ''}
    {activity === false ? <Clear style={{ color: red[500] }}/>:""}
    </IconButton>
    </InputAdornment>
  }
    />

}

export default Result;
