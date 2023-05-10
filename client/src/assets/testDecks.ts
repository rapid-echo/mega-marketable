import { Deck } from '../types';
const testDeck: Deck = {
  SDI: [
    {
      card: 1,
      front: 'What is vertical scaling?',
      back: 'Vertical scaling takes place through an increase in the specifications of an individual resource.',
      keep: true,
    },
    {
      card: 2,
      front: 'What is horizontal scaling?',
      back: 'Horizontal scaling takes place through duplicating host machine as needed.',
      keep: true,
    },
    {
      card: 3,
      front: 'What is ACID?',
      back: 'Atomicity, Consistency, Isolation, Durability',
      keep: true,
    },
    {
      card: 4,
      front: 'What is sharding?',
      back: 'Sharding is a type of database partitioning that separates very large databases into smaller, faster more manageable parts called shards.',
      keep: true,
    },
    {
      card: 5,
      front: 'What is load balancing?',
      back: 'A simple technique for distributing workloads across multiple machines or clusters.',
      keep: true,
    },
    {
      card: 6,
      front: 'What is a distributed system?',
      back: 'A distributed system, in its most simplest definition, is a group of computers working together as to appear as a single computer to the end-user',
      keep: true,
    },
    {
      card: 7,
      front: 'What is a cluster?',
      back: 'A cluster is a group of computer machines that can individually run a software.',
      keep: true,
    },
  ],
  Algos: [
    { card: 1, front: 'question 1', back: 'answer 1', keep: true },
    { card: 2, front: 'question 2', back: 'answer 2', keep: true },
    { card: 3, front: 'question 2', back: 'answer 2', keep: true },
    { card: 4, front: 'question 2', back: 'answer 2', keep: true },
    { card: 5, front: 'question 2', back: 'answer 2', keep: true },
    { card: 6, front: 'question 2', back: 'answer 2', keep: true },
    { card: 7, front: 'question 2', back: 'answer 2', keep: true },
  ],
  Self: [
    { card: 1, front: 'question 1', back: 'answer 1', keep: true },
    { card: 2, front: 'question 2', back: 'answer 2', keep: true },
  ],
};

export default testDeck;
