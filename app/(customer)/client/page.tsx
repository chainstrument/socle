import { Header } from "@/features/layout/Header";
import { PageParams } from "@/types/next";


export default async function RoutePage(props: PageParams<{}>) {
    return (
        <div className="h-full">
            <Header /> 
        </div>
    )
}