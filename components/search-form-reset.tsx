'use client'

import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function SearchFormReset(){
    function reset() {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) {
            form.reset()
        }
    }
    return (
        <Button 
            type='reset' 
            onClick={reset}
            className="search-btn text-white"
        >
            <Link href='/'>
                <X className="size-5"/>
            </Link>
        </Button>
    )
}