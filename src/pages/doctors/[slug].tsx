import { useRouter } from 'next/router';
import React from 'react';

const DoctorPage = () => {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <div>
            <h1>Doctor's Profile</h1>
            <p>{slug}</p>
        </div>
    );
};

export default DoctorPage;