import Link from "next/link";

const SideBar = () => {
    const links = [
        {
            name: "File Manager",
            path: "/fileManager"
        },
        {
            name: "Appoinment",
            path: "/appoinment"
        },
        {
            name: "Executive",
            path: "/executive"
        },
        {
            name: "Social Media",
            path: "/socialMedia"
        },
        {
            name: "Job Board",
            path: "/jobBoard"
        },
        {
            name: "financial",
            path: "/financial"
        },
    ]
    return (
        <div>
            <h2 className="text-xl font-serif mb-5">isomorphic</h2>
            <ul>
                <div className="space-y-4">
                    {
                        links.map((link, index) => <li key={index}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>)
                    }
                </div>
            </ul>
        </div>
    );
};

export default SideBar;