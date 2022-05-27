import { useRecoilState, useRecoilValue } from "recoil";
import { textState, textCount } from "./atoms";

const Input = () => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(textCount);

    const textHandler = (e) => {
      setText(e.target.value);
    };
    return <input onChange={textHandler} placeholder="아무거나 입력" />;
};

export default Input;