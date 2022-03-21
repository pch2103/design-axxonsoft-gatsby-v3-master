import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";
import GetIcon from "../utils/getIcon";
import {FormattedMessage} from "react-intl";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => (
		{
			root: {
				margin: 'auto',
			},
			info: {
				display: 'flex',
				alignItems: 'center',
			},
			attention: {
				borderRadius: 4,
				background: theme.palette.background.paper,
				padding: 12,
				width: '100%',
				border: `${theme.palette.divider} 1px solid`,
				boxShadow: `2px 2px 6px rgba(0, 0, 0, 0.1)`,
			},
			download: {
				textAlign: "center",
				flexDirection: 'column',
			},
			iconInfo: {
				marginRight: theme.spacing(2),
				marginLeft: theme.spacing(1),
				display: 'flex',
				color: theme.palette.info.main,
			},
			iconWarning: {
				margin: theme.spacing(1),
				display: 'flex',
				color: theme.palette.warning.main,
			},
			button: {
				margin: theme.spacing(1),
				background: theme.palette.secondary.main,
				color: theme.palette.primary.contrastText,
				'&:hover': {
					textDecoration: 'none',
					background: theme.palette.secondary.dark,
				},
			},
			text: {
				[theme.breakpoints.down('xs')]: {
					fontSize: '0.9em',
				},
				'& a': {
					color: theme.palette.page.url,
					// textDecoration: 'none'
				},
				'& a:hover': {
					textDecoration: 'underline'
				},
			},
		}
))

const PageText = ({cardContent, ...props}) => {
	const classes = useStyles();

	const infoStyle = clsx(classes.info, props.download && classes.download,
			(
					props.attention || props.download || props.email) && classes.attention)

	return (
			<div>
				{cardContent.title &&
				<Typography variant="h6">
					{cardContent.title}
				</Typography>
				}
				{cardContent.text &&
				<div className={infoStyle}>
					{props.email &&
					<Hidden only="xs">
					<div className={classes.iconInfo}>
						<GetIcon medium={true} icon="Email"/>
					</div>
					</Hidden>
					}
					{props.attention &&
					<div className={classes.iconWarning}>
						<GetIcon medium={true} icon="Warning"/>
					</div>
					}
					<Typography variant="body1" component={'span'}>
						<ReactMarkdown
								className={classes.text}
								children={cardContent.text}
						/>
					</Typography>
					{
						cardContent.downloadUrl &&
						<Button
								href={cardContent.downloadUrl}
								component={Link}
								target="_blank"
								rel="noopener"
								className={classes.button}
								variant="contained"
								startIcon={<GetIcon icon="Download"/>}
						>
							<FormattedMessage id='Download'/>
						</Button>

					}
				</div>
				}
			</div>
	)
};

export default PageText;