import { StackNavigator } from 'react-navigation'

import Listing from './src/components/Listing'

const rootNavigation = StackNavigator({
	Listing: { screen: Listing }
})

export default rootNavigation
