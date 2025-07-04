import { setName } from "@/lib/store/userSlice";
import { useDispatch } from "react-redux";


export default function Home() {
  let name = "manish"
  const dispatch = useDispatch()
  dispatch(setName(name))
  return (
   <h1>haha hehe huhu</h1>
  );
}


