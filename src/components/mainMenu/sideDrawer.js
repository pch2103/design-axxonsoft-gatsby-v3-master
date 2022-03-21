import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Link from "../Link";
import GetIcon from "../utils/getIcon";
import Divider from "@material-ui/core/Divider";
import Favicon from "../mainMenu/favicon";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => (
		{
			list: {
				width: 250,
			},
			about: {
				display: 'inline-flex',
				alignItems: "center",
				padding: theme.spacing(1),
			},
			company: {
				marginLeft: theme.spacing(1),
				color: theme.palette.text.secondary,
			},
			listItem: {
				color: theme.palette.text.primary,
				'&:hover': {
					textDecoration: 'none',
				},
			},
		}));

const SideDrawer = ({drawer, toggleDrawer, mainMenu}) => {
	const classes = useStyles();
	const list = () => (
			<div
					className={classes.list}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
			>
				<Box className={classes.about}>
					<Favicon/>
					<Typography variant="overline" display="block" className={classes.company}>
						AxxonSoft Design
					</Typography>
				</Box>
				<Divider />
				<List>
					{mainMenu && mainMenu
							.map(menuItem => (
									<ListItem key={menuItem.id}
														className={classes.listItem}
														button to={menuItem.link}
														component={Link}>
										<ListItemIcon>
											<GetIcon icon={menuItem.icon}/>
										</ListItemIcon>
										<ListItemText
												primary={menuItem.label}
										/>
									</ListItem>
							)
					)}
				</List>
			</div>
	);

	return (
			<Drawer open={drawer} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
	)
};

export default SideDrawer;