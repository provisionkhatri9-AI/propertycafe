import Link from "next/link"

export default function UserProfileLink(){


    return(
        <div className="flex gap-2 justify-center px-4 py-2 bg-white rounded-xl">
            <div>
                <img src="/stars.png" alt="" className="w-5 h-5"/>
            </div>
            <div className="text-[clamp(0.8rem,4vw,1rem)]">
                Are you property owner?
            </div>
            <Link href="">
                <p className="underline text-[clamp(0.8rem,4vw,1rem)]">Sell/Rent for free</p>
            </Link>
        </div>
    )
}