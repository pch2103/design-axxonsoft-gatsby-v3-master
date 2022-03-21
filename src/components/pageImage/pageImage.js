import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import ReactMarkdown from "react-markdown";
import GetIcon from "../utils/getIcon";

const useStyles = makeStyles((theme) => (
		{
			root: {
				margin: 'auto',
			},
			media: {
				display: "flex",
				maxWidth: "100%",
				border: `${theme.palette.divider} 1px solid`,
			},
			info: {
				display: 'inline-flex',
				alignItems: 'center',
			},
			icon: {
				marginRight: theme.spacing(0.5),
				display: 'flex',
				color: theme.palette.info.main,
			},
			shortDivider: {
				width: '33%',
			},
		}
))

const PageImage = ({cardContent}) => {
	const classes = useStyles();

	return (
			<Grid container spacing={2}>
				{cardContent.title &&
				<Grid item xs={12}>
					<Typography variant="h6">
						{cardContent.title}
					</Typography>
				</Grid>
				}
				<Grid item xs={12}>
					{cardContent.image && cardContent.image.fluid === null &&
					<img src={cardContent.image.file.url} alt={cardContent.image.title} className={classes.media}/>
					}
					{cardContent.image && cardContent.image.fluid !== null &&
					<Img fluid={cardContent.image.fluid} className={classes.media}/>
					}
					{cardContent.text &&
					<div className={classes.info}>
						<div className={classes.icon}>
							<GetIcon small={true} icon="Info"/>
						</div>
						<Typography variant="body2" component={'span'}>
							<ReactMarkdown
									children={cardContent.text}
							/>
						</Typography>
					</div>
					}
				</Grid>

			</Grid>
	)
};

export default PageImage;