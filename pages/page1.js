import {useRecoilValue} from 'recoil';
import { textState } from '../components/atoms';

const page1 = ()=>{
    const text = useRecoilValue(textState);
    return (
        <div>
            <h1>Page1</h1>
            <div>{`Text : ${text}`}</div>
        </div>
    )
}

export default page1;