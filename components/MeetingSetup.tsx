'use client'

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({ setIsSetupComplete }: {setIsSetupComplete: (value: boolean) => void}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)
  
  const call = useCall();

  if(!call) {
    throw new Error('usecall must be used within StreamCall component')
  }

  useEffect(() => {
    if(isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    } 
  }, [isMicCamToggledOn, call?.camera, call?.microphone])
  

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-3 text-black dark:text-white">
      <h1 className="text-2xl font-bold">Joining a meeting</h1>
      <VideoPreview className="w-full max-w-[90%] max-h-[50%]"/>
      <div className="flex items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input 
          type="checkbox"
          checked={isMicCamToggledOn}
          onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button className="rounded-md bg-green-600 bg-opacity-85 px-4 py-2.5 text-white" onClick={() => {
        call.join();

        setIsSetupComplete(true);
      }}>
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup
