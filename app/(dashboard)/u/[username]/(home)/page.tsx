interface CreatorPageProps {
    params: {
        username: string;
    };
};

const CreatorPage = async ({
    params,
}: CreatorPageProps) => {
    return (
        <div className="h-full">
            Creator Page
        </div>
    );
}

export default CreatorPage;