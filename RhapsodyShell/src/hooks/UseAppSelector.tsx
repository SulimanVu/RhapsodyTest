import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/redux/configureStore";

const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default UseAppSelector;
