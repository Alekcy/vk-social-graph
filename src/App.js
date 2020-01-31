import React from 'react';
import { useState } from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { SELECT_STEP, PROCESSING_STEP, RESULT_STEP } from "./shared/steps";
import { SelectStep } from "./Containers/SelectStep";
import { ProcessingStep } from "./Containers/ProcessingStep";

function App() {
  const [ step, setStep ] = useState(SELECT_STEP);
  const [ userLink, setUserLink ] = useState('');
  const [ findingUserLink, setFindingUserLink ] = useState('');

  const renderStep = () => {
    switch (step) {
        case SELECT_STEP: return (
            <SelectStep
                onSearchClick={() => setStep(PROCESSING_STEP)}
                userLink={userLink} setUserLink={setUserLink}
                findingUserLink={findingUserLink}
                setFindingUserLink={setFindingUserLink}
            />
        );
		case PROCESSING_STEP: return (
            <ProcessingStep
                userLink={userLink}
                findingUserLink={findingUserLink}
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
