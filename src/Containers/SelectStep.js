import * as React from 'react';
import { Grid, Paper, Button, TextField } from '@material-ui/core';

export const SelectStep = ({ userId, setUserId, setFindingUserId, findingUserId, onSearchClick }) => {
	const changeUserId = e => setUserId(e.target.value);
	const changeFindingUserId = e => setFindingUserId(e.target.value);

	return (
		<Grid item xs={12} md={6}>
			<Paper style={{ padding: 20 }} elevation={3}>
				<TextField
					fullWidth
					id="user-id"
					label="Your id"
					value={userId}
					onChange={changeUserId}
					variant="filled"
				/>
				<TextField
					fullWidth
					id="need-user-id"
					label="Finding user id"
					value={findingUserId}
					onChange={changeFindingUserId}
					variant="filled"
				/>
				<Button
					style={{ marginTop: 20 }}
					variant="contained"
					color="primary"
					fullWidth
					onClick={onSearchClick}
				>
					Search
				</Button>
			</Paper>
		</Grid>
	)
};