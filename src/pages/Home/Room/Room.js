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
                maxUsers: 50,
                sharedLinks: [{
                    url: window.location.origin + window.location.pathname + '?roomID=' + roomId,
                }],
                videoResolutionList: [
                    ZegoUIKitPrebuilt.VideoResolution_360P,
                    ZegoUIKitPrebuilt.VideoResolution_180P,
                    ZegoUIKitPrebuilt.VideoResolution_480P,
                    ZegoUIKitPrebuilt.VideoResolution_720P,
                  ],
               videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P, 
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