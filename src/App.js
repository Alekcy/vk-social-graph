import React from 'react';
import { useState } from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { SELECT_STEP, PROCESSING_STEP, RESULT_STEP } from "./shared/steps";
import { SelectStep } from "./Containers/SelectStep";

function App() {
  const [ step, setStep ] = useState(SELECT_STEP);
  const [ userId, setUserId ] = useState('');
  const [ findingUserId, setFindingUserId ] = useState('');

  const renderStep = () => {
    switch (step) {
        case SELECT_STEP: return (
            <SelectStep
                userId={userId}
                setUserId={setUserId}
                findingUserId={findingUserId}
                setFindingUserId={setFindingUserId}
            />
        );
    }
  };

  return (
    <div className="App">
      <Container>
        <Grid
            container
            justify="center"
            style={{
                height: '100vh',
                alignItems: 'center',
                display: 'flex',
            }}
        >
          { renderStep() }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
