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
           
            <ul>
                <div className="space-y-4 h-96 mt-10 overflow-auto  md:p-10">
                    {
                        links.map((link, index) => <li key={index}>
                            <button className="btn btn-ghost"><Link href={link.path}>{link.name}</Link></button>
                        </li>)
                    }
                </div>
            </ul>
        </div>
    );
};

export default SideBar;