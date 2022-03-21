import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import PageBanner from "./pageBanner";


export default ({location}) => {
	const nestedUrl = location.pathname.replace('/ru/', '/')

	const data = useStaticQuery(graphql` 
	query{
      allContentfulMainBanner {
        edges {
          node {
          	pageUrl
            titleRU
            subtitleRU
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
	const banner = React.useMemo(() => (
			data.allContentfulMainBanner.edges
					.find(({node}) => nestedUrl === node.pageUrl).node
	), [data, nestedUrl])

	return <PageBanner banner = {{
		title: banner.titleRU,
		subtitle: banner.subtitleRU,
		icon: banner.icon
	}}/>
}


