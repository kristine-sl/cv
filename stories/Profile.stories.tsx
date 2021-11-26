import { Profile } from '../src';

export default {
  title: 'Profile',
  component: Profile,
};

const profileExampleData = {
  name: 'Name Lastname',
  jobTitle: 'Job Title',
  about: 'This is a longer description about the person.',
  info: {
    age: 30,
    location: 'Oslo',
    email: 'name.lastname@emailprovider.com',
    phoneNumber: '123 46 789',
  },
};

export const Default = () => (
  <Profile
    image="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=101"
    data={profileExampleData}
  />
);
