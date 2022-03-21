import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					color: theme.palette.text.primary,
					textAlign: "center"
				},
				header:{
					paddingTop: theme.spacing(8),
					paddingBottom: theme.spacing(4),
				},
				subheader: {
					textTransform: "uppercase",
				},
			})
});

const ContentHeader = ({title, ...props}) => {
	const classes = useStyles();

	return (
			<Box className={classes.root}>
				{ props.subheader
				? <Typography variant="h5" component="h4" className={classes.subheader}>
						<FormattedMessage id={title}/>
					</Typography>
				: <Typography variant="h3" component="h2" className={classes.header}>
						<FormattedMessage id={title}/>
					</Typography>
				}
			</Box>
	)
};

export default ContentHeader;