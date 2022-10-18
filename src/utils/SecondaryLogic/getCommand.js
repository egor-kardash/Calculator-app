import { OPERATION_STACK } from '@/constants/index';
import {
  AddCommand,
  DivideCommand,
  DivideWithRemainderCommand,
  MultiplyCommand,
  SubtractCommand,
} from '@/utils/CommandPattern/index';

export const getCommand = (invoker, calculator) => {
  switch (OPERATION_STACK.pop()) {
    case '*':
      invoker.setCommand(new MultiplyCommand(calculator));
      break;
    case '/':
      invoker.setCommand(new DivideCommand(calculator));
      break;
    case '%':
      invoker.setCommand(
        new DivideWithRemainderCommand(calculator),
      );
      break;
    case '+':
      invoker.setCommand(new AddCommand(calculator));
      break;
    case '-':
      invoker.setCommand(new SubtractCommand(calculator));
      break;
    default:
      break;
  }
};
