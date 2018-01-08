import React from 'react'
import { StyleSheet, View } from 'react-native'

import Box from './Box'

export default class App extends React.Component {
	render() {
		const data = [
			{
				id: 1,
				title: 'Batalla de Gránico',
				image:
					'https://assets.arrecaballo.es/wp-content/uploads/2014/03/batalla-de-granico-alejandro-cruzando-el-rio.png',
				likes: 50,
				comments: 20
			},
			{
				id: 2,
				title: 'Batalla de Gaugamela',
				image:
					'http://4.bp.blogspot.com/-NHmZKIKL9js/UUm-pamwzNI/AAAAAAAADwM/VVRv4OX8-Pw/s1600/batalla-de-gaugamela.JPG',
				likes: 112,
				comments: 45
			}
		]

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
