import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1767875762123-ef62592784f6?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL=["https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
    const COLD_URL=["https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
    const RAIN_URL=["https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL[0] :(info.temp >15  ? HOT_URL[0] : COLD_URL[0])}
                    title="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{info.city}  &nbsp;
                         {info.humidity>80 ? <BeachAccessIcon/> :(info.temp >15  ? <SunnyIcon/> : <AcUnitIcon/>)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temprature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Temprature Minimum: {info.tempMin}&deg;C</p>
                        <p>Temprature Maximum: {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>            
            </Card>
            </div>         
        </div>
    )
}