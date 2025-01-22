import { Text, View, StyleSheet } from 'react-native';
import { StepperX } from 'react-native-custom-stepper-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <StepperX
        steps={[
          { label: 'Step 1', content: <Text>Step 1 Content</Text> },
          { label: 'Step 2', content: <Text>Step 2 Content</Text> },
          { label: 'Step 3', content: <Text>Step 3 Content</Text> },
        ]}
        orientation="vertical" // Change to 'horizontal' for a horizontal layout
        onComplete={() => console.log('yes completed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
