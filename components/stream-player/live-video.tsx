"use client";

import { Participant, Track } from "livekit-client"
import { useEffect, useRef, useState } from "react"
import { useTracks } from "@livekit/components-react"
import { useEventListener } from "usehooks-ts"


interface LiveVideoProps {
    participant: Participant
};

export const LiveVideo = ({
    participant,
}: LiveVideoProps) => {
    return (
        <div>
            LiveVideo
        </div>
    )
}