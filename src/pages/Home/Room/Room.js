import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom'
const Room = () => {
    const {roomId} = useParams();
    const meeting = async(element) =>{
        const appID = 2024379751;
        const serverSecret = "b1054c0dabcb1f097c5664659c5a6505";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(), "sahil"
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                scenario:{
                    mode:ZegoUIKitPrebuilt.VideoConference,
                }
            })

    }
  return (
    <div className='room-page '>
        <div ref={meeting} className="h-screen">

        </div>

    </div>
  )
}

export default Room