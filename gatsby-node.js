/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const { data } = await graphql(`
		query {
			products: allProductsJson {
				nodes {
					id
				}
			}
		}
	`);
	data.products.nodes.forEach((node) => {
		const { id } = node;
		createPage({
			path: id,
			component: require.resolve('./src/templates/singlepage.tsx'),
			context: { url: id },
		});
	});
};
