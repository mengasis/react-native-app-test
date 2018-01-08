import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {
	render() {
		const title = 'Batalla de Gránico'
		const urlImage =
			'https://assets.arrecaballo.es/wp-content/uploads/2014/03/batalla-de-granico-alejandro-cruzando-el-rio.png'

		return (
			<View style={styles.container}>
				<View style={styles.box}>
					<Image style={styles.image} source={{ uri: urlImage }} />
					<View style={styles.info}>
						<Text style={styles.title}>{title}</Text>
						<View style={styles.actions}>
							<View style={styles.icons}>
								<Icon name="heart-o" size={30} color="white" />
								<Text style={styles.text}>50</Text>
							</View>
							<View style={styles.icons}>
								<Icon name="comments" size={30} color="white" />
								<Text style={styles.text}>50</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F1E57A',
		paddingTop: 50
	},
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
		alignItems: 'center'
	},
	title: {
		fontSize: 18,
		color: 'white'
	},
	text: {
		color: 'white'
	}
})
