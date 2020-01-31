import * as React from 'react';
import { useEffect } from 'react';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import Api from '../api/Api';
import { getUserNameFromLink } from "../shared/getUserNameFromLink";
import { finding } from "../shared/finding";

export const ProcessingStep = ({ userLink, findingUserLink }) => {
	useEffect(() => {
		let userName = getUserNameFromLink(userLink);
		let findingUserName = getUserNameFromLink(findingUserLink);
		Api.searchIdsByNames(userName, findingUserName).then(ids => {
			finding(ids);
		});
	}, []);

	return (
		<Grid item xs={12} md={6}>
			<Paper style={{ padding: 20 }} elevation={3}>
				loading...
			</Paper>
		</Grid>
	)
};