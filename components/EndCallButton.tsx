import React from 'react'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const EndCallButton = () => {
    const call = useCall();
    const router = useRouter();

    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();

    const isMeetingOwner = localParticipant &&
    call?.state.createdBy && localParticipant.userId ===
    call.state.createdBy.id;

    if(!isMeetingOwner) return null;
    return (
        <Button onClick={async () => {
            await call.endCall();
            router.push('/')
        }} className="bg-red-700 hover:bg-opacity-80"> 
            End call for everyone
        </Button>
    )

    
  return (
    <div>EndCallButton</div>
  )
}

export default EndCallButton