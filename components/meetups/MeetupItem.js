import Link from 'next/link';

// import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/${props.id}`}>Show Details</Link>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;

/*
.
. 
. 
. 
. 
. 
*/
//This is just a demo for the programatic navigation using NextJs

// function MeetupItem(props) {
//   const router = useRouter();

//   const clickHandler = () => {
//     router.push(`/${props.id}`);
//   };

//   return (
//     <li className={classes.item}>
//       <Card>
//         <div className={classes.image}>
//           <img src={props.image} alt={props.title} />
//         </div>
//         <div className={classes.content}>
//           <h3>{props.title}</h3>
//           <address>{props.address}</address>
//         </div>
//         <div className={classes.actions}>
//           <button onClick={clickHandler}>Show Details</button>
//         </div>
//       </Card>
//     </li>
//   );
// }

// export default MeetupItem;
