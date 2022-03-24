import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from "gatsby"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChangeLanguage from "./changeLanguage";
import {makeStyles} from "@material-ui/core/styles";
import Favicon from "./favicon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ChangeTheme from "./changeTheme";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import GetIcon from "../utils/getIcon";
import SideDrawer from "./sideDrawer";
import Link from "../Link";

function HideOnScroll(props) {
	const {children, window} = props;

	const trigger = useScrollTrigger({target: window ? window() : undefined});

	return (
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const useStyles = makeStyles((theme) => (
		{
			root: {
				flexGrow: 1,
				background: theme.palette.menu.main,
			},
			tabs: {
				flexGrow: 1,
			},
			logo: {
				flexGrow: 1,
			},
			menuButton: {
				marginRight: theme.spacing(0),
			},
			tab: {
				[theme.breakpoints.down('xs')]: {
					display: 'none'
				},
				padding: theme.spacing(2),
				color: theme.palette.primary.contrastText,
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.12)',
					transition: 'background 0.3s',
					textDecoration: 'none',
				},
			},
		}));

const MainMenu = (props) => {
	const classes = useStyles();
	const data = useStaticQuery(graphql`
   query {
      allContentfulMainMenu(
    		sort: {
      		fields: [order]
      		order: ASC
    		}
  		){
        edges {
          node {
            id
            order
            label
            labelRu
            link
            icon
          }
        }
      }
    },
  `)
	const [drawer, setDrawer] = useState(false);

	const mainMenu = useMemo(
			() => data.allContentfulMainMenu.edges
					.map(edge => ({
								label: props.locale === 'en' ? edge.node.label : edge.node.labelRu,
								link: `/${props.locale}${edge.node.link}`.replace('/ru/', '/'),
								icon: edge.node.icon,
								id: edge.node.id
							})
					)
	, [ data, props.locale])



	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (
				event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawer(open);
	}

	return (
			<>
				<SideDrawer
						drawer={drawer}
						toggleDrawer={toggleDrawer}
						mainMenu = {mainMenu}
				/>
			<HideOnScroll>
				<AppBar className={classes.root}>
					<Toolbar variant="dense">
						<Hidden smUp>
							<IconButton
									edge="start"
									onClick={toggleDrawer(true)}
									className={classes.menuButton}
									color="inherit"
									aria-label="menu">
								<GetIcon icon='Burger'/>
							</IconButton>
						</Hidden>
					<Link className={classes.logo} to = {props.homeLink}>
						<Favicon />
					</Link>
						<Tabs
								value={props.currentPath}
								aria-label="main menu"
								indicatorColor="secondary"
								variant="scrollable"
								scrollButtons="auto"
								className={classes.tabs}
						>
							{mainMenu &&
								mainMenu.map(menuItem => (
										<Tab
												key={menuItem.id}
												className={classes.tab}
												to={menuItem.link}
												component={Link}
												label={menuItem.label}
												value={menuItem.link}
										/>
								))
							}
						</Tabs>
						<ChangeTheme setCurrentTheme= {props.setCurrentTheme}/>
{/*						<ChangeLanguage
								langsMenu={props.langsMenu}
								locale = {props.locale}
						/>*/}
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			</>
	)
}

export default MainMenu
