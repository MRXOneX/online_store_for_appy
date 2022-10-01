import { useEffect, useState } from "react"

export default function Invoice() {
    const [invoice, setInvoice] = useState('')


    useEffect(() => {
        if (localStorage.getItem('invoice')) {
            setInvoice(localStorage.getItem('invoice'))
        }
    }, [])
    return (
        <div className="w-full h-full flex items-center justify-center">
            <img src={invoice} alt="invoice" />
        </div>
    )
}