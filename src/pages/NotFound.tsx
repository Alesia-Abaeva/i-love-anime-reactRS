import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">GO HOME</Link>
    </div>
  );
}

export default NotFound;
