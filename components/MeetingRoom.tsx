'use client';
import { useState, useCallback } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Loader from './Loader';
import EndCallButton from './EndCallButton';
import { cn } from '@/lib/utils';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  const handleLayoutChange = useCallback((layout: CallLayoutType) => {
    setLayout(layout);
  }, []);

  const handleToggleParticipants = useCallback(() => {
    setShowParticipants(prev => !prev);
  }, []);

  const handleLeaveCall = useCallback(() => {
    router.push('/');
  }, [router]);

  const layoutOptions = ['Grid', 'Speaker-Left', 'Speaker-Right'];

  if (callingState !== CallingState.JOINED) {
    return <Loader />;
  }

  let CallLayout;
  switch (layout) {
    case 'grid':
      CallLayout = <PaginatedGridLayout />;
      break;
    case 'speaker-right':
      CallLayout = <SpeakerLayout participantsBarPosition="left" />;
      break;
    default:
      CallLayout = <SpeakerLayout participantsBarPosition="right" />;
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white bg-white dark:bg-black">
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full max-w-screen-xl items-center justify-center p-2">
          {CallLayout}
        </div>
        {showParticipants && (
          <div className="absolute right-0 top-0 h-full w-full md:w-1/4 bg-gray-900/75 p-2">
            <CallParticipantsList onClose={handleToggleParticipants} />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 w-full bg-transparent py-2">
        <div className="flex flex-wrap w-full items-center justify-center gap-2 md:gap-5 px-2">
          <CallControls onLeave={handleLeaveCall} />
          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#1a2d19] px-4 py-2 hover:bg-[#4c535b]">
                <LayoutList size={20} className="text-white" />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
              {layoutOptions.map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    onClick={() => handleLayoutChange(item.toLowerCase().replace(' ', '-') as CallLayoutType)}
                  >
                    {item}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-dark-1" />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <CallStatsButton />
          <button onClick={handleToggleParticipants}>
            <div className="cursor-pointer rounded-2xl bg-[#1c2d19] px-4 py-2 hover:bg-[#4c535b]">
              <Users size={20} className="text-white" />
            </div>
          </button>
          {!isPersonalRoom && <EndCallButton />}
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;