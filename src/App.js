import ProfileCard from './component/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="card-container">
    <ProfileCard 
     productId="1"
     productPic="https://media.istockphoto.com/id/1324847242/photo/pair-of-white-leather-trainers-on-white-background.jpg?s=1024x1024&w=is&k=20&c=paCekjw8iHTIKD4jpPXPdZY60gtOgbXV3pO9k1OTASo="
     productName="Shoe"
     Brand="GARNIER"
     productDescription="Garnier Pure Active Micellar Cleansing Water, 125 ml"
     Price="$60"
  
    />
    <ProfileCard 
     productId="2"
     productPic="https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.jpg?b=1&s=170667a&w=0&k=20&c=dRs8nww4M4ibLBD1UMUzBYcw13lnk3Z7s0THB9_SM6Y="
     productName="Watch"
     Brand="GARNIER"
     productDescription="Garnier Pure Active Micellar Cleansing Water, 125 ml"
     Price="$60"
    />
    <ProfileCard 
    productId="3"
    productPic="https://media.istockphoto.com/id/1324847242/photo/pair-of-white-leather-trainers-on-white-background.jpg?s=1024x1024&w=is&k=20&c=paCekjw8iHTIKD4jpPXPdZY60gtOgbXV3pO9k1OTASo="
    productName="Shoes2"
    Brand="GARNIER"
    productDescription="Garnier Pure Active Micellar Cleansing Water, 125 ml"
    Price="$60"
    />
    <ProfileCard
    productId="4"
    productPic="https://media.istockphoto.com/id/1450776898/photo/african-american-black-man-in-dark-gray-t-shirt-and-blue-jeans-standing-in-front-of-white.jpg?b=1&s=170667a&w=0&k=20&c=05DF6BkEtz28bPvaepQqb-PEbBUcNlQP-G-qrB3E4bU="
    productName="Tshirt"
    Brand="GARNIER"
    productDescription="Garnier Pure Active Micellar Cleansing Water, 125 ml"
    Price="$60"
    />
    <ProfileCard
    productId="5"
    productPic="https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.jpg?b=1&s=170667a&w=0&k=20&c=dRs8nww4M4ibLBD1UMUzBYcw13lnk3Z7s0THB9_SM6Y="
    productName="Phone"
    Brand="GARNIER"
    productDescription="Garnier Pure Active Micellar Cleansing Water, 125 ml"
    Price="$60"
    />
    </div>
  );
}

export default App;
