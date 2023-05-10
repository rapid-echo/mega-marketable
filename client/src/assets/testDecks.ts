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
    {
      card: 1,
      front:
        'Using bigO notation, how long does it take to find an item in a hash table?',
      back: 'O(1)',
      keep: true,
    },
    {
      card: 2,
      front: 'What does LIFO and FIFO mean?',
      back: 'Last In First Out, First In First Out',
      keep: true,
    },
    {
      card: 3,
      front:
        'Bubble sort, selection sort, and insertion sort execute in _______ time.',
      back: 'O(N^2)',
      keep: true,
    },
    {
      card: 4,
      front: 'A binary tree is a search tree if',
      back: 'every left child has a key less than the parent and every right child has a key greater than the parent.',
      keep: true,
    },
    {
      card: 5,
      front:
        'True or False: The bubble sort always ends up comparing every item with every other item',
      back: 'False',
      keep: true,
    },
    {
      card: 6,
      front:
        'True or False: In an unordered array, it’s generally faster to find out an item is not in the array than to find out it is.',
      back: 'False',
      keep: true,
    },
    {
      card: 7,
      front: 'Big O notation tells',
      back: 'How the speed of an algorithm relates to the number of items',
      keep: true,
    },
  ],
  Self: [
    {
      card: 1,
      front: `Will John's mattress ever move?`,
      back: 'No',
      keep: true,
    },
    {
      card: 2,
      front: 'Does Jaeni have the solution?',
      back: 'Yes.',
      keep: true,
    },
    { card: 3, front: 'Who is the stretch master?', back: 'Jeb', keep: true },
    {
      card: 4,
      front: 'How many Casio watches does Hazel own?',
      back: '11',
      keep: true,
    },
    {
      card: 5,
      front: `What is Sid's real name?`,
      back: 'Will Sentence',
      keep: true,
    },
    {
      card: 6,
      front: 'True or False: Gavin knows how to spell Yining.',
      back: 'False',
      keep: true,
    },
    { card: 7, front: 'question 2', back: 'answer 2', keep: true },
    { card: 8, front: 'question 2', back: 'answer 2', keep: true },
  ],
};

export default testDeck;
