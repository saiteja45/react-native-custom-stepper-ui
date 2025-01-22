import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Step {
  label: string;
}

interface SimpleStepperProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical';
  onComplete?: () => void;
}

const SimpleStepper: React.FC<SimpleStepperProps> = ({
  steps,
  orientation = 'horizontal',
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete?.();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Stepper Indicators */}
      <View
        style={[
          styles.stepperContainer,
          orientation === 'vertical' && styles.verticalStepperContainer,
        ]}
      >
        {steps.map((_step, index) => (
          <React.Fragment key={index}>
            <View
              style={[
                styles.stepIndicator,
                {
                  backgroundColor: index <= currentStep ? '#4CAF50' : '#BDBDBD',
                },
              ]}
            >
              <Text style={styles.stepText}>{index + 1}</Text>
            </View>
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.connector,
                  orientation === 'vertical'
                    ? styles.verticalConnector
                    : styles.horizontalConnector,
                ]}
              />
            )}
          </React.Fragment>
        ))}
      </View>

      {/* Step Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.stepLabel}>{steps[currentStep]?.label}</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, currentStep === 0 && styles.disabledButton]}
          onPress={handlePrevious}
          disabled={currentStep === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  verticalStepperContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  stepIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  connector: {
    backgroundColor: 'black',
  },
  horizontalConnector: {
    flex: 1,
    height: 2,
    marginHorizontal: 5,
  },
  verticalConnector: {
    width: 2,
    height: 20,
    marginVertical: 5,
    marginLeft: 13,
    alignSelf: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SimpleStepper;
