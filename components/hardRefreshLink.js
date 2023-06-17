import { useRouter } from 'next/router';

const HardRefreshLink = ({ href, children }) => {
    const router = useRouter();
    const handleClick = (event) => {
        event.preventDefault();
        router.push(`${href}?refresh=true`);
    };

    return (
        <a href={href} onClick={handleClick}>

        </a>
    );
};
export default HardRefreshLink;