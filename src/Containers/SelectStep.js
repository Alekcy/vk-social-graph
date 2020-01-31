import * as React from 'react';
import { Grid, Paper, Button, TextField } from '@material-ui/core';

export const SelectStep = ({ userLink, setUserLink, setFindingUserLink, findingUserLink, onSearchClick }) => {
	const changeUserLink = e => setUserLink(e.target.value);
	const changeFindingUserLink = e => setFindingUserLink(e.target.value);

	return (
		<Grid item xs={12} md={6}>
			<Paper style={{ padding: 20 }} elevation={3}>
				<TextField
					fullWidth
					id="user-link"
					label="Your page link"
					value={userLink}
					onChange={changeUserLink}
					variant="filled"
				/>
				<TextField
					fullWidth
					id="need-user-link"
					label="Finding user link"
					value={findingUserLink}
					onChange={changeFindingUserLink}
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