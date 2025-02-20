"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "../hint";
import { Button } from "../ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";

export const ChatToggle = () => {
    const {
        collapsed,
        onExpand,
        onCollapse
    } = useChatSidebar((state) => state);
}