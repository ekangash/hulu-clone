import React from 'react'
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderIcon title="Home" Icon={HomeIcon}/>
                <HeaderIcon title="Trending" Icon={LightningBoltIcon}/>
                <HeaderIcon title="Verified" Icon={BadgeCheckIcon}/>
                <HeaderIcon title="Collections" Icon={CollectionIcon}/>
                <HeaderIcon title="Search" Icon={SearchIcon}/>
                <HeaderIcon title="Account" Icon={UserIcon}/>
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}


export default Header;