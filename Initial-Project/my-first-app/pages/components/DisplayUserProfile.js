const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


function UserProfile() {
    return (
        <div>
            <h3>{user?.name}</h3>
            <img 
                src={user?.imageUrl}
                alt={`userName: ${user.name}`}
                style={
                    {
                        width: user.imageSize,
                        height: user.imageSize,
                    }
                }
            />
        </div>
    );
}

export default function DisplayUserProfile() {
    return (
        <div>
            <UserProfile />
        </div>
    );
}
