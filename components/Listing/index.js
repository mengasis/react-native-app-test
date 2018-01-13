import React, { Component } from 'react'
import { FlatList } from 'react-native'

import battles from '../../data/battles'
import Box from '../Box'

class Listing extends Component {
	_renderRow = ({ item }) => <Box {...item} />

	_keyExtractor = battle => battle.id

	render() {
		return (
			<FlatList
				data={battles}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderRow}
			/>
		)
	}
}

export default Listing
