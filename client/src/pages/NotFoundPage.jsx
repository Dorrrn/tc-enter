import { Link } from 'react-router-dom';

export default function NotFoundPage() {
   return (
      <div className="NotFoundPage">
         <h1>Sorry, page doesn't exist!</h1>
         <Link to="/">Home</Link>
      </div>
   );
}
