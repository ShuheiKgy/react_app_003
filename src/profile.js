import React from 'react';

const Profile = (props) => {

    return (
        <dl>
            <dt>Name</dt><dd>{props.name}</dd>
            <dt>Age</dt><dd>{props.age}</dd>
            <dt>Love</dt><dd>{props.love}</dd>
        </dl>
    );
}

export default Profile;