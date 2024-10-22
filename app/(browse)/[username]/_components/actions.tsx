"use client";

import { Button } from "@/components/ui/button";
import { onFollow } from "@/actions/follow";
import { useTransition } from "react";

interface ActonsProps {
    isFollowing: boolean;
};

export const Actions = ({
    isFollowing,
}: ActonsProps) => {
    const [isPending, startTransition] = useTransition();

    const onClick = () => {
        startTransition(() => {
            onFollow("123");
        });
    };

    return (
        <Button disabled={isFollowing || isPending} onClick={onClick} variant="primary">
            Follow
        </Button>
    );
};