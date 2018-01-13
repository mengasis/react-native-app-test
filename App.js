import { StackNavigator } from 'react-navigation'

import Listing from './src/components/Listing'
import BoxView from './src/components/BoxView'

const rootNavigation = StackNavigator({
	Listing: { screen: Listing },
	BoxView: { screen: BoxView }
})

export default rootNavigation
