import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/en";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import PageText from "../components/pageText/en";
import PageCard from "../components/pageCard/en";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";
import PageImage from "../components/pageImage/en";

export default function (props) {
	const pageSection = [
		{label: 'Vanguard'},
		{label: 'Standard'},
		{label: 'SpecialTemplates'},
	];
	return (
			<Layout location={props.location}>
				<SEO title={'AxxonSoft Ltd. SMM-guide.'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>

				<section style={{display: "flex"}}>
					<Container maxWidth="lg">

						<Grid container spacing={2}>
							<Grid item xs={12}>
								<ContentHeader title={'HowToDesignPostImage'}/>
							</Grid>
							<Grid item sm={12}>
								<PageText cardName="HeaderContactEmail"/>
							</Grid>
							<Grid item xs={12} md={6}>
								<PageText email={true} cardName="CopywritingQuest"/>
							</Grid>
							<Grid item xs={12} md={6}>
								<PageText email={true} cardName="DesignQuest"/>
							</Grid>

							<EndOfSection/>

							<Grid item xs={12} sm={6}>
								<PageText cardName="SmmText1"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageCard cardName="SmmAxxonsoftSign" landscape={true} small={true}/>
							</Grid>
						</Grid>

						<Grid name={pageSection[0].label} container spacing={2}>
							<Grid item xs={12}>
								<ContentHeader title={'Vanguard'}/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample1"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample2"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample3"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample4"/>
							</Grid>

							<EndOfSection/>

							<Grid item xs={12} sm={6}>
								<PageText cardName="SmmText2"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample5"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample6"/>
							</Grid>

							<EndOfSection/>

							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample7"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample8"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample9"/>
							</Grid>

							<EndOfSection/>

							<Grid item xs={12} sm={4}>
								<PageCard cardName="SmmImageSample10"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard cardName="SmmImageSample11"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard cardName="SmmImageSample12"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

						<Grid name={pageSection[1].label} container spacing={2}>

							<Grid item xs={12}>
								<ContentHeader title={'Standard'}/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample13"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample14"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample15"/>
							</Grid>

							<EndOfSection/>
							<Grid item xs={12} sm={12}>
								<PageText attention={true} cardName="SmmText3"/>
							</Grid>

							<EndOfSection/>

							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample16"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample17"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={100} cardName="SmmImageSample18"/>
							</Grid>
							<EndOfSection/>
							<Grid item xs={12} sm={12}>
								<PageText download={true} cardName="SmmText4"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

						<Grid name={pageSection[2].label} container spacing={2}>
							<Grid item xs={12}>
								<ContentHeader title={'SpecialTemplates'}/>
								<ContentHeader subheader={true} title={'Post with a screenshot'}/>
							</Grid>
							<EndOfSection height={2}/>
							<Grid container item xs={12} sm={4}>
								<Grid item xs={12}>
									<PageCard cardName="SmmText5" buttonText={'Download mockups'}/>
								</Grid>
								<EndOfSection height={2}/>
								<Grid item xs={12}>
									<PageCard cardName="SmmText6" buttonText={'Download template'}/>
								</Grid>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample20"/>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample19"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate1"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate2"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate3"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate4"/>
							</Grid>

							<EndOfSection height={4}/>

							<Grid item xs={12}>
								<ContentHeader subheader={true} title={'Post with a product logo'}/>
							</Grid>
							<EndOfSection height={2}/>
							<Grid container item xs={12} sm={4}>
								<Grid item xs={12}>
									<PageText cardName="SmmText7"/>
								</Grid>
								<EndOfSection height={2}/>
								<Grid item xs={12}>
									<PageCard cardName="SmmText8" buttonText={'Download template'}/>
								</Grid>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample21"/>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample22"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate1"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate5"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate6"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate4"/>
							</Grid>

							<EndOfSection height={4}/>

							<Grid item xs={12}>
								<ContentHeader subheader={true} title={'Post with a feature icon'}/>
							</Grid>
							<EndOfSection height={2}/>
							<Grid container item xs={12} sm={4}>
								<Grid item xs={12}>
									<PageText cardName="SmmText9"/>
								</Grid>
								<EndOfSection height={2}/>
								<Grid item xs={12}>
									<PageCard cardName="SmmText10" buttonText={'Download template'}/>
								</Grid>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample23"/>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample24"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate1"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate2"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate7"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate4"/>
							</Grid>

							<EndOfSection height={4}/>

							<Grid item xs={12}>
								<ContentHeader subheader={true} title={'Post about exhibition'}/>
							</Grid>
							<EndOfSection height={2}/>
							<Grid container item xs={12} sm={4}>
								<Grid item xs={12}>
									<PageCard cardName="SmmText11"/>
								</Grid>
								<EndOfSection height={2}/>
								<Grid item xs={12}>
									<PageCard cardName="SmmText12" buttonText={'Download template'}/>
								</Grid>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample25"/>
							</Grid>
							<Grid container item xs={12} sm={4}>
								<PageImage cardName="SmmImageSample26"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate1"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate5"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate8"/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<PageCard centered={true} cardName="SmmColorTemplate4"/>
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
