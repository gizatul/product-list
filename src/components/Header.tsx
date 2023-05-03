import * as React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link as GatsbyLink } from 'gatsby';

const ResponsiveAppBar: React.FC = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<MenuBookIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component={GatsbyLink}
						to="/"
						sx={{
							mr: 2,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						BOOKS
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default ResponsiveAppBar;
