import * as React from 'react';
import { useEffect } from 'react';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import Api from '../api/Api';
import { getUserNameFromLink } from "../shared/getUserNameFromLink";

export const ProcessingStep = ({ userLink, findingUserLink }) => {
	useEffect(() => {
		let userName = getUserNameFromLink(userLink);
		let findingUserName = getUserNameFromLink(findingUserLink);
		Api.searchIdsByNames(userName, findingUserName).then(ids => {
			console.log(ids);
		});
		//Api.search().then(res => console.log(res));
	}, []);

	return (
		<Grid item xs={12} md={6}>
			<Paper style={{ padding: 20 }} elevation={3}>
				loading...
			</Paper>
		</Grid>
	)
};