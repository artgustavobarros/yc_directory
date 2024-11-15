import { STARTUPS_BY_AUTHOR_QUERY } from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import { StartupCard, StartupCardType } from "./startup-card"
import { Skeleton } from "./ui/skeleton"

export async function UserStartups ({id} : {id: string}) {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, {id})
    return (
        <>
            {
                startups.length > 0 ? startups.map((startup: StartupCardType) => (
                    <StartupCard post={startup} key={startup._id}/>
                ) ): (
                    <p className="no-result">No posts yet</p>
                )
            }
        </>
    )
}

export function StartupCardSkeleton () {
    return (
        <>
            {Array.from({length: 5}).map((_,index) => (
                <li key={`skeleton-${index}`}>
                    <Skeleton className="startup-card_skeleton"/>
                </li>
            ))}
        </>
    )
}