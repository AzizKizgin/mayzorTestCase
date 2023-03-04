import React, {useState} from 'react';
import {Box, HStack, Text} from 'native-base';
import DateBox from '../atoms/DateBox';

const DatePicker = () => {
  const [chosenDate, setChosenDate] = useState(0);
  const handleDatePress = (index: number) => {
    setChosenDate(index);
  };

  return (
    <HStack space={4}>
      <DateBox
        title="21 Ara - Salı"
        isChosen={chosenDate === 0}
        onPress={() => handleDatePress(0)}
      />
      <DateBox
        title="22 Ara - Çarşamba"
        isChosen={chosenDate === 1}
        onPress={() => handleDatePress(1)}
      />
    </HStack>
  );
};

export default DatePicker;
