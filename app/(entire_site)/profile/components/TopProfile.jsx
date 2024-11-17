'use client'
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './css/UserCardImage.module.css';

const stats = [
  { value: '34K', label: 'Followers' },
  { value: '187', label: 'Follows' },
  { value: '1.6K', label: 'Posts' },
];

export function UserCardImage() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      ></Card.Section>
      <div className='flex justify-between'>
        <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
            size={80}
            radius={80}
            mt={-30}
            className={classes.avatar}
        />
        <div className='flex gap-x-2 mt-2'>
            <Button  radius="xl"  size="sm"  className='' color='rgb(24, 24, 27)'>
                Follow
            </Button>
            <Button  radius="md"  size="sm" variant="default" className=''>
                <i className={`fa-duotone fa-solid fa-envelope fa-lg ${classes.linkIcon}`}></i>
            </Button>
        </div>
      </div>
      <Text ta="left" fz="lg" fw={500} mt="sm">
        Bill Headbanger
      </Text>
      <Text ta="left" fz="sm" c="dimmed">
        @Headbanger
      </Text>
      <Group mt="md" justify="space-between" gap={30}>
        {items}
      </Group>
      
    </Card>
  );
}