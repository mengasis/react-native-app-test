import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class Box extends React.Component {
	render() {
		const { title, image, likes, comments } = this.props

		return (
			<View style={styles.box}>
				<Image style={styles.image} source={{ uri: image }} />
				<View style={styles.info}>
					<Text style={styles.title}>{title}</Text>
					<View style={styles.actions}>
						<View style={styles.icons}>
							<Icon name="heart-o" size={30} color="white" />
							<Text style={styles.text}>{likes}</Text>
						</View>
						<View style={styles.icons}>
							<Icon name="comments" size={30} color="white" />
							<Text style={styles.text}>{comments}</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

export default Box

Box.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string,
	image: PropTypes.string,
	likes: PropTypes.number,
	comments: PropTypes.number
}

const styles = StyleSheet.create({
	box: {
		flexDirection: 'row',
		backgroundColor: '#FFF',
		margin: 5
	},
	image: {
		width: 150,
		height: 150
	},
	info: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	},
	actions: {
		flexDirection: 'row'
	},
	icons: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 10
	},
	title: {
		fontSize: 18,
		color: 'white'
	},
	text: {
		color: 'white'
	}
})
