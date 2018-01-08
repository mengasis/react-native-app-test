import React from 'react'
import { StyleSheet, View } from 'react-native'

import Box from './Box'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Box />
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
