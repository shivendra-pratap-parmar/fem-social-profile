import { useState } from 'react';
import Jessica from '../assets/images/avatar-jessica.jpeg';
import LinkCard from './LinkCard';

export default function ProfileCard(){
    const [profileLinks, setProfileLinks] = useState([
        {
            title: 'GitHub',
            link: '/'
        },
        {
            title: 'Frontend Mentor',
            link: '/'
        },
        {
            title: 'LinkedIn',
            link: '/'
        },
        {
            title: 'Twitter',
            link: ''
        },
        {
            title: 'Instagram',
            link: ''
        }
    ]);

    return (
        <>
            <div
                className="profile_card_container"
            >
                {/* profile picture */}
                <section
                    className="header_section"
                >
                    <img
                        src={Jessica}
                        className='profile_dp'
                        alt='User Profile'
                    />

                    <div
                        className='profile_name_section'
                    >
                        <p 
                            className='fs-1 fw-600'
                        >
                            Jessica Randall
                        </p>

                        <p
                            className='text-primary fw-600'
                        >
                            London, United Kingdom
                        </p>
                    </div>

                    <p
                        className='o-90'
                    >
                        <q>Front-end developer and avid reader.</q>
                    </p>
                </section>

                {/* links */}
                <section
                    className='link_section'
                >
                {
                    profileLinks.map((link, index) => (
                        <LinkCard
                            key={`link_card_index_${ index }`}
                            linkdetails={link}
                        />
                    ))
                }
                </section>
            </div>
        </>
    )
}