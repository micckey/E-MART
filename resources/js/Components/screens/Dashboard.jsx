import React, { useEffect, useState } from "react";

const DashboardScreen = () => {

    const [name, setName] = useState('');
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        // Use user data as needed
        setName(user.Customers_fname)
      }, [])

    return (
        <div>
            Hi {name} <br />
            DASHBOARD
        </div>
    )
}

export default DashboardScreen;