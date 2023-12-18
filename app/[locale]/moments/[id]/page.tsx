export default function Page({params}){
    return (
        <div className="w-full h-[150vh] bg-green-950">
            <div className="w-full container h-[50vh]  flex justify-center items-center">Moment {params.id}</div>
        </div>
        )
}