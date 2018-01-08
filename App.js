import React from 'react'
import { StyleSheet, View } from 'react-native'

import Box from './Box'
import data from './battles'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				{data.map(item => <Box key={item.id} {...item} />)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F1E57A',
		paddingTop: 50
	}
})
