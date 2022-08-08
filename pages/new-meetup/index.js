import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.message) {
      alert(data.message);
    } else {
      alert('Something went wrong.');
    }

    router.replace('/');
  };

  return (
    <>
      <Head>
        <title>Add your own meetup</title>
        <meta
          name='description'
          content='Store your meetups at one place with easy ui. Try one now.'
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetup;
