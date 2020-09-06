import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const TabNav = () => {
	return (
		<div>
			<Menu>
				<Menu.Item key='home'>
					<NavLink exact to='/' activeClassName='nav-links'>
						Home
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink exact to='/meals' activeClassName='nav-links'>
						+ Create
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink exact to='/register' activeClassName='nav-links'>
						Register
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink exact to='/login' activeClassName='nav-links'>
						Login
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink exact to='/foodlist' activeClassName='nav-links'>
						Food List
					</NavLink>
				</Menu.Item>
				{/* <Menu.Item>
					<NavLink exact to='/mealCard' activeClassName='nav-links'>
						Meal Cards
					</NavLink> */}
				{/* </Menu.Item> */}
			</Menu>
		</div>
	)
}

export default TabNav
