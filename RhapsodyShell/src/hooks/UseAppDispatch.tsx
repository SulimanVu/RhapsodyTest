import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/configureStore";

type DispatchFunc = () => AppDispatch;

const UseAppDispatch: DispatchFunc = useDispatch;
export default UseAppDispatch;
