import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";

interface CreatorPageProps {
    params: {
        username: string;
    };
};

const CreatorPage = async ({
    params,
}: CreatorPageProps) => {
    const externalUser = await currentUser();
    const user = await getUserByUsername(params.username);

    if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
        throw new Error("Unauthorized");
    }

    return (
        <div className="h-full">
            Creator Page
        </div>
    );
}

export default CreatorPage;