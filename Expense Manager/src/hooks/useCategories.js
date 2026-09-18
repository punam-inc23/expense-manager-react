import { useDispatch, useSelector } from "react-redux";
import { addCategory as addCategoryAction } from "../redux/slice";

function useCategories() {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    return {
        categories,
        addCategory: (category) => dispatch(addCategoryAction(category))
    };
}

export default useCategories;
