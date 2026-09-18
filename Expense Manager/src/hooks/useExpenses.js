import { useDispatch, useSelector } from "react-redux";
import {
    addExpense as addExpenseAction,
    removeExpense as removeExpenseAction,
    updateExpense as updateExpenseAction
} from "../redux/slice";

function useExpenses() {
    const expenses = useSelector((state) => state.expenses);
    const dispatch = useDispatch();

    return {
        expenses,
        addExpense: (expense) => dispatch(addExpenseAction(expense)),
        updateExpense: (payload) => dispatch(updateExpenseAction(payload)),
        removeExpense: (expenseId) => dispatch(removeExpenseAction(expenseId))
    };
}

export default useExpenses;
