import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";
import ReactMarkdown from "react-markdown"
import GetIcon from "../utils/getIcon";
import clsx from 'clsx';
import Img from "gatsby-image";
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles((theme) => (
		{
			root: {
				// maxWidth: 600,
				height: '100%',
				margin: 'auto',
			},
			card: {
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			},
			content: {
				padding: 0,
				margin: 0,
			},
			contentCentered: {
				margin: 'auto',
				textAlign: 'center',
			},
			media: {
				height: 0,
			},
			mediaH50: {
				paddingTop: '50%',
			},
			mediaH100: {
				paddingTop: '100%',
			},
			mediaH150: {
				paddingTop: '150%',
			},
			outline: {
				border: `${theme.palette.divider} 1px solid`,
			},
			title: {
				paddingTop: theme.spacing(2),
			},
			cardAction: {
				height: '100%',
				display: 'flex',
				alignItems: 'flex-end',
			},
			button: {
				margin: theme.spacing(0),
			},
			shortDivider: {
				width: '33%',
			},
		}
))
const PageCard = ({cardContent, ...props}) => {
	const classes = useStyles();

	const mediaHeight = classes[`mediaH${props.mediaHeigt}`] || classes.mediaH50
	const mediaStyle = clsx(classes.media, !props.centered && classes.outline, mediaHeight)
	const contentStyle = clsx(classes.content, props.centered && classes.contentCentered)
	const dividerStyle = clsx(classes.shortDivider, props.centered && classes.contentCentered)

	return (
			<div className={classes.root}>
				<div className={classes.card}>
					<section >
					{cardContent.image && cardContent.image.fluid === null &&
					<CardMedia
							className={mediaStyle}
							image={cardContent.image.file.url}
							title={cardContent.image.title}
					/>
					}
					{cardContent.image && cardContent.image.fluid !== null &&
					<CardMedia
							className={mediaStyle}
							fluid={cardContent.image.fluid}
							component={Img}
							title={cardContent.image.title}
					/>
					}
					<div className={contentStyle}>
						{cardContent.title &&
						<Typography className={classes.title} variant="h6">
							{cardContent.title}
						</Typography>
						}
						<Typography variant="body2" component={'span'} >
							<ReactMarkdown
									children={cardContent.text}
							/>
						</Typography>
					</div>
					</section>
					<div className={classes.cardAction}>
						{cardContent.downloadUrl &&
						<CardActions>
							<Button
									href={cardContent.downloadUrl}
									component={Link}
									target="_blank"
									rel="noopener"
									className={classes.button}
									size="small"
									color="primary"
									startIcon={<GetIcon icon="Download"/>}
							>

								<FormattedMessage id={props.buttonText ? props.buttonText : 'Download'}/>
							</Button>
						</CardActions>
						}
					</div>
					<Divider className={dividerStyle}/>
				</div>
			</div>
	)
};

export default PageCard;