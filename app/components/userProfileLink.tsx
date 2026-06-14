import Link from "next/link"
export default function UserProfileLink(){

    return(
        <div className="flex gap-2 justify-center px-4 py-2 bg-white rounded-xl">
            <div>
                <img src="/stars.png" alt="" className="w-5 h-5"/>
            </div>
            <div>
                Are you property owner?
            </div>
            <Link href="">
                <p className="underline text-[#6A3093]">Sell/Rent for free</p>
            </Link>
        </div>
    )
}