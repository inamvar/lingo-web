import { createRef } from 'react'
import Cookies from "js-cookie";
import {Constants} from "../common/constants";

export function AuthenticatedLink ({ url, filename, children }) {
    let link = createRef();
        const handleAction = async () => {

        if (link.current.href) {
            return; }

        const uniqueUrl = url + '?' + new Date().getTime(); // Add a unique query string to the URL

        const result = await fetch(uniqueUrl, {
            headers:{Authorization: `Bearer ${Cookies.get(Constants.token)}`}
        })

        const blob = await result.blob()
        const href = window.URL.createObjectURL(blob)

        if (link.current.href) {
            window.URL.revokeObjectURL(link.current.href);
        }

        link.current.download = filename;
        link.current.href = href;

        link.current.click();

    }

    return (
        <>
            <a role='button' ref={link} onClick={handleAction}>{children}</a>
        </>
    )
}

