import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  button: {
    marginBottom: 100,
    color: 'grey',
    backgroundColor: 'grey',
    padding: 40,
    borderRadius: 5
  },
  number: {
    fontSize: 50,
  }
});

class RandomNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
  }

  calcular = () => {
    const min = 10; // valor mínimo
    const max = 40; // valor máximo
    const numbers = [];

    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
    }

    this.setState({ numbers });
  }

  render() {
    return (
      <View>
        <Button title="Números aleatórios" onPress={this.calcular} style={styles.button} />
        {this.state.numbers.map((number, index) => (
          <Text key={index} style={styles.number}>{number}</Text>
        ))}
      </View>
    );
  }
}

export default RandomNumbers;