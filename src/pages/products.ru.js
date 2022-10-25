import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import PageCard from "../components/pageCard/ru";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";

export default function (props) {
	const pageSection = [
		{label: 'ITV Cloud'},
		{label: 'Intellect X'},
		{label: 'Intellect'},
	];

	return (
			<Layout location={props.location}>
				<SEO title={'ITV GROUP. Логотипы продуктов'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>

				<section style={{display: "flex"}}>

					<Container maxWidth="lg">

						<Grid name={pageSection[0].label} container spacing={2}>
							<Grid item xs={12}>
								<ContentHeader title={'ITVCloud'}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="ITVCloudLogo" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="ITVCloudinv"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="ITVCloudBackground"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="ITVCloudsign"/>
								</Grid>
							</Grid>

							<EndOfSection height={2}/>

							<Grid item xs={12} sm={12}>
								<PageCard cardName="ITVCloudISX" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>
						</Grid>

						<EndOfSection/>

						<Grid id={pageSection[1].label} item xs={12}>
							<ContentHeader title={'IntellectX'}/>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="IntellectXLogo" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid item xs={12} sm={12}>
								<PageCard cardName="ITVCloudInterface" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectXLogoInv"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectXBackground"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectXSign"/>
								</Grid>
							</Grid>

							<EndOfSection height={2}/>
						</Grid>

						<EndOfSection/>

						<Grid id={pageSection[2].label} item xs={12}>
							<ContentHeader title={'Intellect'}/>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="IntellectLogo" landscape={true}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="IntellectLiteLogonew" landscape={true}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageCard cardName="IntellectRes" landscape={true}/>
							</Grid>

							<EndOfSection height={2}/>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectLogoInv"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectNewBackground"/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard cardName="IntellectNewSign"/>
								</Grid>
							</Grid>
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
