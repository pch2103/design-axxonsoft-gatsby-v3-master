import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/en";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import PageCard from "../components/pageCard/en";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";

export default function (props) {
	const pageSection = [
		{label: 'Next4'},
		{label: 'Intellect'},
		{label: 'Net'},
	];
	return (
			<Layout location={props.location}>
				<SEO title={'AxxonSoft Ltd. Products'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>

				<section style={{display: "flex"}}>

					<Container maxWidth="lg">

						<Grid name={pageSection[0].label} container spacing={2}>
							<Grid item xs={12}>
								<ContentHeader title={'Next4'}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="Next4Logo" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="Next4inv"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="NextBackground"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="Next4sign"/>
								</Grid>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="Next4Start"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="Next4Pro"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="Next4Universe"/>
								</Grid>
							</Grid>

							<EndOfSection height={2}/>

							<Grid item xs={12} sm={12}>
								<PageCard cardName="Next4Interface" landscape={true}/>
							</Grid>
						</Grid>

						<EndOfSection/>

						<Grid id={pageSection[1].label} item xs={12}>
							<ContentHeader title={'Intellect'}/>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="IntellectLogo" landscape={true}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="IntellectLiteLogo" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectLogoInv"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectBackground"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectSign"/>
								</Grid>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="ACFAIntellect"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="ATMIntellect"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="AutoIntellect"/>
								</Grid>
							</Grid>

							<EndOfSection/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="FaceIntellect"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="RetailIntellect"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="RailwayIntellect"/>
								</Grid>
							</Grid>
						</Grid>

						<EndOfSection/>

						<Grid id={pageSection[2].label} item xs={12}>
							<ContentHeader title={'Net'}/>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="AxxonNet" landscape={true}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="AxxonNetRes" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="AxxoNetInv"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="AxxonNetBackground"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="AxxonNetSign"/>
								</Grid>
							</Grid>

						</Grid>

						<EndOfSection/>
					</Container>
					<article>
						<Hidden smDown>
							<ContentMenu pageSection={pageSection}/>
						</Hidden>
					</article>
				</section>

			</Layout>
	);
}
