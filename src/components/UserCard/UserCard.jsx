import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
const UserCard = ({ imgUrl, userName, maxWidth }) => {
    const userImageUrl = "/static/images/user-profile.jpg";
    const name = userName ? userName : 'Isabella Ding';
    const UserProfile = ({ imgRes }) => {
        return (
            <>
                {
                    imgRes ? (
                        <CardMedia
                            component="img"
                            height="100"
                            width="100"
                            image={imgRes}
                            alt="user profile"
                        />
                    ) : (
                        <CardMedia>
                            <AccountCircleIcon
                                sx={{
                                    width: 60,
                                    height: 60,
                                }}
                            />
                        </CardMedia>
                    )
                }
            </>
        );
    }
    return (
        <>
            <Card sx={{ maxWidth: 300, display: 'flex', flexDirection: 'row' }}>
                <UserProfile
                />
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>

        </>
    );
}
export default UserCard;