import SuccessPage from "../../../../components/SuccessPage";

export const dynamic = "force-dynamic";

async function Page({ searchParams }) {

    const params = await searchParams;
    const sessionId = params?.session_id;

    return <SuccessPage sessionId={sessionId} />;
}

export default Page;