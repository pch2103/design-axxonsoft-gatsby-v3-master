import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Link as LinkScroll} from "react-scroll"
import {FormattedMessage} from "react-intl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => (
		{
			root: {
				top: theme.spacing(12),
				position: 'sticky',
				width: 175,
				display: 'box',
				[theme.breakpoints.down('sm')]: {
					width: 150,
				},
			},
			tabs: {
				borderLeft: `1px solid ${theme.palette.divider}`,
				listStyleType: 'none',
				marginLeft: 0,
				padding: 0,
			},

			tab: {
				cursor: 'pointer',
				'&:hover': {
					background: 'rgba(0, 0, 0, 0.05)',
					textDecoration: "underline",
				},
			},
			active: {
				color: theme.palette.secondary.main,
				textDecoration: 'none',
				'& > div': {
					borderLeft: `2px solid ${theme.palette.secondary.main}`,
					marginLeft: -2,
				}
			},

			tabText: {
				padding: theme.spacing(2),
				[theme.breakpoints.down('sm')]: {
					paddingTop: '0.7em',
					paddingBottom: '0.7em',
				},
			}
		}));

export default function ContentMenu({pageSection}) {
	const classes = useStyles();

	return (
			<nav className={classes.root}>
				<ul className={classes.tabs}>
					{pageSection.map((item, index) => (
							<li key={item.label + index} className={classes.tab}>
								<LinkScroll
										activeClass={classes.active}
										to={item.label}
										spy={true}
										smooth={true}
										hashSpy={true}
										offset={-24}
										duration={200}
								>
									<div className={classes.tabText}>
										<Typography variant="subtitle2">
											<FormattedMessage id={item.label}/>
										</Typography>
									</div>
								</LinkScroll>
							</li>
					))
					}
				</ul>
			</nav>
	);
}

// SCROLL CONTROL

// const [pageBannerY, setPageBannerY] = useState(0);
// const [fixedMenu, setFixedMenu] = useState(false)

// const scroll = useScroll()

// useEffect(()=>{
// 	const pageBanner = typeof window == "undefined" || !window.document
// 			? 0 : document.getElementById('pageBanner')
// 	setPageBannerY(pageBanner.getBoundingClientRect().bottom)
// },[])
//
// useEffect(()=>{
// 	setFixedMenu(scroll.y >= pageBannerY)
// },[scroll, pageBannerY, setFixedMenu])
//
//
// const menuStyle = clsx(classes.root, fixedMenu && classes.fixed)