import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import PageImage from "../components/pageImage/ru";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";
import PageText from "../components/pageText/ru";

export default function (props) {
	const pageSection = [
		{label: 'Hybrid'},
		{label: 'Island'},
		{label: 'WorkStations'},
		{label: 'DownloadMaterials'},
	];
	return (
			<Layout location={props.location}>
				<SEO title={'ITV GROUP. Выставочные стенды.'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<section style={{display: "flex"}}>

					<Container maxWidth="lg">

						<Grid name={pageSection[0].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'Hybrid'}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageImage cardName="BoothSample2"/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageImage cardName="BoothSample1"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageText cardName="boothText1"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageText cardName="boothText2"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample3"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample4"/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageText attention={true} cardName="bootTextInfo1"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

						<Grid name={pageSection[1].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'Island'}/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample5"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample6"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageText cardName="boothText3"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageText cardName="boothText4"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample7"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample8"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

						<Grid name={pageSection[2].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'WorkStations'}/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample9"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample10"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageText cardName="boothText6"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageText cardName="boothText7"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

						<Grid name={pageSection[3].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'DownloadMaterials'}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageImage cardName="BoothSample11"/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageText download={true} cardName="bootTextInfo2"/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageText download={true} cardName="bootTextInfo3"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

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
