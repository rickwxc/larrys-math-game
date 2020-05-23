import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Result from './Result';
import Grid from '@material-ui/core/Grid';



function App() {
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
  return (
    <div>
    <Grid container spacing={3}>
        <Grid item xs={6}>
      {elements.map((props, index) => {
        return <Result {...props} />
      })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
