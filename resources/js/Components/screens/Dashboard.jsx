import React, { useEffect, useState } from "react";

const DashboardScreen = () => {

    const [name, setName] = useState('');
    // useEffect(() => {
    //     (
    //         async () => {
    //             await fetch('/api/user/', {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 credentials: 'include'
    //             });
    //             const content = await respoonse.json();

    //             setName(content.name)
    //         }
    //     )
    // })

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/user', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await response.json();
            setName(data.user.Customers_fname);
        }
        fetchUser();
    }, []);

    return (
        <div>
            Hi {name}
            DASHBOARD
        </div>
    )
}

export default DashboardScreen;