import * as React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import ResponsiveAppBar from '../components/Header';
import { Link as MaterialLink, Container, Grid, Button, Typography } from '@mui/material';
import { theme } from '../defaultTheme/defaultTheme';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '../pages';

export interface Product {
	id: string;
	name: string;
	price: string;
	image: IGatsbyImageData;
	description: string;
}
export interface ProductsQueryData {
	productsJson: Product;
}
export interface IndexPageProps {
	data: ProductsQueryData;
}

const SinglePage: React.FC<IndexPageProps> = ({ data }) => {
	const { name, price, image, description } = data.productsJson;
	const img = getImage(image) as IGatsbyImageData;
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<ResponsiveAppBar />
			<Container sx={{ mt: '5rem' }}>
				<Grid container spacing={2}>
					<Grid item sm={3}>
						<GatsbyImage image={img} alt={name} />
					</Grid>
					<Grid item sm={9}>
						<Typography variant="h4" component="h4">
							{name}
						</Typography>
						<Typography variant="body1" component="p">
							{description}
						</Typography>
						<Typography style={{ marginTop: 20 }} variant="body1" color="text.secondary">
							${price}
						</Typography>
						<Button component={GatsbyLink} to="/" style={{ marginTop: 60 }} size="small" color="primary">
							Go home
						</Button>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default SinglePage;

export const query = graphql`
	query MyQuery($url: String) {
		productsJson(id: { eq: $url }) {
			id
			name
			description
			price
			image {
				childImageSharp {
					gatsbyImageData(width: 500, formats: AUTO, placeholder: BLURRED)
				}
			}
		}
	}
`;
