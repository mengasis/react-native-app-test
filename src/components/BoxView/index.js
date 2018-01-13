import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, Image, Text } from 'react-native'

class BoxView extends Component {
	render() {
		const { title, image } = this.props.navigation.state.params

		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: image }} />
				<Text style={styles.title}>{title}</Text>
			</View>
		)
	}
}

BoxView.propTypes = {
	navigation: PropTypes.shape({
		state: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.number.isRequired,
				title: PropTypes.string,
				image: PropTypes.string
			})
		})
	})
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	title: { fontSize: 25 },
	image: {
		width: '100%',
		height: 200
	}
})

export default BoxView
