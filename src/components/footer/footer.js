import React from 'react';
import Copyright from "./Copyright";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PoweredBy from "./poweredBy";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					marginTop: theme.spacing(14),
					paddingTop: theme.spacing(4),
					paddingBottom: theme.spacing(10),
					background: theme.palette.page.main,
					color: theme.palette.page.contrastText,
					textAlign: "center"
				},
			})
});

const Footer = ({langKey}) => {
	const classes = useStyles();
	return (
			<footer className={classes.root}>
				<Container spacing={2} maxWidth="xs">
					<Copyright langKey={langKey}/>
					<PoweredBy/>
				</Container>
			</footer>
	)
}

export default Footer;