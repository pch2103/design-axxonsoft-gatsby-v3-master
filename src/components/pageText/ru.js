import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import PageText from "./pageText";

export default ({cardName, ...props}) => {
	const data = useStaticQuery(graphql` 
	query{
    allContentfulContentCard {
    	edges {
      	node {
        	id
        	cardName
        	titleRU
        	textRU {
          	textRU
        	}
        	downloadUrlRU
      	}
    	}
    }
  }
`)
	let cardContent = 'not found'
	const cardDraft = React.useMemo(() => (
			data.allContentfulContentCard.edges
					.find(({node}) => cardName === node.cardName)
	), [data, cardName])


	if (cardDraft) {
		cardContent = {
			id: cardDraft.node.id || '',
			title: cardDraft.node.titleRU || '',
			text: cardDraft.node.textRU
					? cardDraft.node.textRU.textRU || '' : '',
			downloadUrl: cardDraft.node.downloadUrlRU || ''
		}
	}


	return <PageText cardContent={cardContent} {...props}/>
}