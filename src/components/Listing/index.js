import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Platform } from 'react-native'

import battles from '../../data/battles'
import Box from '../Box'

class Listing extends Component {
	_renderRow = ({ item }) => (
		<Box navigation={this.props.navigation} {...item} />
	)

	_keyExtractor = battle => battle.id

	_paddingStatusBar = () =>
		Platform.OS === 'ios' ? { marginTop: 20 } : { marginTop: 24 }

	render() {
		return (
			<FlatList
				style={this._paddingStatusBar()}
				data={battles}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderRow}
			/>
		)
	}
}

Listing.navigationOptions = {
	header: null
}

Listing.propTypes = {
	navigation: PropTypes.object
}

export default Listing
