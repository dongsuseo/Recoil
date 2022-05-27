import { useRecoilValue } from "recoil";
import { textCount } from "../components/atoms";

const page2 = () => {
    const Count = useRecoilValue(textCount)
  return (
    <div>
      <h1>Page2</h1>
      <div>{`Count : ${Count}`}</div>
    </div>
  );
};

export default page2;
