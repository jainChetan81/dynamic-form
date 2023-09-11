"use client"
import Image from "next/image"
import { ModeToggle } from "../ModeToggle"
import "./Header.scss"
import Logo from "./logo.svg"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select"


const Header = () => {
    return (
        <header className="grid justify-between items-center py-3 px-[100px] gap-4">
            <Link href="/">
                <Image src={Logo} alt="logo" width={100} height={50} />
            </Link>
            <div className="ml-auto flex items-center gap-3">
                <Select defaultValue="questions">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Questions" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="questions">
                            <Link href="/">
                                Questions
                            </Link>
                        </SelectItem>
                        <SelectItem value="settings">
                            <Link href="/settings">
                                Settings
                            </Link>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="ml-auto">
                <ModeToggle />
            </div>

        </header>
    )
}

export default Header