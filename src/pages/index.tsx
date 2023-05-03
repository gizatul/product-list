import * as React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import ResponsiveAppBar from '../components/Header';
import { Link as MaterialLink, ThemeProvider, Card, Container, CardContent, Typography, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { theme } from '../defaultTheme/defaultTheme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

export interface Product {
	id: string;
	name: string;
	price: string;
	image: IGatsbyImageData;
}

export interface ProductsQueryData {
	products: {
		nodes: Product[];
	};
}

export interface IndexPageProps {
	data: ProductsQueryData;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
	const products = data.products.nodes;
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<ResponsiveAppBar />
			<Container sx={{ mt: '4rem' }}>
				<Grid spacing={4} container direction="row" style={{ textAlign: 'center' }}>
					{products.map(({ id, name, price, image }) => (
						<Grid key={id} item xs={12} sm={6} lg={3}>
							<CardActionArea tabIndex={-1}>
								<MaterialLink component={GatsbyLink} to={id} underline="none">
									<Card sx={{ width: 264, minHeight: 340 }}>
										<GatsbyImage image={getImage(image) as IGatsbyImageData} alt={name} />
										<CardContent>
											<Typography gutterBottom variant="h6" component="h3">
												{name}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												${price}
											</Typography>
										</CardContent>
									</Card>
								</MaterialLink>
							</CardActionArea>
						</Grid>
					))}
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		products: allProductsJson {
			nodes {
				id
				name
				price
				image {
					childImageSharp {
						gatsbyImageData(height: 210, formats: AUTO, placeholder: BLURRED)
					}
				}
			}
		}
	}
`;
