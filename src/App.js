import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';

import Result from './Result';
import Grid from '@material-ui/core/Grid';

import colors from './colors';
const { cyan, orange, amber , pink } = colors
const useStyles = makeStyles({
  orange: {
    backgroundColor:orange
  },
})

  let elements = []
  for(let i =0; i< 4; i++){
      let n1 = 1+Math.floor(Math.random() * Math.floor(20));
      let n2 = 1+Math.floor(Math.random() * Math.floor(20));

    elements.push({
      i, n1, n2, result:(n1 + n2), add:"1"
    })
  }

  for(let i =0; i< 4; i++){
      let n1 = 1+Math.floor(Math.random() * Math.floor(10));
      let n2 = 1+Math.floor(Math.random() * Math.floor(10));
    elements.push({
      i, n1:(n1 + n2), n2, result: n1, add:"-1"
    })
  }

  for(let i =0; i< 4; i++){
      let n3 = 1+Math.floor(Math.random() * Math.floor(10));
      let n2 = 1+Math.floor(Math.random() * Math.floor(10));
    elements.push({
      i, n2, n3, result: (n2 + n3), add:"-1"
    })
  }
  for(let i =0; i< 4; i++){
      let n3 = 1+Math.floor(Math.random() * Math.floor(10));
      let n2 = 1+Math.floor(Math.random() * Math.floor(10));
    elements.push({
      i, n1:(n3+n2), n3, result: n2, add:"-1"
    })
  }

function App() {
  const [ currentIdx, setCurrentIdx] = useState(0)

  const classes = useStyles();
  return (
    <div>
<Card>
<CardContent>
          {elements.map((props, idx) => {
            if (idx !== currentIdx){
              return
            }
            return <Result {...props}
            autoFocus={true}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx} />
          })}
</CardContent>
</Card>

    <br />
    <br />
    <Grid container spacing={3}>
        <Grid item md={6}  xs={12}>
          {elements.map((props, idx) => {
            if (!(idx > currentIdx)){
              return
            }
            return <Result {...props}
            hideInput={true}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx} />
          })}
        </Grid>
        <Grid item md={6} xs={12}>
          {elements.map((props, idx) => {
            if (!(idx < currentIdx)){
              return
            }
            return <Result {...props}
            currentIdx={currentIdx}
            showResult={true}
            setCurrentIdx={setCurrentIdx} />
          })}

        </Grid>
    </Grid>
    </div>
  );
}

export default App;
