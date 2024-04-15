import { Profiler } from "react";

const ProfilerComp = () => {
    const onRenderCallBack = (
        id,
        phase,
        actualDuration
    ) => {
        console.log(`${id} ${phase} phase:`);
        console.log(`Actual duration: ${actualDuration}`);
    }

    return (
        <Profiler id="prof" onRender={onRenderCallBack}>
            <div>
                <h1>Hello</h1>
                <p>this is Profiler Component</p>
            </div>
        </Profiler>
    )
}

export default ProfilerComp;