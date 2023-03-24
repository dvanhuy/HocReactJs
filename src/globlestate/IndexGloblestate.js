import {GlobleProvider} from "../globlestate"
import AppFake from "./AppFake"
// thay thế tạm cho index
function IndexGlobleState(){
    return (
        <GlobleProvider>
            <AppFake/>
        </GlobleProvider>
    )
}
export default IndexGlobleState