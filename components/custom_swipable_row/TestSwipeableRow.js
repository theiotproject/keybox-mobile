import { Text } from "react-native-paper";
import CustomSwipableRow from "./CustomSwipeableRow";

const  TestSwipeableRow = () => {
    return (
      <CustomSwipableRow
        style ={{height: 50}}
        handlePressLeft={() => {
          console.log('Left swipe action triggered');
        }}
        handlePressRight={() => {
          console.log('Right swipe action triggered');
        }}
      >
        <Text>Swipe Me!</Text>
      </CustomSwipableRow>
    );
};

export default TestSwipeableRow