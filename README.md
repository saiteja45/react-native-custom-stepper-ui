# react-native-custom-stepper-ui

stepper ui for mobile ios and android


## Installation

```sh
npm install react-native-custom-stepper-ui
```

```sh
yarn add react-native-custom-stepper-ui
```

## Usage


```js
import { StepperX } from 'react-native-custom-stepper-ui';


// ...

<StepperX
        steps={[
          { label: 'Step 1', content: <Text>Step 1 Content</Text> },
          { label: 'Step 2', content: <Text>Step 2 Content</Text> },
          { label: 'Step 3', content: <Text>Step 3 Content</Text> },
        ]}
        orientation="horizontal" // Change to 'horizontal' for a horizontal layout
        onComplete={() => console.log('yes completed')}
      />
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Issues

please try this and if you need any reusable components need to be added please raise in issues.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
